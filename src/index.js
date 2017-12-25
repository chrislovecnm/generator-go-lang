import yosay from 'yosay'
import proc from 'process'
import path from 'path'
import chalk from 'chalk'
import Generator from 'yeoman-generator'
import { spawnDep } from './helpers'

// load configs
import templates from './templates'

// generator
class GolangGenerator extends Generator {

  constructor(args, options) {
    super(args, options)

    // this allows to directly pass in the name of the application
    this.argument('appname', {
      desc: `The name of the application (e.g. 'hello-world')`,
      type: String,
      optional: true,
      default: path.basename(proc.cwd()),
    })

    this.appName = this.appname
  }

  // we use a property, because this is executed first
  get initializing() {

      function hello() {
        // say yo, to any new gopher
        this.log(yosay(`Greetings Gopher! Let's get you started with your next great project.`))
      }

      return {
        hello
      }
  }

  // set necessary paths
  paths() {
    // set new source path
    this.sourceRoot(path.resolve(this.sourceRoot(), '../../templates/'))
  }

  // prompting the user for inputs
  prompting() {

    const cb = this.async()

    const prompts = [
      {
        type: 'input',
        name: 'app',
        message: `What is the name of your new app?`,
        default: this.appName,
        store: true,
      }, {
        type: 'confirm',
        name: 'vendor',
        message: `Would you like to commit ${chalk.yellow('vendor')}?`,
        default: true,
        store: true
      }
    ]

    if (spawnDep(["--help"])) { // test `dep` is installed
      prompts.push({
        type: 'confirm',
        name: 'goPkg',
        message: `Would you like to initialize ${chalk.yellow('dep')}?`,
        default: true,
        store: true
      })
    }

    return this.prompt(prompts).then(({app, goPkg, vendor}) => {
      this.appName = app
      this.goPkg = goPkg
      this.vendor = vendor
      cb()
    })
  }

  // just in case
  configuring() { return }

  // writing our files
  writing() {
    // log
    this.log(`Coyping templates ...`)

    // parse templates
    templates.forEach(template => {
      this.fs.copyTpl(
        this.templatePath(template.from),
        this.destinationPath(template.to),
        this
      )
    })

    // setup project
    if (this.goPkg) {
      spawnDep(["init"])
    }
  }

}

// exporting generator as CommonJS module
module.exports = GolangGenerator

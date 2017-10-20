import yosay from 'yosay';
import proc from 'process';
import path from 'path';
import Generator from 'yeoman-generator';

// load configs
import templates from './templates'

// generator
class GolangGenerator extends Generator {

  constructor(args, options) {
    super(args, options);

    // this allows to directly pass in the name of the application
    this.argument('appname', {
      desc: `The name of the application (e.g. 'hello-world')`,
      type: String,
      optional: true,
      default: path.basename(proc.cwd()),
    });

    this.appName = this.appname;
  }

  // we use a property, because this is executed first
  get initializing() {

      function hello() {
        // say yo, to any new gopher
        this.log(yosay(`Greetings Gopher! Let's get you started with your next great project.`));
      }

      return {
        hello
      }
  }

  // set necessary paths
  paths() {
    // set new source path
    this.sourceRoot(path.resolve(this.sourceRoot(), '../../templates/'));
  }

  // prompting the user for inputs
  prompting() {

    const cb = this.async();

    console.log(this.appName);

    const prompts = [{
      type: 'input',
      name: 'app',
      message: `What is the name of your new app?`,
      default: this.appName,
      store: true,
    }];

    return this.prompt(prompts).then(({app}) => {
      this.appName = app;
      cb();
    })
  }

  // just in case
  configuring() { return };

  // writing our files
  writing() {
    // log
    this.log(`Coyping templates ...`);

    // parse templates
    templates.forEach(template => {
      this.fs.copyTpl(
        this.templatePath(template.from),
        this.destinationPath(template.to),
        this
      );
    });

    // setup project
    this.spawnCommandSync("dep", ["init"], {cwd: this.destinationRoot()})
  }

}

// exporting generator as CommonJS module
module.exports = GolangGenerator;

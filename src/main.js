import yeoman from 'yeoman-environment'

const env = yeoman.createEnv()
env.registerStub(require('./app'), 'npm:app')
env.run('npm:app')

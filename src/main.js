import yeoman from 'yeoman-environment'
import path from 'path'
import proc from 'process'

const env = yeoman.createEnv(proc.argv)
env.registerStub(require('./app'), 'npm:app')
env.run('npm:app')

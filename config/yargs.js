const argv = require('yargs')
              .options({
                'b': {
                  alias: 'base',
                  type: 'number',
                  demandOption: true,
                  describe: 'Es la base de la tabla de mutiplicar'
                },
                'l': {
                  alias: 'listar',
                  type: 'boolean',
                  default: false,
                  describe: 'Muestra la tabla en consola'
                },
                't': {
                  alias: 'to',
                  type: 'number',
                  default: 10,
                  describe: 'Hasta qué número se multiplica'
                }
              })
              .check((argv, options) => {
                if(isNaN(argv.b) || isNaN(argv.t)){
                  throw 'La base y el to tienen que ser número';
                }
                return true;
              })
              .argv;


module.exports = argv;

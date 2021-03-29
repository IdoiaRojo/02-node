const {creatArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();
// let base = 2;

// console.log(process.argv);
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base=5] = arg3.split('=');
// console.log(base);

console.log(argv);

console.log('base: yargs: ', argv.b)
console.log('base: yargs: ', argv.l)

creatArchivo(argv.b, argv.l, argv.t)
  .then(nombreArchivo => console.log(`Funcionó!!!${nombreArchivo} se ha creado`))
  .catch(err => console.log(err));


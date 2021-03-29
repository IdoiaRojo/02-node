const fs = require('fs');
var colors = require('colors');

const creatArchivo = async (base = 5, listar, to) => {  
  try {
    let salida = '';

    for (let i = 1; i <= to; i++) {
      salida += `${base} x ${i} = ${base*i}\n`;
    }
    if( listar){
      console.log(`=====================`.grey);
      console.log(`        TABLA DEL ${base}`.bgGreen);
      console.log(`=====================`.grey);
      console.log(salida)
    }
    fs.writeFileSync(`salida/tabla-${base}.txt`, salida );

    return `tabla-${base}.txt`;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  creatArchivo
}

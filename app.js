const { argv } = require('./config/yargs');
const colors = require('colors');

console.log('argv');
console.log(argv);

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            //    .then(data => console.log(data))
            //    .catch(error => console.log(`Listado no mostrado, error: ${error}`))
        break;

    case 'crear':
        console.log('Crear');

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(`${archivo}`)))
            .catch(error => console.log(`Archivo no creado, error: ${error}`))
        break;

    default:
        console.log('Comando no reconocido');


}
//console.log('argv');
//console.log(argv);
//console.log('Limite', argv.limite);


//let parametro = argv[2];
//let base = parametro.split('=')[1]

//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado: ${archivo}`))
//    .catch(error => console.log(`Archivo no creado, error: ${error}`))
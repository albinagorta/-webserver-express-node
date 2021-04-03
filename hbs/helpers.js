const hbs = require('hbs');
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})
hbs.registerHelper('capitalizar', (texto) => {
    let cadenas = texto.split(' ');
    cadenas.forEach((cadena, idx) => {
        cadenas[idx] = cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();
    });
    return cadenas.join(' ');
})
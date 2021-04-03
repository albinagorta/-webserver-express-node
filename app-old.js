const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let personas = [{
        id: 1,
        nombre: 'Angel',
        apellido: 'Albinagorta'
    }, {
        id: 2,
        nombre: 'Angel',
        apellido: 'Albinagorta'
    }, {
        id: 3,
        nombre: 'Angel',
        apellido: 'Albinagorta'
    }];
    res.write(JSON.stringify(personas));
    /* res.write('Hola mundo'); */
    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');
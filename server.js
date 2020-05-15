const estudiantes = {
    findById,
    findByMatricula,
    findAll,
}=require('./estudiantes.js');
// para hacer peticion HTTP y definimos el puerto
const express = require('express');
const app = express();
const port = 4000;
// Muestra este mensaje desde raiz "/"
app.get('/',(req,res) => {
    res.send('Acceder al API /estudiantes');
});
// Muestra todos los estudiantes
app.get('/estudiantes', (req,res) => {
   let registros = estudiantes.findAll();
 res.status(200).json(registros);
});
// Muestra todos los estudiantes
app.get('/estudiantes',(req,res) => {
    res.send(findAll());
    console.log(req);
});
// Muestra los estudiantes por ID
app.get('/estudiantes/:id', (req,res) => {
    let registros = estudiantes.findById(req.params.id);
    res.status(200).json(registros);
});
// Muestra los estudiantes por MATRICULA
app.get('/estudiantes/:matricula', (req,res) => {
    let registros = estudiantes.findByMatricula(req.params.matricula);
    res.status(200).json(registros);
});
// Crea un nuevo estudiante
app.post('/estudiantes', (req,res) => {
    res.send('Creando un nuevo estudiante');
});
// Modifica el estudiante especifico con id
app.put('/estudiantes/:id', (req,res) => {
    res.send('Modificando el registro del estudiante ' + req.params.id);
});
// Modifica atributos del estudiante con id
app.patch('/estudiantes/:id', (req,res) => {
    res.send('Modificando atributos del estudiante ' + req.params.id);
});
// Elimina atributos del estudiante
app.delete('/estudiantes/:id', (req,res) => {
    res.send('Borrando atributos del estudiante ' + req.params.id);
});
// Con este muestra mensaje si se conecto bien el servidor
app.listen(port, () => {
    console.log('Servidor escuchando por el puerto:',port);
}).on('error', err => {
    console.log('Error al inciar el servidor:',err);
});
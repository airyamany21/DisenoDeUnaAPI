const estudiantes = [
     {id: "001", matricula: "01142739", nombre: "karen", semestre: 7, creditos: 280},
     {id: "002", matricula: "01132739", nombre: "karla", semestre: 8, creditos: 280},
     {id: "003", matricula: "01132738", nombre: "abner", semestre: 8, creditos: 280},
     {id: "004", matricula: "01142736", nombre: "juan", semestre: 7, creditos: 280},
     {id: "005", matricula: "01142734", nombre: "lugo", semestre: 7, creditos: 280}];
// funcion que retorna el id de estudiantes
const findById = function (id) {
     return estudiantes.find((e) => {
          return e.id == id;
     });
};
// fucion que retorna la matricula de estudiantes
const findByMatricula = function (matricula) {
     return estudiantes.find((e) => {
          return e.matricula == matricula;
     });
};
// funcion que retorna todos los estudiantes
const findAll = function() {
     return estudiantes;
};
//Exporta el Id,Matricula,Estudiantes.
exports.findById = findById;
exports.findByMatricula = findByMatricula;
exports.findAll = findAll;


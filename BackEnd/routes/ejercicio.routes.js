module.exports = app =>
{
    const ejercicios = require("../controllers/ejercicio.controller.js");

    var router = require("express").Router();

    //Crear un ejercicio
    router.post("/",ejercicios.create);

    //Recuperar todas las bicicletas
    router.get("/",ejercicios.findAll);

    //Recuperar una bicicleta dado un id
    router.get("/:id",ejercicios.findOne);

    //Actualizar una bicicleta dado un id
    router.put("/:id",ejercicios.update);

    //Borrar una bicicleta dado un id
    router.delete("/:id",ejercicios.delete);

    app.use('/api/ejercicios',router);
}
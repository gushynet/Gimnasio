const db = require("../models");
const TEjercicio = db.ejercicios;
const Op = db.Sequelize.Op;



//crea y guarda un ejercicio
exports.create = (req,res) =>
{
    if(!req.body.denominacion)
    {
        res.status(400).send({message: "El contenido no puede estar vacío"});
        return;
    }


    const ejercicio =
    {
        denominacion: req.body.denominacion,
        GrupoMuscular: req.body.GrupoMuscular,
        descripcion: req.body.descripcion
    };

    TEjercicio.create(ejercicio).then(data =>
    {
        res.send(data);
    })
    .catch(err =>
    {
        res.status(500).send
        ({
            message: 
                err.message || "Se ha producido errores durante la creación del ejercicio"
        });
    });
};

//devuelve todos los ejercicios
exports.findAll = (req,res) =>
{
    TEjercicio.findAll().then(data =>
    {
        res.send(data);
    })
    .catch(err =>
    {
        res.status(500).send
        ({
            message:
                err.message || "Algun error se ha producido al recuperar los ejercicios"
        });
    });
    
};

//devuelve un ejercicio dado un id
exports.findOne = (req,res) =>
{
    const id = req.params.id;

    TEjercicio.findByPk(id).then(data => 
    {
        if(data)
        {
            res.send(data);
        }
        else
        {
            res.status(404).send
            ({
                message: `No se encuentra el ejercicio con id=${id}.`
            });
        }
    })
    .catch(err => 
    {
        res.status(500).send
        ({
          message: "Error recuperando el ejercicio con id=" + id
        });
    });
};

//actualizar un ejercicio dado un id
exports.update = (req,res) =>
{
    const id = req.params.id;

    TEjercicio.update(req.body, {where: { id: id }}).then(num => 
    {
        if (num == 1) 
        {
            res.send
            ({
              message: "El ejercicio se actualizó correctamente."
            });
        } 
        else
        {
            res.send
            ({
              message: `No se puede actualizar el ejercicio con id=${id}.`
            });
        }
    })
    .catch(err => 
    {
        res.status(500).send
        ({
            message: "Error actualizando el ejercicio con id=" + id
        });
    });
};

//eliminar un ejercicio dado un id
exports.delete = (req,res) =>
{
    const id = req.params.id;

    TEjercicio.destroy({where: { id: id }}).then(num => 
    {
        if (num == 1) 
        {
            res.send({message: "El ejercicio se borró correctamente!"});
        } 
        else
        {
            res.send({message: `No se puede borrar el ejercicio con id=${id}.`});
        }
    })
    .catch(err =>
    {
      res.status(500).send({message: "No se puede borrar el ejercicio con id=" + id});
    });
};


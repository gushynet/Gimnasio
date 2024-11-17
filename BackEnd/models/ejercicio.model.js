module.exports = (sequelize,Sequelize) =>
{
    const TEjercicio = sequelize.define("ejercicio", 
    {
        denominacion:
        {
            type: Sequelize.STRING
        },
        GrupoMuscular:
        {
            type: Sequelize.STRING
        },
        descripcion:
        {
            type: Sequelize.STRING
        }
    });

    return TEjercicio;
};
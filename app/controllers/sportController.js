const Sport = require('../models/Sports');



async function getAllSport(req,res){
    try{
        const sports =await Sport.findAll({
            attributes: ['id', 'name']
        });
        res.json(sports);
    }catch(err){
        console.error('Error eliminando persona:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); 
    }
}
async function updateSport(req,res){
    try{
        const id = req.params.id;
        const {name} = req.body;
        const sport = await Sport.findByPk(id);

        if(sport){
            await sport.update({
                name: name || sport.name,
            })
            res.json({ message: 'Deporte actualizado correctamente' });
        }else{
            res.status(404).json({ error: 'Deporte no encontrado' });
        }
    }catch(error){
        console.error('Error actualizando deporte:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
async function getSportById(req,res){
    try{
        const {id} = req.params;
        const sport = await Sport.findByPk(id);

        if(sport){
            res.json(sport.name);
        }else{
            res.status(404).json({ error: 'Deporte no encontrado' });
        }
    }catch(err){
        console.error('Error eliminando persona:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); 
    }
}

async function postSport(req,res){
    try{
        const {name} = req.body;

        const newSport =await Sport.create({
            name
        });
    
        res.json(newSport);
    }catch(err){
        console.error('Error eliminando persona:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); 
    }
}


module.exports ={
    postSport,
    getSportById,
    getAllSport,
    updateSport
}
const PersonSport = require('../models/PersonSport');



async function getAllPersonSport(req,res){
    try{
        const personSport =await PersonSport.findAll();
        res.json(personSport);
    }catch(error){
        console.error('Error obteniendo  los deportes en los que participan las personas:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); 
    }
}

async function updatePersonSport(req,res){
    try{
        const id = req.params.id;
        const {personId,sportId} = req.body;
        const personSport = await PersonSport.findByPk(id);
        if(personSport){
            await personSport.update({
                PersonId: personId || personSport.PersonId,
                SportId: sportId || personSport.SportId,

            })
            res.json({ message: 'Deporte o persona actualizado correctamente' });
        }else{
            res.status(404).json({ error: 'No se encontró a la persona con un deporte'});
        }
    }catch(error){
        console.error('Error actualizando deporte socio:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
async function getPersonSportById(req,res){
    try{
        const {id} = req.params;
        const personSport = await PersonSport.findByPk(id);

        if(personSport){
            res.json(personSport);
        }else{
            res.status(404).json({ error: 'Deporte persona no encontrado' });
        }
    }catch(err){
        console.error('Error al editar personSport:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); 
    }
}

async function postPersonSport(req,res){
    try{
        const {status,personId,sportId} = req.body;

        const newPersonSport =await PersonSport.create({
            status,
            PersonId: personId,
            SportId: sportId
        });
    
        res.json(newPersonSport);
    }catch(error){
        console.error('Error eliminando peronsa deporte:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); 
    }
}

async function deletePersonSport(req,res){
    try{
        const id = req.params.id;
        const personSport = await PersonSport.findByPk(id);

        //si existe la persona
        if(personSport){
            await personSport.destroy();
            res.json({ message: 'Socio Deporte eliminado correctamente' }); 
        }else{
            res.status(404).json({ error: 'Socio deporte no encontrado' }); // Si no se encontró el registro, enviar una respuesta de error
        }
    }catch(error){
        console.error('Error eliminando socio deporte:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); 
    }
  }


module.exports ={
    getAllPersonSport,
    updatePersonSport,
    getPersonSportById,
    postPersonSport,
    deletePersonSport
}
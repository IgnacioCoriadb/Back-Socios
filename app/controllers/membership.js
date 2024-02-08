const Membership= require("../models/Membership");


async function getAllMembership(req,res){
    try{
        const membership = await Membership.findAll();
        res.json(membership);
    }catch(error){
        console.error('Error obteniendo socios:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); 
    }
}

async function updateMembership(req,res){
    try{
        const id = req.params.id;
        const {status,lastPayment} = req.body;
        const membership = await Membership.findByPk(id);

        if(membership){
            await membership.update({
                status: status || membership.status,
                lastPayment: lastPayment || membership.lastPayment
            })
            res.json({ message: 'Socio actualizado correctamente' });
        }else{
            res.status(404).json({ error: 'Socio no encontrado' });
        }
    }catch(error){
        console.error('Error actualizando el socio:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

async function getMembershipById(req,res){
    try{
        const {id} = req.params;
        const membership = await Membership.findByPk(id);

        if(membership){
            res.json(membership);
        }else{
            res.status(404).json({ error: 'Socio no encontrado' });
        }
    }catch(err){
        console.error('Error buscando socio por id:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); 
    }
}

async function postMembership(req,res){
    try{
        const {personId,lastPayment,status} = req.body;

        const newMembership =await Membership.create({
            personId,
            lastPayment,
            status
        });
    
        res.json(newMembership);
    }catch(error){
        console.error('Error creando socio:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); 
    }
}

async function deleteMembership(req,res){
    try{
        const id = req.params.id;
        const membership = await Membership.findByPk(id);

        //si existe la persona
        if(membership){
            await membership.destroy();
            res.json({ message: 'Socio eliminado correctamente' }); 
        }else{
            res.status(404).json({ error: 'Socio no encontrado' }); // Si no se encontró el registro, enviar una respuesta de error
        }
    }catch(error){
        console.error('Error eliminando socio:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); 
    }
  }

module.exports = {
   getAllMembership,
   updateMembership,
   getMembershipById,
   postMembership,
   deleteMembership
};
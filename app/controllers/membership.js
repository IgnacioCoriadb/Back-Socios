const Membership= require("../models/Membership");
const Person =require("../models/Person");

async function getAllMembership(req,res){
    try{
        const membership = await Membership.findAll({
            include:[{
                model:Person
            }]
        });
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
        const membership = await Membership.findByPk(id,{
            include: [{
                model: Person
            }]
        });

        if(membership){
            res.json(membership);
        }else{
            res.status(404).json({ error: 'Socio no encontrado' });
        }
    }catch(error){
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

//verificar si un usuario es socio o no
async function isPersonMembership(req,res){
    try{
        const personId = req.params.id;
        const isPersonMembership = await Membership.findOne({
            where:{
                personId: personId,
            },
            include: [{
                model: Person,
            }]
    });

        if(isPersonMembership){
            res.json({isMembership:true,person:isPersonMembership});
        }else{
            res.status(404).json({ error: 'La persona no es socio', isMembership:false });
        }
    }catch(error){
        console.error('Error buscando personas que son socias:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); 
    }
}

//mostrar socios que tengan la cuota al día 
async function getActiveMembers(req,res){
    try{
        const getActiveMembers = await Membership.findAll({
            where:{
                status:true
            },
            include:[
                {
                    model: Person
                }
            ]
        });

        if(getActiveMembers.length > 0){
            res.json(getActiveMembers);
        }else{
            res.status(200).json({error: "No hay socios con la cuota al día"});
        }  
    }catch(error){
        console.error('Error buscandosocios activos:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); 
    }
}

//mostrar socios que no tengan la cuota al día 
async function getInactiveMembers(req,res){
    try{
        const getInactiveMembers = await Membership.findAll({
            where:{
                status:false
            },
            include:[
                {
                    model: Person
                }
            ]
        });

        if(getInactiveMembers.length > 0){
            res.json(getInactiveMembers);
        }else{
            res.status(200).json({error: "No hay socios con la cuota  atrasada"});
        }  
    }catch(error){
        console.error('Error buscandosocios activos:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); 
    }
}

module.exports = {
   getAllMembership,
   updateMembership,
   getMembershipById,
   postMembership,
   deleteMembership,
   isPersonMembership,
   getActiveMembers,
   getInactiveMembers
};
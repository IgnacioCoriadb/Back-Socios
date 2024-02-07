const Person = require("../models/Person");

async function getAllPeople(req, res) {
    try {
      const people = await Person.findAll();
      res.json(people);
    } catch (error) {
      console.error('Error fetching people:', error);
      res.status(500).json({ error: 'Failed to fetch people' });
    }
  }

async function getPersonById(req,res){
    try{
        const id = req.params.id;
        const person = await Person.findByPk(id);
        if(person){
            res.json(person);
        }else{
            res.status(404).json({ error: 'Persona no encontrada' }); // Si no se encontró el registro, enviar una respuesta de error
        }
    }catch{
        console.error('Error buscando por ID:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

  async function postPerson(req,res){
    try{
        const {userName,lastName,dateOfBirth,address,phone,DNI} = req.body;

        //calcular edad con fecha de nacimiento
        const dateOfBirthFormat = new Date(dateOfBirth);
        const currentDate= new Date();
        const diff = currentDate - dateOfBirthFormat;
        const age =Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

        const newPerson = await Person.create({
            userName,
            lastName,
            dateOfBirth,
            age,
            address,
            phone,
            DNI
        })
        res.status(201).json(newPerson);
    }catch(error){
        console.error('Error creating person:', error);
        res.status(500).json({ error: 'Failed to create person' });
    }
  }


  async function updatePerson(req,res){
    try{
        const id = req.params.id;
        const {userName,lastName,dateOfBirth,address,phone,DNI} = req.body;
        const person = await Person.findByPk(id);

        //verificar si existe la persona
        if(person){
            await person.update({
                userName: userName || person.userName,
                lastName: lastName || person.lastName,
                dateOfBirth: dateOfBirth || person.dateOfBirth,
                address: address || person.address,
                phone: phone || person.phone,
                DNI: DNI || person.DNI
            })
            res.json({ message: 'Persona actualizada correctamente' });
        }else{
            res.status(404).json({ error: 'Persona no encontrada' });
        }
    }catch(error){
        console.error('Error actualizando persona:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  async function deletePerson(req,res){
    try{
        const id = req.params.id;
        const person = await Person.findByPk(id);

        //si existe la persona
        if(person){
            await person.destroy();
            res.json({ message: 'Persona eliminada correctamente' }); 
        }else{
            res.status(404).json({ error: 'Persona no encontrada' }); // Si no se encontró el registro, enviar una respuesta de error
        }
    }catch(error){
        console.error('Error eliminando persona:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); 
    }
  }
  module.exports = {
    getAllPeople,
    postPerson,
    getPersonById,
    updatePerson,
    deletePerson
  };
const Person = require("../models/Person");

async function getAllPeople(req, res) {
    try {
    //   const people = await Person.findAll();
    //   res.json(people);
    res.json("get all")
    } catch (error) {
      console.error('Error fetching people:', error);
      res.status(500).json({ error: 'Failed to fetch people' });
    }
  }

  module.exports = {
    getAllPeople,
  };
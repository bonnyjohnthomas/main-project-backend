//import location collection
const locations=require('../models/locationSchema')

//get all locations
exports.getAllLocations=async(req,res)=>{
    try{
          //get all locations from location collection in mongodb
          const allLocations=await locations.find()
          res.status(200).json(allLocations)
    }
    catch(error){
          res.status(401).json(error)
    }
}

//get particular location details from  id

exports.viewLocation=async(req,res)=>{
      //get location id from request
      const id =req.params.id
      //logic
      try{
            //check id present in mongodb
            const location=await locations.findOne({id})
            if (location) {
                  res.status(200).json(location)
            } else {
                res.status(404).json('location not found')  
            }

      }
      catch(error){
             res.status(404).json(error)
      }
}
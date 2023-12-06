//import bucketlists
const bucketlists =require('../models/bucketlistSchema')

//logic for bucketlists
exports.addtobucketlist=async(req,res)=>{
    //get location details from request
    // req.body={
    //     id:'',
    //     name:'',
    //     image:'',
    //     location:'',
    //     contact:''

    // }

    //destructuring req.body

    const{id,name,image,location,contact}=req.body

    //logic
    try{
          const place =await bucketlists.findOne({id})
          if(place){
             res.status(404).json("Location already added")
          } 
          else{
            //add place to location collection
            const newPlace = new  bucketlists({id,name,image,location,contact})
            //store in bucketlist collection
            await newPlace.save()
            //response send back to cient
            res.status(200).json('product added to bucket list')
          }
    }
    catch(error){
        res.status(404).json(error )
    }


}

//to view bucketlist locations
exports.getbucketlist=async(req,res)=>{
  //to view bucketlist location details
   try{
    const allbucketlists=await bucketlists.find()
    res.status(200).json(allbucketlists)
   }
   catch(error){
      res.status(404).json(error)
   }
  
}

//delete bucketlist
exports.deletebucketlist=async(req,res)=>{
   //get id from request
   const{id}=req.params

   //logic
   try{
       const removebucketlist=await bucketlists.deleteOne({id})
       if(removebucketlist){
         const allitems=await bucketlists.find()
         res.status(200).json(allitems)
       }
       
   }catch(error){
         res.status(404).json(error)
   }
}
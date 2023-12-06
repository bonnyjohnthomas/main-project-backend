//import express
const express=require('express')

const locationController= require('../controllers/locationController')
const bucketlistController=require('../controllers/bucketlistController')

const router= new express.Router()

//get all locations
router.get('/locations/all-locations',locationController.getAllLocations)

//get particular location details
router.get('/locations/viewlocation/:id',locationController.viewLocation)

//adding to bucketlist
router.post('/locations/viewlocation/addtobucketlist',bucketlistController.addtobucketlist)

//get bucketlist product details
router.get('/locations/getbucketlist',bucketlistController.getbucketlist)

//delete bucketlist product details
router.delete('/locations/getbucketlist/delete/:id',bucketlistController.deletebucketlist)

module.exports=router
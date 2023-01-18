const router = require('express').Router();

const { tenantControllers } = require('../controllers');
const { multerUpload } = require("../middlewares/multerProperty")
const { roomUpload } = require("../middlewares/multerRoom")



router.get('/', (req, res) => {
  res.status(200).send('home');
});

//post
router.post('/api/betenant', tenantControllers.CreateFastility);
router.post('/api/category', tenantControllers.CreateCategory);
router.post('/api/properties', multerUpload.single('file'), tenantControllers.CreatePropertys)
router.post('/api/room', roomUpload.single('file'), tenantControllers.createRoomData);
router.post('/api/addmanyimageroom', roomUpload.single('file'), tenantControllers.createManyImageinRoom);
router.post('/api/createMorePictureProperty/:tenantId', multerUpload.single('file'), tenantControllers.createMorePictureProperty)

//get data
router.get('/api/property/:tenantId', tenantControllers.getAllDataProperty);
router.get('/api/roombyid/:id', tenantControllers.getRoomPropertyById);
router.get('/api/roomimages/:id', tenantControllers.getDataRoomAndImagesRoom);
router.get('/api/getallpictureroom/:tenantId', tenantControllers.getAllPictureRoom)
router.get('/api/getmorePictureProperty/:tenantId', tenantControllers.getDataPropertyAndImagesProperty)
router.get('/api/category', tenantControllers.getAllCategory)

//update
router.patch('/api/editpicture/:tenantId', multerUpload.single('file'), tenantControllers.updatePictureProperty);
router.patch('/api/editname/:tenantId', tenantControllers.updateNameProperty);
router.patch('/api/editfacility/:tenantId', tenantControllers.updateFacility);
router.patch('/api/editdescription/:tenantId', tenantControllers.updateDescProperty);
router.patch('/api/editlocation/:tenantId', tenantControllers.updateLocationDetail);
router.patch('/api/editroom/:tenantId/:id',roomUpload.single('file'), tenantControllers.updateRoomProperty);

//delete all data property
router.delete('/api/deleteproperty/:tenantId', tenantControllers.deleteAllDataProperty);
router.delete('/api/deleteroom/:id', tenantControllers.deleteDataRooms);
router.delete('/api/deleteroomimage/:id', tenantControllers.deleteRoomImages);
router.delete('/api/deletepropertyimage/:id', tenantControllers.deletePropertyImage);

module.exports = router;

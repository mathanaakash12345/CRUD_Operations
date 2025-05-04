const express = require('express')
const router = express.Router()
const {saveUser} = require('../Controllers/Createcontrol')
const fetchcontrol = require('../Controllers/fetchcontrol')
const  {updateuser} = require('../Controllers/updatecontrol')
const {deleteuser} = require('../Controllers/updatecontrol')
const fetchall = require('../Controllers/fetchalluser')

router.post('/create',saveUser)
router.delete('/delete/:uemail',deleteuser)
router.get('/fetch/:email', fetchcontrol)
router.put('/update/:Id',updateuser)
router.get('/fetchall',fetchall)

module.exports = router;
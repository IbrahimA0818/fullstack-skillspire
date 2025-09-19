
const express = require("express")
const router = express.Router()
const {getAllAppointments, addAppointments, cancelAppointment} = require('../controllers/controller')

// Fixed: Added missing '/' in routes
router.get('/appointments', getAllAppointments)
router.post('/appointments', addAppointments)
router.delete('/appointments/:id', cancelAppointment)

module.exports = router
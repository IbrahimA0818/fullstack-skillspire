const Appointment = require('../model/appointments')

const getAllAppointments = async (request, response) => {
    try {
        let appointments = await Appointment.find()
        response.json(appointments)
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
}

const addAppointments = async (request, response) => {
    try {
        const newAppointment = new Appointment(request.body)
        const savedAppointment = await newAppointment.save()
        console.log('Added appointment')
        response.json(savedAppointment)
    } catch (error) {
        response.status(400).json({ error: error.message })
    }
}

const cancelAppointment = async (request, response) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(request.params.id)
        if (!appointment) {
            return response.status(404).json({ error: 'Appointment not found' })
        }
        response.json({ message: `Appointment ${appointment._id} was deleted` })
    } catch (error) {
        response.status(400).json({ error: error.message })
    }
}

module.exports = {
    getAllAppointments,
    addAppointments, 
    cancelAppointment
}
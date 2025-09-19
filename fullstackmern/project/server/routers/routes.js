const express = require('express');
const router = express.Router();
const Donation = require('../models/donation');

const {
    GetAllDonations,
    GetDonation,
    UpdateDonation,
    DeleteDonation,
    AddDonation
} = require("../controllers/controller")

router.get('/donations', GetAllDonations);

router.get('/donations/:id', GetDonation);

router.post('/donations', AddDonation);

router.put('/donations/:id', UpdateDonation);

router.delete('/donations/:id', DeleteDonation);

module.exports = router;
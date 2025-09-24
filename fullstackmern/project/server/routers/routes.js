const express = require('express');
const router = express.Router();
const Donation = require('../models/donation');

const {
    GetAllDonations,
    GetDonation,
    UpdateDonation,
    DeleteDonation,
    AddDonation,
    GetAvailableDonations,
    ClaimDonation,
    UnclaimDonation
} = require("../controllers/controller")

router.get('/donations/available', GetAvailableDonations);
router.get('/donations', GetAllDonations);
router.get('/donations/:id', GetDonation);
router.post('/donations', AddDonation);
router.put('/donations/:id', UpdateDonation);
router.put('/donations/:id/claim', ClaimDonation);
router.put('/donations/:id/unclaim', UnclaimDonation);
router.delete('/donations/:id', DeleteDonation);

module.exports = router;
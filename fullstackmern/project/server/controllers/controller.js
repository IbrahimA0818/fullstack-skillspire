const Donation = require("../models/donation");

const GetAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.send(donations);
  } catch (err) {
    res.status(500).send({ error: "Error fetching donations", details: err });
  }
};

const GetDonation = (req, res) => {
  Donation.findById(req.params.id)
    .then((donation) => {
      if (!donation) return res.status(404).send({ error: "Donation not found" });
      res.send(donation);
    })
    .catch((err) => res.status(500).send({ error: "Error fetching donation", details: err }));
};

const UpdateDonation = (req, res) => {
  Donation.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((donation) => {
      if (!donation) return res.status(404).send({ error: "Donation not found" });
      console.log("The donation was updated");
      res.send(donation);
    })
    .catch((err) => res.status(500).send({ error: "Error updating donation", details: err }));
};

const DeleteDonation = (req, res) => {
  Donation.findByIdAndDelete(req.params.id)
    .then((donation) => {
      if (!donation) return res.status(404).send({ error: "Donation not found" });
      console.log("Donation was deleted");
      res.send({ message: "The donation was deleted." });
    })
    .catch((err) => res.status(500).send({ error: "Error deleting donation", details: err }));
};

const AddDonation = (req, res) => {
  const newDonation = new Donation(req.body);
  newDonation
    .save()
    .then((donation) => {
      console.log("The donation was saved successfully");
      res.send(donation);
    })
    .catch((err) => res.status(400).send({ error: "Error saving donation", details: err }));
};

const GetAvailableDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ isClaimed: false });
    res.send(donations);
  } catch (err) {
    res.status(500).send({ error: "Error fetching available donations", details: err });
  }
};

const ClaimDonation = async (req, res) => {
  try {
    const { recipientEmail } = req.body;
    
    if (!recipientEmail) {
      return res.status(400).send({ error: "Recipient email is required" });
    }

    const donation = await Donation.findById(req.params.id);
    
    if (!donation) {
      return res.status(404).send({ error: "Donation not found" });
    }

    if (donation.isClaimed) {
      return res.status(400).send({ error: "Donation is already claimed" });
    }

    const updatedDonation = await Donation.findByIdAndUpdate(
      req.params.id,
      {
        isClaimed: true,
        claimedBy: recipientEmail,
        claimedAt: new Date()
      },
      { new: true }
    );

    console.log(`Donation ${req.params.id} claimed by ${recipientEmail}`);
    res.send(updatedDonation);
  } catch (err) {
    res.status(500).send({ error: "Error claiming donation", details: err });
  }
};

const UnclaimDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    
    if (!donation) {
      return res.status(404).send({ error: "Donation not found" });
    }

    if (!donation.isClaimed) {
      return res.status(400).send({ error: "Donation is not claimed" });
    }

    const updatedDonation = await Donation.findByIdAndUpdate(
      req.params.id,
      {
        isClaimed: false,
        claimedBy: null,
        claimedAt: null
      },
      { new: true }
    );

    console.log(`Donation ${req.params.id} unclaimed`);
    res.send(updatedDonation);
  } catch (err) {
    res.status(500).send({ error: "Error unclaiming donation", details: err });
  }
};

module.exports = {
  GetAllDonations,
  GetDonation,
  UpdateDonation,
  DeleteDonation,
  AddDonation,
  GetAvailableDonations,
  ClaimDonation,
  UnclaimDonation,
};
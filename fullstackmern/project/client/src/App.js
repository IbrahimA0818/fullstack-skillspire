import { useState, useEffect } from "react";
import "./App.css";
import { 
  getAllDonations, 
  addDonation, 
  deleteDonation, 
  updateDonation,
  getAvailableDonations,
  claimDonation
} from "./api/api";

function App() {
  const [role, setRole] = useState(null);
  const [donations, setDonations] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);
  const [form, setForm] = useState({
    restaurantName: "",
    email: "",
    phone: "",
    address: "",
    description: "",
    foodType: "",
  });

  useEffect(() => {
    if (role === "recipient" || role === "home") {
      fetchDonations();
    }
  }, [role, showOnlyAvailable]);

  const fetchDonations = async () => {
    try {
      let res;
      if (role === "recipient" && showOnlyAvailable) {
        res = await getAvailableDonations();
      } else {
        res = await getAllDonations();
      }
      setDonations(res.data);
    } catch (err) {
      console.error("Error fetching donations:", err);
    }
  };

  const handleAddDonation = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateDonation(editingId, form);
        setEditingId(null);
      } else {
        await addDonation(form);
      }
      setForm({
        restaurantName: "",
        email: "",
        phone: "",
        address: "",
        description: "",
        foodType: "",
      });
      setRole("home");
      fetchDonations();
    } catch (err) {
      console.error("Error saving donation:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDonation(id);
      fetchDonations();
    } catch (err) {
      console.error("Error deleting donation:", err);
    }
  };

  const handleEdit = (donation) => {
    setForm({
      restaurantName: donation.restaurantName,
      email: donation.email,
      phone: donation.phone,
      address: donation.address,
      description: donation.description || "",
      foodType: donation.foodType,
    });
    setEditingId(donation._id);
    setRole("donor");
  };

  const handleClaim = async (donationId) => {
    try {
      await claimDonation(donationId, recipientEmail);
      fetchDonations();
      alert("Donation claimed successfully!");
    } catch (err) {
      console.error("Error claiming donation:", err);
      alert("Error claiming donation. Please try again.");
    }
  };

  const handleRecipientLogin = (e) => {
    e.preventDefault();
    if (recipientEmail.trim()) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRecipientEmail("");
    setRole(null);
    setShowOnlyAvailable(false);
  };

  // Main role selection screen
  if (!role) {
    return (
      <div className="App">
        <h1>Food Donation Platform</h1>
        <button onClick={() => setRole("donor")}>Donor</button>
        <button onClick={() => setRole("recipient")}>Recipient</button>
        <button onClick={() => setRole("home")}>View All Donations</button>
      </div>
    );
  }

  // Donor form
  if (role === "donor") {
    return (
      <div className="App">
        <h1>{editingId ? "Edit Donation" : "Donor Portal"}</h1>
        <button onClick={() => setRole(null)}>Back</button>
        <form onSubmit={handleAddDonation}>
          <input
            type="text"
            placeholder="Restaurant Name"
            value={form.restaurantName}
            onChange={(e) => setForm({ ...form, restaurantName: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Description (optional)"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <select
            value={form.foodType}
            onChange={(e) => setForm({ ...form, foodType: e.target.value })}
            required
          >
            <option value="">Select Food Type</option>
            <option value="prepared_food">Prepared Food</option>
            <option value="fresh_produce">Fresh Produce</option>
            <option value="baked_goods">Baked Goods</option>
            <option value="packaged_food">Packaged Food</option>
            <option value="dairy">Dairy</option>
            <option value="meat">Meat</option>
            <option value="beverages">Beverages</option>
            <option value="other">Other</option>
          </select>
          <button type="submit">{editingId ? "Update Donation" : "Submit Donation"}</button>
        </form>
      </div>
    );
  }

  if (role === "home") {
    return (
      <div className="App">
        <h1>All Donations (Admin View)</h1>
        <button onClick={() => setRole(null)}>Back</button>
        <button onClick={fetchDonations}>Refresh</button>
        <ul>
          {donations.map((d) => (
            <li key={d._id} className={d.isClaimed ? "claimed" : ""}>
              <strong>{d.restaurantName}</strong> ({d.foodType})
              {d.isClaimed && <span className="claimed-badge">CLAIMED</span>}
              <br />
              {d.address} | {d.phone} | {d.email}
              <br />
              {d.description && <><strong>Description:</strong> {d.description}<br /></>}
              {d.isClaimed && (
                <>
                  <strong>Claimed by:</strong> {d.claimedBy} on {new Date(d.claimedAt).toLocaleDateString()}
                  <br />
                </>
              )}
              <button onClick={() => handleDelete(d._id)}>Delete</button>
              <button onClick={() => handleEdit(d)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Recipient portal
  if (role === "recipient") {
    // Login screen for recipients
    if (!isLoggedIn) {
      return (
        <div className="App">
          <h1>Recipient Login</h1>
          <button onClick={() => setRole(null)}>Back</button>
          <form onSubmit={handleRecipientLogin} className="login-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Recipient Portal</h1>
        <div className="user-info">
          <span>Logged in as: {recipientEmail}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <button onClick={() => setRole(null)}>Back</button>
        <button onClick={fetchDonations}>Refresh</button>
        
        <div className="filter-controls">
          <label>
            <input
              type="checkbox"
              checked={showOnlyAvailable}
              onChange={(e) => setShowOnlyAvailable(e.target.checked)}
            />
            Show only available donations
          </label>
        </div>

        <ul>
          {donations.map((d) => (
            <li key={d._id} className={d.isClaimed ? "claimed" : ""}>
              <strong>{d.restaurantName}</strong> ({d.foodType})
              {d.isClaimed && <span className="claimed-badge">CLAIMED</span>}
              <br />
              {d.address} | {d.phone} | {d.email}
              <br />
              {d.description && <><strong>Description:</strong> {d.description}<br /></>}
              {d.isClaimed && d.claimedBy === recipientEmail && (
                <div className="my-claim">You claimed this donation</div>
              )}
              {d.isClaimed && d.claimedBy !== recipientEmail && (
                <div className="claimed-by-other">Claimed by another recipient</div>
              )}
              {!d.isClaimed && (
                <button 
                  onClick={() => handleClaim(d._id)}
                  className="claim-btn"
                >
                  Claim This Donation
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
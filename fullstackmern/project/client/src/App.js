
import { useState, useEffect } from "react";
import "./App.css";
import { getAllDonations, addDonation, deleteDonation, updateDonation } from "./api/api";

function App() {
  const [role, setRole] = useState(null);
  const [donations, setDonations] = useState([]);
  const [editingId, setEditingId] = useState(null);
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
  }, [role]);

  const fetchDonations = async () => {
    try {
      const res = await getAllDonations();
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
      fetchDonations(); // Refresh the donations after adding/updating
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
          <textarea
            placeholder="Description (optional)"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows="3"
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
        <h1>All Donations</h1>
        <button onClick={() => setRole(null)}>Back</button>
        <button onClick={fetchDonations}>Refresh</button>
        <ul>
          {donations.map((d) => (
            <li key={d._id}>
              <strong>{d.restaurantName}</strong> ({d.foodType})
              <br />
              {d.address} | {d.phone} | {d.email}
              <br />
              {d.description && <><strong>Description:</strong> {d.description}<br /></>}
              <button onClick={() => handleDelete(d._id)}>Delete</button>
              <button onClick={() => handleEdit(d)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Recipient Portal</h1>
      <button onClick={() => setRole(null)}>Back</button>
      <button onClick={fetchDonations}>Refresh</button>
      <ul>
        {donations.map((d) => (
          <li key={d._id}>
            <strong>{d.restaurantName}</strong> ({d.foodType})
            <br />
            {d.address} | {d.phone} | {d.email}
            <br />
            {d.description && <><strong>Description:</strong> {d.description}<br /></>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
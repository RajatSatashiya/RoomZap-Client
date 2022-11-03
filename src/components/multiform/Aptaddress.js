import React from "react";

function Aptaddress({ formData, setFormData }) {
  return (
    <>
      <div className="form-details">
        <label htmlFor="aptNumber">Apartment Number</label>
        <input
          type="text"
          name="aptNumber"
          required
          value={formData.apartmentNumber}
          onChange={(e) => {
            setFormData({ ...formData, apartmentNumber: e.target.value });
          }}
        ></input>

        <label htmlFor="Street">Street</label>
        <input
          type="text"
          name="address"
          required
          value={formData.street}
          onChange={(e) => {
            setFormData({ ...formData, street: e.target.value });
          }}
        ></input>

        <label htmlFor="City">City</label>
        <input
          type="text"
          name="City"
          required
          value={formData.city}
          onChange={(e) => {
            setFormData({ ...formData, city: e.target.value });
          }}
        ></input>

        <label htmlFor="State">State</label>
        <input
          type="text"
          name="State"
          required
          value={formData.state}
          onChange={(e) => {
            setFormData({ ...formData, state: e.target.value });
          }}
        ></input>

        <label htmlFor="Pincode">Pincode</label>
        <input
          type="text"
          name="Pincode"
          required
          value={formData.pincode}
          onChange={(e) => {
            setFormData({ ...formData, pincode: e.target.value });
          }}
        ></input>

        <label htmlFor="Country">Country</label>
        <input
          type="text"
          name="Country"
          required
          value={formData.country}
          onChange={(e) => {
            setFormData({ ...formData, country: e.target.value });
          }}
        ></input>
      </div>
    </>
  );
}

export default Aptaddress;

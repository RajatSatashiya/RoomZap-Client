import React from "react";

function Aptdetails({ formData, setFormData }) {
  return (
    <>
      <div className="form-details">
        <label htmlFor="aptType">Apartment Type</label>
        <select
          name="aptType"
          required
          value={formData.apartmentType}
          onChange={(e) => {
            setFormData({ ...formData, apartmentType: e.target.value });
          }}
        >
          <option value="Flat">Flat</option>
          <option value="Bungalow">Bungalow</option>
        </select>

        <label htmlFor="desc">Description</label>
        <textarea
          name="desc"
          required
          value={formData.description}
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
          }}
        ></textarea>

        <label htmlFor="roomType">Room Type</label>
        <select
          name="roomType"
          required
          value={formData.roomType}
          onChange={(e) => {
            setFormData({ ...formData, roomType: e.target.value });
          }}
        >
          <option value="Entire Apartment">Entire Apartment</option>
          <option value="Private Room">Private Room</option>
          <option value="1-Room">1-Room</option>
          <option value="2-Room">2-Room</option>
          <option value="3+ Rooms">3+ Rooms</option>
        </select>

        <label htmlFor="vacancy">Vacancy</label>
        <input
          type="number"
          name="vacancy"
          required
          value={formData.vacancy}
          onChange={(e) => {
            setFormData({ ...formData, vacancy: e.target.value });
          }}
        ></input>

        <label htmlFor="rent">Rent</label>
        <input
          type="number"
          name="rent"
          required
          value={formData.rent}
          onChange={(e) => {
            setFormData({ ...formData, rent: e.target.value });
          }}
        ></input>
      </div>
    </>
  );
}

export default Aptdetails;

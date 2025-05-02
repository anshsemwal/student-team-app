import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createMember } from '../api/api';

function AddMember() {
  const [formData, setFormData] = useState({ 
    name: '', 
    role: '', 
    email: '',
    rollNo: '',
    year: '',
    degree: '',
    aboutProject: '',
    hobbies: '',
    certificate: '',
    internship: ''
  });
  
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('role', formData.role);
    data.append('email', formData.email);
    data.append('rollNo', formData.rollNo);
    data.append('year', formData.year);
    data.append('degree', formData.degree);
    data.append('aboutProject', formData.aboutProject);
    data.append('hobbies', formData.hobbies);
    data.append('certificate', formData.certificate);
    data.append('internship', formData.internship);
    data.append('image', image);

    try {
      await createMember(data);
      navigate('/members');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Member</h2>
      <form onSubmit={handleSubmit}>
        {/* Existing Fields */}
        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          required
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        {/* New Fields */}
        <input
          type="text"
          placeholder="Roll No"
          required
          onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Year"
          required
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
        />
        <input
          type="text"
          placeholder="Degree"
          required
          onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
        />
        <textarea
          placeholder="About Project"
          required
          onChange={(e) => setFormData({ ...formData, aboutProject: e.target.value })}
        />
        <input
          type="text"
          placeholder="Hobbies (comma separated)"
          required
          onChange={(e) => setFormData({ ...formData, hobbies: e.target.value })}
        />
        <input
          type="text"
          placeholder="Certificate"
          required
          onChange={(e) => setFormData({ ...formData, certificate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Internship"
          required
          onChange={(e) => setFormData({ ...formData, internship: e.target.value })}
        />

        {/* Existing Image Upload */}
        <input
          type="file"
          accept="image/*"
          required
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">Add Member</button>
      </form>
    </div>
  );
}

export default AddMember;

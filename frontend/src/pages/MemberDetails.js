import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMemberById } from '../api/api';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const { data } = await getMemberById(id);
        setMember(data);
      } catch (err) {
        setMember(null);
      } finally {
        setLoading(false);
      }
    };
    fetchMember();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!member) return <div>Member not found.</div>;

  return (
    <div className="member-details">
      <img
        src={`http://localhost:5000/uploads/${member.image}`}
        alt={member.name}
        style={{ width: '180px', borderRadius: '10px', marginBottom: '20px' }}
      />
      <h2>{member.name}</h2>
      <p><strong>Role:</strong> {member.role}</p>
      <p><strong>Email:</strong> {member.email}</p>
      <p><strong>Roll No:</strong> {member.rollNo}</p>
      <p><strong>Year:</strong> {member.year}</p>
      <p><strong>Degree:</strong> {member.degree}</p>
      <p><strong>About Project:</strong> {member.aboutProject}</p>
      <p><strong>Hobbies:</strong> {member.hobbies}</p>
      <p><strong>Certificate:</strong> {member.certificate}</p>
      <p><strong>Internship:</strong> {member.internship}</p>
      <Link to="/members" className="home-btn">Back to Members</Link>
    </div>
  );
}

export default MemberDetails;

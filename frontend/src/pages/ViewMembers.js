import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMembers } from '../api/api';

function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const { data } = await getMembers();
        setMembers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div className="members-grid">
      {members.map((member) => (
        <div key={member._id} className="member-card">
          <img 
            src={`http://localhost:5000/uploads/${member.image}`} 
            alt={member.name} 
          />
          <h3>{member.name}</h3>
          <p><strong>Role:</strong> {member.role}</p>
          <p><strong>Email:</strong> {member.email}</p>
          <Link to={`/members/${member._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ViewMembers;

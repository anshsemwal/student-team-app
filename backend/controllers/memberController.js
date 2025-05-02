const Member = require('../models/Member');

exports.createMember = async (req, res) => {
  try {
    const newMember = new Member({
      name: req.body.name,
      role: req.body.role,
      email: req.body.email,
      rollNo: req.body.rollNo,
      year: req.body.year,
      degree: req.body.degree,
      aboutProject: req.body.aboutProject,
      hobbies: req.body.hobbies,
      certificate: req.body.certificate,
      internship: req.body.internship,
      image: req.file.filename
    });
    
    await newMember.save();
    res.status(201).json(newMember);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ error: 'Member not found' });
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static assets from public/
app.use(express.static(path.join(__dirname, 'public')));

// Mock Databases
const proposalsPath = path.join(__dirname, 'data', 'proposals.json');
const billboardsPath = path.join(__dirname, 'data', 'billboards.json');

// Helper to read JSON database
const readDb = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Helper to write JSON database
const writeDb = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

// Routes to serve the UI screens
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'multitec_media_homepage', 'code.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'multitec_media_about_us', 'code.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'multitec_media_services', 'code.html'));
});

app.get('/proposal', (req, res) => {
  res.sendFile(path.join(__dirname, 'multitec_media_request_a_proposal', 'code.html'));
});

// Billboard Network = full inventory (former Gallery content)
app.get('/map', (req, res) => {
  res.sendFile(path.join(__dirname, 'multitec_media_updated_billboard_gallery', 'code.html'));
});

// Old Gallery URL redirects here
app.get('/gallery', (req, res) => {
  res.redirect(301, '/map');
});

app.get('/promise', (req, res) => {
  res.sendFile(path.join(__dirname, 'multitec_media_your_roi_our_promise_1', 'code.html'));
});

app.get('/roi-system', (req, res) => {
  res.sendFile(path.join(__dirname, 'results_first_agency_system', 'code.html'));
});

// Serve Admin Dashboard
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// API Endpoint for proposals submission
app.post('/api/proposal', (req, res) => {
  const { businessName, contactPerson, email, phone, goal, budget, timeline, channel } = req.body;
  
  if (!businessName || !contactPerson) {
    return res.status(400).json({ error: 'Business name and Contact person are required.' });
  }

  const proposals = readDb(proposalsPath);
  const newProposal = {
    id: Date.now().toString(),
    businessName,
    contactPerson,
    email: email || 'N/A',
    phone: phone || 'N/A',
    goal: goal || 'N/A',
    budget: budget || 'N/A',
    timeline: timeline || 'N/A',
    channel: channel || 'Both',
    submittedAt: new Date().toISOString(),
    status: 'New'
  };

  proposals.push(newProposal);
  writeDb(proposalsPath, proposals);

  res.status(201).json({ message: 'Proposal request submitted successfully!', proposal: newProposal });
});

// API Endpoint to get all proposals (for admin)
app.get('/api/proposals', (req, res) => {
  const proposals = readDb(proposalsPath);
  res.json(proposals);
});

// API Endpoint to get all billboards (for interactive map)
app.get('/api/billboards', (req, res) => {
  const billboards = readDb(billboardsPath);
  res.json(billboards);
});

// API Endpoint to toggle proposal status (admin action)
app.patch('/api/proposals/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const proposals = readDb(proposalsPath);
  const index = proposals.findIndex(p => p.id === id);
  if (index !== -1) {
    proposals[index].status = status;
    writeDb(proposalsPath, proposals);
    return res.json({ message: 'Status updated successfully', proposal: proposals[index] });
  }
  res.status(404).json({ error: 'Proposal not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

const express = require('express');
const dogFacts = require('./dog_facts');
const app = express();
const PORT = 3000;

// Dog facts endpoint
app.get('/facts', (req, res) => {
    try {
        const numberOfFacts = parseInt(req.query.number);  // Parse number query 
        if (isNaN(numberOfFacts)) {
            res.json({ facts: dogFacts, success: true });  // If number is not entered return all facts
        } else {
            res.json({ facts: dogFacts.slice(0, numberOfFacts), success: true });  // Return entered number of facts
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


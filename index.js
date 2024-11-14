// const express = require('express');
// const app = express();
// const PORT = 4000;

// app.get('/home', (req, res) => {
//     res.status(200).json('Welcome, your app is working well');
// });

// app.get('/', (req, res) => {
//     res.status(200).json('All set to goo !!');
// });

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });

// module.exports = app;

// index.js
const express = require('express');
const app = express();

// Enable JSON parsing
app.use(express.json());

// Your routes
app.get('/home', (req, res) => {
    res.json({ message: 'Welcome, your app is working well' });
});

app.get('/', (req, res) => {
    res.json({ message: 'All set to go!' });
});

// Export the app for Vercel
module.exports = app;

// Only listen in development
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

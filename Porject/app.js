const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Set up EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Sample events data (you can replace this with your database)
const events = [
    {
        title: "Annual Tech Conference 2024",
        date: "March 15, 2024",
        location: "Main Hall",
        description: "Join us for the biggest tech conference in the region",
        image: "tech-conference.jpg"
    },
    {
        title: "Spring Community Fair",
        date: "April 5, 2024",
        location: "Community Park",
        description: "A day of fun, food, and community bonding",
        image: "community-fair.jpg"
    }
];

// Routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Home', events });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.get('/events', (req, res) => {
    res.render('events', { title: 'Events', events });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

app.post('/contact', (req, res) => {
    // Handle contact form submission
    res.render('thankyou', { title: 'Thank You' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

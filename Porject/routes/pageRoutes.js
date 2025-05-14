const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { 
        title: 'Home',
        events: req.app.locals.eventData
    });
});

router.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About',
        team: req.app.locals.aboutData.team
    });
});

router.get('/events', (req, res) => {
    res.render('events', { 
        title: 'Events',
        events: req.app.locals.eventData
    });
});

router.get('/contact', (req, res) => {
    res.render('contact', { 
        title: 'Contact'
    });
});

router.get('/thankyou', (req, res) => {
    res.render('thankyou', { 
        title: 'Thank You'
    });
});

module.exports = router;
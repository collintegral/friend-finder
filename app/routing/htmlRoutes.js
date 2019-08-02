import path from 'path';

module.exports = routes => {
    routes.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    routes.get(''), (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
}
module.exports = (app) => {

    //HOME FEED
    app.get('/', (req, res) => {
        res.render('home');
    });
}
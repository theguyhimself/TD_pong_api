module.exports = {
    regis: function (req, res){
        let email = req.body.email //recupération du email en paramètre
        let user = req.body.username //recupération dunom d'utilisateur en paramètre
        let pwd = req.body.passeword //recupération du mot de passe en paramètre
        let result = {"Email": email, "User": user,"Pwd": pwd}
        axios.post('https://svc-pong-esiea.azurewebsites.net/register', {
            body: body
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    let status = a;
    let data = [];
    axios.get('https://svc-pong-esiea.azurewebsites.net/register')
        .then(function (response) {
            console.log(response.status);
            console.log(response.data);
            let result = {"status":response.status,"data":response.data};
            res.send(result);
        });
    },
}
module.exports = {
    regis: function (req, res){
        let email = req.body.email      //recupération du email en paramètre
        let user = req.body.username    //recupération dunom d'utilisateur en paramètre
        let pwd = req.body.passeword    //recupération du mot de passe en paramètre
        let result = {"mail": email, "user": user,"pwd": pwd} //création du body a envoyé a l'auth
        axios.post(process.env.API_AUTH +'/register', { //TO DO changer l'adresse par une variable d'environnement
                body: body
            })
            .then(function (response) {
                console.log(response.status);   //affichage du status dans la console
                console.log(response.body);     //affichage du body dans la console
                let result = {"status":response.status,"data":response.body}; //création du body a retourné
                res.send(result);               //envoie du body a l'IHM
            })
            .catch(function (error) {
                console.log(error);             //affichage de l'erreur dans la console
                let result = {"status":error.status,"data":{"message":error}}; //création du body a retourné
                res.send(result);               //envoie du body a l'IHM
            });
    },
}
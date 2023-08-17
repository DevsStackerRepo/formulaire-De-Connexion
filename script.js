 

// valider le nom de l'utilisateur entre par l'utilisateur
function validerNom(nom){
   if(nom.length < 2){
    throw new Error("ce nom est trop court!")
   }
}

// valider l'email de l'utilisateur entre par l'utilisateur
function validerEmail(email){
    let emailRegEx = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
    if(!emailRegEx.test(email)){
        throw new Error("Cet email n'est pas valide");
    }
}

// afficher message d'erreur

function afficherMessageErreur(message){
    let spanErrorMessage = document.getElementById("errorMessage");
    if(!spanErrorMessage){
        let formErrorMessage = document.querySelector(".formErrorMessage");
        let spanErrorMessage = document.createElement("span");
        spanErrorMessage.id = "errorMessage";
        formErrorMessage.append(spanErrorMessage)
    }

    spanErrorMessage.innerText = message;

}

// gerer le formulaire 
function gererFormulaire(e){
    // bloc try - catch
    try{
        //empercher le rechargement du navigateur
        e.preventDefault();
    
        //recuperez l'id de l'input nom
        let baliseNom = document.getElementById("nom");
    
        //recuperez le contenue de l'input nom
        let nom = baliseNom.value;

        //validation du nom
        validerNom(nom);
    
    
        //recuperez l'id de l'input nom
        let baliseEmail = document.getElementById("email");
    
        //recuperez le contenue de l'input nom
        let email = baliseEmail.value;

        //validation du nom
        validerEmail(email);
    }catch(erreur){
        afficherMessageErreur(erreur.message);
    }
   
}

// Event Listener
 let btnEnvoyer = document.querySelector("button");
 btnEnvoyer.addEventListener("click",gererFormulaire);
 


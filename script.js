// recuperer l'id de l'input nom et email
let baliseNom = document.getElementById("nom");
let baliseEmail = document.getElementById("email");

// valider le nom de l'utilisateur entre par l'utilisateur
function validerNom(e){
    e.preventDefault();
    if(baliseNom.value.length >= 2){
        console.log(baliseNom.value);
        baliseNom.value = "";
    }else{
        console.log("Ce nom est trop court")
    }
}

function validerEmail(e){
    e.preventDefault();
    let emailRegEx = /\S+@\S+\.\S+/;
    let checkEmail = emailRegEx.test(baliseEmail);
    if(checkEmail){
        console.log(`Ce email ${baliseEmail.value} est valide`);
    }else{
        console.log("Cet email ne correspond pas");
    }
    return checkEmail;
}

// Event Listener
 let btnEnvoyer = document.querySelector("button");
 btnEnvoyer.addEventListener("click",validerNom);
 btnEnvoyer.addEventListener("click",validerEmail);


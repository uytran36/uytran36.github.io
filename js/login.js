
function IsValid() {
    let flag = true;
    var id_email = "name";
    var id_pass = "pass";
  
    let control = document.getElementById(id_email);
    let error = document.getElementById("errEmail");
  
    if (control.value === "") {
      let errorMessage = "! Email n'est pas vide";
      error.innerText = errorMessage;
      flag = false;
    } else {
      error.innerText = "";
    }
  
    control = document.getElementById(id_pass);
    error = document.getElementById("errPass");
  
    if (control.value === "") {
      let errorMessage = "! Mot de passe n'est pas vide";
      error.innerText = errorMessage;
      flag = false;
    } else {
      error.innerText = "";
    }
  
    return flag;
  }

document.getElementById('btn2').addEventListener('click', 
function() {
  if(document.getElementById('name').value != "" && document.getElementById('pass').value != "")
    window.location.href = "accueil_login.html";
})
  
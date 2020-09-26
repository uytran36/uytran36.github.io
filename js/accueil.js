function a(aID, aSearchTerm, aMsg) {
  var elem = document.getElementById(aID);
  var invalid = elem.value.indexOf(aSearchTerm) < 0;
  if (invalid) {
    elem.setAttribute("aria-invalid", "true");
    updateAlert(aMsg);
  } else {
    elem.setAttribute("aria-invalid", "false");
    updateAlert();
  }
}

function updateAlert(msg) {
  var oldAlert = document.getElementById("alert");
  var span = document.getElementById("errEmail");
  if (oldAlert) {
    span.removeChild(oldAlert);
  }

  if (msg) {
    var newAlert = document.createElement("div");
    newAlert.setAttribute("role", "alert");
    newAlert.setAttribute("id", "alert");
    var content = document.createTextNode(msg);
    newAlert.appendChild(content);
    span.appendChild(newAlert);
  }
}

function b(aID, aSearchTerm, aMsg) {
  var elem = document.getElementById(aID);
  var invalid = elem.value.indexOf(aSearchTerm) < 0;
  if (invalid) {
    elem.setAttribute("aria-invalid", "true");
    updateAlertB(aMsg);
  } else {
    elem.setAttribute("aria-invalid", "false");
    updateAlertB();
  }
}

function updateAlertB(msg) {
  var oldAlert = document.getElementById("alertB");
  var span = document.getElementById("errCEmail");
  if (oldAlert) {
    span.removeChild(oldAlert);
  }

  if (msg) {
    var newAlert = document.createElement("div");
    newAlert.setAttribute("role", "alert");
    newAlert.setAttribute("id", "alertB");
    var content = document.createTextNode(msg);
    newAlert.appendChild(content);
    span.appendChild(newAlert);
  }
}

function IsValid() {
  let flag = true;
  var id_email = "frmEmail";
  var id_conf_email = "frmConfirmEmail";
  var id_pass = "frmPassword";
  var id_username = "frmUsername";
  var id_birth = "birth";

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

  control = document.getElementById(id_conf_email);
  error = document.getElementById("errCEmail");

  if (control.value === "") {
    let errorMessage = "! Email n'est pas vide";
    error.innerText = errorMessage;
    flag = false;
  } else {
    error.innerText = "";
  }

  control = document.getElementById(id_username);
  error = document.getElementById("errUser");

  if (control.value === "") {
    let errorMessage = "! Le nom d'utilisateur n'est pas vide";
    error.innerText = errorMessage;
    flag = false;
  } else {
    error.innerText = "";
  }

  control = document.getElementById(id_birth);
  error = document.getElementById("errBirth");

  if (control.value === "") {
    let errorMessage = "! Date de naissance n'est pas vide";
    error.innerText = errorMessage;
    flag = false;
  } else {
    error.innerText = "";
  }

  return flag;
}

//like or not like
document.getElementById('like').addEventListener('click', 
function() {
    if (document.getElementById('like').style.color == 'red')
        document.getElementById('like').style.color = 'black';
    else document.getElementById('like').style.color = 'red';
});

// POPUP LOGIN

try {
  document.getElementById('button-favoris').addEventListener('click', 
  function() {
    document.querySelector('.bg-model').style.display = 'flex';
  })
  
  document.getElementById('button-playlist').addEventListener('click', 
  function() {
    document.querySelector('.bg-model').style.display = 'flex';
  })
  
  document.getElementById('close').addEventListener('click', 
  function() {
    document.querySelector('.bg-model').style.display = 'none';
  })
  
  document.getElementById('btn2').addEventListener('click', 
  function() {
    if(document.getElementById('name').value != "" && document.getElementById('pass').value != "")
      window.location.href = "accueil_login.html";
  })
} catch(err) {
  
}

const navSlide = () => {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.categories');
  const favoris = document.getElementById('button-favoris');
  const playlist = document.getElementById('button-playlist');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  })

  favoris.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  })

  playlist.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  })


}

navSlide();
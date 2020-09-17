document.getElementById('btnSignup').addEventListener('click', 
function() {
  if(document.getElementById('frmUsername').value != "" && document.getElementById('frmPassword').value != "")
    window.location.href = "accueil_login.html";
})
  
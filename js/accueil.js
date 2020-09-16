function checkValidity(aID, aSearchTerm, aMsg){
    var elem = document.getElementById(aID);
    var invalid = (elem.value.indexOf(aSearchTerm) < 0);
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
    if (oldAlert) {
        document.body.removeChild(oldAlert);
    }

    if (msg) {
       var newAlert = document.createElement("div");
        newAlert.setAttribute("role", "alert");
        newAlert.setAttribute("id", "alert");
        var content = document.createTextNode(msg);
        newAlert.appendChild(content);
        document.body.appendChild(newAlert);
    }
}
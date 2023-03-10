generateCreateTravelForm("origen");
// When this function is called, you need to provide the ID of the node where you want to build it.
// For example, if you want to append to <div id="example"/>, you need to call: generateCreateTravelForm("example");
function generateCreateTravelForm(idToAppend) {
    const form = document.createElement("form");
    form.setAttribute("id", "form-crear-viajes");
    // Starting date
    const fechaInicioLabel = document.createElement("label");
    fechaInicioLabel.textContent = "Fecha de inicio ";
    const fechaInicioInput = document.createElement("input");
    fechaInicioInput.setAttribute("type", "date");
    fechaInicioInput.setAttribute("id", "startDate");
    // !! Starting date error
    const fechaInicioError = document.createElement("span");
    fechaInicioError.setAttribute("id", "startDate-error");
    // End date
    const fechaFinalLabel = document.createElement("label");
    fechaFinalLabel.textContent = "Fecha final ";
    const fechaFinalInput = document.createElement("input");
    fechaFinalInput.setAttribute("type", "date");
    fechaFinalInput.setAttribute("id", "endDate");
    // !! End date error
    const fechaFinalError = document.createElement("span");
    fechaFinalError.setAttribute("id", "endDate-error");
    // Origin input
    const origenLabel = document.createElement("label");
    origenLabel.textContent = "Origen";
    const origenInput = document.createElement("input");
    origenInput.setAttribute("id", "origin");
    // !! Origin error
    const origenError = document.createElement("span");
    origenError.setAttribute("id", "origin-error");
    // Destiny input
    const destinoLabel = document.createElement("label");
    destinoLabel.textContent = "Destino ";
    const destinoInput = document.createElement("input");
    destinoInput.setAttribute("id", "destiny");
    // !! Destiny error
    const destinoError = document.createElement("span");
    destinoError.setAttribute("id", "destiny-error");
    // Description input
    const descripcionLabel = document.createElement("label");
    descripcionLabel.textContent = "Descripción del viaje ";
    const descripcionTextarea = document.createElement("textarea");
    descripcionTextarea.setAttribute("id", "description");
    descripcionTextarea.setAttribute("cols", "30");
    descripcionTextarea.setAttribute("rows", "10");
    // !! Description error
    const descripcionError = document.createElement("span");
    descripcionError.setAttribute("id", "description-error");
    // Budget
    const presupuestoLabel = document.createElement("label");
    presupuestoLabel.textContent = "Presupuesto aproximado ";
    const presupuestoInput = document.createElement("input");
    presupuestoInput.setAttribute("type", "range");
    presupuestoInput.setAttribute("min", "0");
    presupuestoInput.setAttribute("max", "1000");
    presupuestoInput.setAttribute("value", "0");
    presupuestoInput.setAttribute("id", "budgetBar");
    const presupuestoValue = document.createElement("span");
    presupuestoValue.setAttribute("id", "budget-value");
    presupuestoValue.textContent = " 0€";
    // Invite friends
    const amigosMenu = document.createElement("div");
    amigosMenu.setAttribute("id", "friends-menu");
    const amigosTitulo = document.createElement("h5");
    amigosTitulo.textContent = "Invitar amigos";
    const amigosInvitados = document.createElement("div");
    amigosInvitados.setAttribute("id", "invited-friends");
    const amigosRecomendados = document.createElement("div");
    amigosRecomendados.setAttribute("id", "recommended-friends");
    // Submit button
    const botonSubmit = document.createElement("span");
    botonSubmit.textContent = "Añadir viaje";
    botonSubmit.setAttribute("onclick", "validateForm()");
    botonSubmit.setAttribute("id", "submit");

    // Generate structure
    form.appendChild(fechaInicioLabel);
    form.appendChild(fechaInicioInput);
    form.appendChild(fechaInicioError);
    form.appendChild(document.createTextNode(" "));
    form.appendChild(fechaFinalLabel);
    form.appendChild(fechaFinalInput);
    form.appendChild(fechaFinalError);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(origenLabel);
    form.appendChild(origenInput);
    form.appendChild(origenError);
    form.appendChild(document.createTextNode(" "));
    form.appendChild(destinoLabel);
    form.appendChild(destinoInput);
    form.appendChild(destinoError);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(descripcionLabel);
    form.appendChild(descripcionTextarea);
    form.appendChild(descripcionError);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(presupuestoLabel);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(presupuestoInput);
    form.appendChild(presupuestoValue);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    amigosMenu.appendChild(amigosTitulo);
    amigosMenu.appendChild(amigosInvitados);
    amigosMenu.appendChild(amigosRecomendados);
    form.appendChild(amigosMenu);
    form.appendChild(botonSubmit);
    // Final append
    document.getElementById(idToAppend).appendChild(form);
}

document.querySelector("#budgetBar").addEventListener("input", function () {
    document.querySelector("#budget-value").innerHTML = document.querySelector("#budgetBar").value + "€";
});

function validateForm() {
    clearErrors();
    startDateValue = startDate.value;
    endDateValue = endDate.value;
    originValue = document.getElementById("origin").value;
    destinyValue = destiny.value;
    descriptionValue = description.value;
    // Checks if starting date is correct.
    if (!startDateValue) {
        generateError("startDate-error", "No se introdució una fecha de inicio");
    } else {
        if (checkDateToActual(startDateValue) == 2) {
            generateError("startDate-error", "¡La fecha introducida no puede ser antes de hoy!");
        }  
    }
    // Checks if end date is correct.
    if (!endDateValue) {
        generateError("endDate-error", "No se introdució una fecha de fin de viaje");
    } else {
        if (checkDateToActual(endDateValue) == 2) {
            generateError("endDate-error", "¡La fecha introducida no puede ser antes de hoy!");
        } else {
            if (startDateValue && compareDates(startDateValue, endDateValue) == 1) {
                generateError("endDate-error", "¡La fecha final no puede ser antes de la fecha de inicio!");
            }
        }
    }
    
    if (!originValue) {
        generateError("origin-error", "Tiene que haber un lugar de origen" + originValue);
    }

    if (!destinyValue) {
        generateError("destiny-error", "Tiene que haber un lugar de destino");
    }

    if (!descriptionValue) {
        generateError("description-error", "Tiene que haber una descripción");
    }


    // Checks if there are any errors in the form.
    if (verifyErrors()) {
         if (document.querySelector("#budgetBar").value == 0) {
            if (!window.confirm("¿Estás seguro de poner el presupuesto en 0?")) {
                return;
            }
         }
        console.log("¡Se puede enviar el formulario!");
    }
}

function checkValue(data) {
    if (data == "" || data == undefined || data == null) {
        return false;
    }
    return true;
}

function generateError(idErrorField, message) {
    document.getElementById(idErrorField).innerHTML = message;
}

// Returns 0 in case date = actual. Returns 1 in case date > actual. Returns 2 in case date < actual.
function checkDateToActual(date) {
    dateSplit = date.split("-");
    date = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);
    localDate = new Date();
    localDate = new Date(localDate.getFullYear(), localDate.getMonth(), localDate.getDate());
    if (date.getTime() == localDate.getTime()) {
        return 0;
    } else if (date > localDate) {
        return 1;
    } else {
        return 2;
    }
}

function compareDates(date1, date2) {
    dateSplit = date1.split("-");
    date1 = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);
    dateSplit = date2.split("-");
    date2 = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);
    if (date1.getTime() == date2.getTime()) {
        return 0;
    } else if (date1 > date2) {
        return 1;
    } else {
        return 2;
    }
}

// All fields that cointains in their id the word "error" are cleaned.
// For example, IDs included: validate-error, compilateerror.
function clearErrors() {
    const elementosError = document.querySelectorAll('[id*="error"]');
    elementosError.forEach(element => {
        element.innerHTML = "";
    });
}

function verifyErrors() {
    const elementosError = document.querySelectorAll('[id*="error"]');
    for (let i = 0; i < elementosError.length; i++) {
      if (elementosError[i].textContent.trim() !== '') {
        return false;
      }
    }
    return true;
  }
  
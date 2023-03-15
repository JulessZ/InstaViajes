import { fakeFetch } from "./fakeFetch.js";
import { createActivityView } from "./createActivityView.js";

async function addMultipleOptionsToDataListInNameInput() {

    const nameDataList = document.querySelector('.nameDataList');

    const data = await fakeFetch.getPlacesData();

    for(const [key, place] of Object.entries(data)){

        let newOption = document.createElement('option');

        let newOptionText = document.createTextNode(place.name);

        newOption.appendChild(newOptionText);

        nameDataList.appendChild(newOption);
    }
}

function checkVoidInputAndSaveValues() {

    let status = 0;

    let newActivity = {
        name: '',
        description: '',
        date: '',
        hour: '',
        duration: '',
        price: ''
    };

    if(inputName.value == '') {
        let spanErrorName = document.getElementById('spanErrorName');
        spanErrorName.innerHTML = 'DEBE ASIGNAR UN NOMBRE A LA ACTIVIDAD';
        status = 1;
    }
    else {
        newActivity.name = inputName.value;
        spanErrorName.innerHTML = '';
    }

    if(inputDescription.value == '') {
        let spanErrorDescription = document.getElementById('spanErrorDescription');
        spanErrorDescription.innerHTML = 'ES NECESARIA UNA DESCRIPCIÓN DEL VIAJE';
        status = 1;
    }
    else {
        newActivity.description = inputDescription.value;
        spanErrorDescription.innerHTML = '';
    }

    if(inputDateStart.value == '') {
        let spanErrorDate = document.getElementById('spanErrorDate');
        spanErrorDate.innerHTML = 'DEBE ASIGNAR UNA FECHA DE COMIENZO';
        status = 1;
    }
    else {
        newActivity.date = inputDateStart.value;
        spanErrorDate.innerHTML = '';
    }

    if(inputHourStart.value == '') {
        let spanErrorHour = document.getElementById('spanErrorHour');
        spanErrorHour.innerHTML = 'ES NECESARIA UNA HORA DE INICIO';
        status = 1;
    }
    else {
        newActivity.hour = inputHourStart.value;
        spanErrorHour.innerHTML = '';
    }

    if(inputDuration.value == '') {
        let spanErrorDuration = document.getElementById('spanErrorDuration');
        spanErrorDuration.innerHTML = 'DEBE ASIGNAR UNA DURACIÓN ESTIMADA';
        status = 1;
    }
    else {
        newActivity.duration = inputDuration.value;
        spanErrorDuration.innerHTML = '';
    }

    newActivity.price = inputPrice.value;

    //solo se genera el viaje si todos los campos obligatorios(es decir todos menos precio) son rellenados
    if (status == 0) {

        activitiesList.push(newActivity);
        
    };

}


let activitiesList = [];



function addCheckEvent() {

    const buttonAddActivity = document.getElementById('buttonAddActivity');

    buttonAddActivity.addEventListener('click',()=>{

        checkVoidInputAndSaveValues();
    
    });
}

export async function renderCreateActivityForm() {

    const inputName = document.getElementById('inputName');
    const inputDescription  = document.getElementById('inputDescription');
    const inputDateStart = document.getElementById('inputDateStart');
    const inputHourStart = document.getElementById('inputHourStart');
    const inputDuration = document.getElementById('inputDuration');
    const inputPrice = document.getElementById('inputPrice');

    let activitiesList = [];

    createActivityView.buildView();

    addMultipleOptionsToDataListInNameInput();

    addCheckEvent()
    
}
import { fakeFetch } from "./fakeFetch.js";
import { createActivityView } from "./createActivityView.js";

async function getActivityData() {
    let data = await fakeFetch.getActivityData();
    createActivityView.buildView(data);
    const buttonAddActivity = document.getElementById('buttonAddActivity');

    buttonAddActivity.addEventListener('click',()=>{
        checkVoidInputAndSaveValues();
    });

    addMultipleOptionsToDataListInNameInput();

}

getActivityData();


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

    let currentActivity = {
        name: '',
        description: '',
        date: '',
        hour: '',
        duration: '',
        price: ''
    };

    if(document.getElementById('inputName').value == '') {
        let spanErrorName = document.getElementById('spanErrorName');
        spanErrorName.innerHTML = 'DEBE ASIGNAR UN NOMBRE A LA ACTIVIDAD';
        status = 1;
    }
    
    else {
        spanErrorName.innerHTML = '';
        currentActivity.name = document.getElementById('inputName').value;
    }
    
    if(document.getElementById('inputDescription').value == '') {
        let spanErrorDescription = document.getElementById('spanErrorDescription');
        spanErrorDescription.innerHTML = 'ES NECESARIA UNA DESCRIPCIÓN DEL VIAJE';
        status = 1;
    }
    else {
        spanErrorDescription.innerHTML = '';
        currentActivity.description = document.getElementById('inputDescription').value;
    }
    if(document.getElementById('inputDateStart').value == '') {
        let spanErrorDate = document.getElementById('spanErrorDate');
        spanErrorDate.innerHTML = 'DEBE ASIGNAR UNA FECHA DE COMIENZO';
        status = 1;
    }
    else {
        spanErrorDate.innerHTML = '';
        currentActivity.date = document.getElementById('inputDateStart').value;
    }
    if(document.getElementById('inputHourStart').value == '') {
        let spanErrorHour = document.getElementById('spanErrorHour');
        spanErrorHour.innerHTML = 'ES NECESARIA UNA HORA DE INICIO';
        status = 1;
    }
    else {
        spanErrorHour.innerHTML = '';
        currentActivity.hour  = document.getElementById('inputHourStart').value;
    }

    if(document.getElementById('inputDuration').value == '') {
        let spanErrorDuration = document.getElementById('spanErrorDuration');
        spanErrorDuration.innerHTML = 'DEBE ASIGNAR UNA DURACIÓN ESTIMADA';
        status = 1;
    }
    else {
        spanErrorDuration.innerHTML = '';
        currentActivity.duration = document.getElementById('inputDuration').value;
    }

    currentActivity.price = document.getElementById('inputPrice').value;

    let activitiesList = [];

    //solo se suben los datos si todos los campos obligatorios han sido rellenados
    //en este caso los guardo en un array para hacer las pruebas.
    if  (status == 0) {
        activitiesList.push(currentActivity);
    }

}

export async function renderEditActivityForm() {

    const inputName = document.getElementById('inputName');
    const inputDescription  = document.getElementById('inputDescription');
    const inputDateStart = document.getElementById('inputDateStart');
    const inputHourStart = document.getElementById('inputHourStart');
    const inputDuration = document.getElementById('inputDuration');
    const inputPrice = document.getElementById('inputPrice');

    let activitiesList = [];

    createActivityView.buildView();

    addMultipleOptionsToDataListInNameInput();

    addCheckEvent();
    
}
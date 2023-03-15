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
        let durationValue = (document.getElementById('inputDuration').value.split('Horas'))[0];
        durationValue = durationValue.slice(0, -1);
        
        if(!isNaN(durationValue)) {
            spanErrorDuration.innerHTML = '';
            currentActivity.duration = durationValue;

        }
        else {
            let spanErrorDuration = document.getElementById('spanErrorDuration');
            spanErrorDuration.innerHTML = 'DEBE ASIGNAR UN VALOR NÚMERICO';
            status = 1;
        }
        
    }

    //validacion de que el precio introducido es un string de tipo numerico mediante el metodo isNan
    let priceValue = (document.getElementById('inputPrice').value).split('€')[0];
    if(isNaN(priceValue)) {
        let spanErrorPrice = document.getElementById('spanErrorPrice');
        spanErrorPrice.innerHTML = 'Debe introducir datos númericos';
        status = 1;
    }
    else {
        spanErrorPrice.innerHTML = '';
        priceValue = priceValue.slice(0, -1);
        currentActivity.price = priceValue;
    }



    

    //solo se suben los datos si todos los campos obligatorios han sido rellenados
    //en este caso los guardo en un array para hacer las pruebas.
    let activitiesList = [];

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

    getActivityData();


    
}
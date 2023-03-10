import { fakeFetch } from "./fakeFetch.js";

async function addMultipleOptionsToDataListInNameInput() {
    const nameDataList = document.querySelector('.nameDataList');
    const data = await fakeFetch.getPlacesData();
    for(const [key, place] of Object.entries(data)){
        console.log(place.name);
        let newOption = document.createElement('option');
        let newOptionText = document.createTextNode(place.name);
        newOption.appendChild(newOptionText);

        nameDataList.appendChild(newOption);
    }
}
addMultipleOptionsToDataListInNameInput();

const inputName = document.getElementById('inputName');
const inputDescription  = document.getElementById('inputDescription');
const inputDateStart = document.getElementById('inputDateStart');
const inputHourStart = document.getElementById('inputHourStart');
const inputDuration = document.getElementById('inputDuration');
const inputPrice = document.getElementById('inputPrice');

function checkVoidInputAndSaveValues() {

    let newActivity = {
        name: '',
        description: '',
        date: '',
        hour: '',
        duration: '',
        price: ''
    };

    if(inputName.value == '') {
        window.alert('Nombre vacio');
        return;
    }
    else {
        newActivity.name = inputName.value;
    }

    if(inputDescription.value == '') {
        window.alert('Descripcion vacia');
        return;
    }
    else {
        newActivity.description = inputDescription.value;
    }

    if(inputDateStart.value == '') {
        window.alert('Fecha vacia');
        return;
    }
    else {
        newActivity.date = inputDateStart.value;
    }

    if(inputHourStart.value == '') {
        window.alert('Hora vacia');
        return;
    }
    else {
        newActivity.hour = inputHourStart.value;
    }

    if(inputDuration.value == '') {
        window.alert('Duracion vacia');
        return;
    }
    else {
        newActivity.duration = inputDuration.value;
    }

    if(inputPrice.value == '') {
        window.alert('Precio vacio');
        return;
    }
    else {
        newActivity.price = inputPrice.value;
    }

    activitiesList.push(newActivity);

}


let activitiesList = [];

const buttonAddActivity = document.getElementById('buttonAddActivity');

buttonAddActivity.addEventListener('click',()=>{

    checkVoidInputAndSaveValues();

});

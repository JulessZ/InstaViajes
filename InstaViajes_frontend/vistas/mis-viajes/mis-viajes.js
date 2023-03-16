import { fetchMisViajes } from "./fetch-mis-viajes";

export async function getMisViajesData() {
    const misViajesContainer = document.querySelector('#misviajesmisviajes');
    const viajesCompartidosContainer = document.querySelector('#viajescompartidosmisviajes');

    //mis viajes
    const data = await fetchMisViajes.showMisViajesData();
    for (const [key, journeyData] of Object.entries(data)) {
        let linkDetallesViaje = document.createElement("a");
        linkDetallesViaje.setAttribute("href", "/detallesviaje");
        let journeyCard = document.createElement('div');
        journeyCard.setAttribute("class","cajaSombra cajatarjeta caja-mis-viajes");
        journeyCard.setAttribute('id', `${journeyData.id}`);
        //imagen del viaje
        let imgDiv = document.createElement('div');
        let img = document.createElement('img');
        img.src = journeyData.img;
        imgDiv.appendChild(img);
        journeyCard.appendChild(imgDiv);

        //nombre del viaje
        let journeyName = document.createElement('h3');
        let journeyNameText = document.createTextNode(`${journeyData.name}`);
        let divname= document.createElement('div');
        divname.setAttribute('class','divnombre');
        journeyName.appendChild(journeyNameText);
        divname.appendChild(journeyName);
        journeyCard.appendChild(divname);

        let downDiv = document.createElement('div');
        downDiv.setAttribute('class','divdatos');

        let leftDiv = document.createElement('div');

        //nombre del destino del viaje


        let journeyDestination = document.createElement('p');
        let journeyDestinationText = document.createTextNode(`${journeyData.destination}`);
        journeyDestination.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/></svg>';
        journeyDestination.appendChild(journeyDestinationText);
        leftDiv.appendChild(journeyDestination);


        //numero de participantes del viaje
        let journeyParticipants = document.createElement('p');
        let journeyParticipantsText = document.createTextNode(`${journeyData.participants}`);
        journeyParticipants.appendChild(journeyParticipantsText);
        journeyParticipants.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>';
        leftDiv.appendChild(journeyParticipants);

        //dias de duracion del viaje
        let journeyDays = document.createElement('p');
        let journeyDaysText = document.createTextNode(`${journeyData.days} días`);
        journeyDays.appendChild(journeyDaysText);

        leftDiv.appendChild(journeyDays);

        downDiv.appendChild(leftDiv);

        let rightDiv = document.createElement('div');

        //fecha de inicio del viaje
        let journeyStartDate = document.createElement('p');
        let journeyStartDateText = document.createTextNode(`${journeyData.dateStart} `);
        journeyStartDate.appendChild(journeyStartDateText);
        rightDiv.appendChild(journeyStartDate);

        //fecha de finalizacion del viaje
        let journeyEndDate = document.createElement('p');
        let journeyEndDateText = document.createTextNode(`${journeyData.dateEnd}`);
        journeyEndDate.appendChild(journeyEndDateText);
        rightDiv.appendChild(journeyEndDate);

        //estado actual del viaje(abierto/cerrado)
        let journeyStatus = document.createElement('p');
        let journeyStatusText = document.createTextNode(`${journeyData.status}`);
        journeyStatus.appendChild(journeyStatusText);
        rightDiv.appendChild(journeyStatus);

        downDiv.appendChild(rightDiv);
        journeyCard.appendChild(downDiv);

        //botones de editar y eliminar
        let buttonDiv = document.createElement('div');
        buttonDiv.setAttribute('class', 'style-button-create');

        let journeyButtonEdit = document.createElement('button');
        journeyButtonEdit.textContent = 'Editar';
        journeyButtonEdit.setAttribute('class', 'boton-secundario');
        journeyButtonEdit.setAttribute('onclick', `onNavigate('/editarviaje'); return false;`);
        buttonDiv.appendChild(journeyButtonEdit);
        journeyCard.appendChild(buttonDiv);

        let journeyButtonDelete = document.createElement('button');
        journeyButtonDelete.textContent = 'Eliminar';
        journeyButtonDelete.setAttribute('class', 'boton-cancelar deleteButton');
        if(journeyData.status == 'Abierto') {
            buttonDiv.appendChild(journeyButtonDelete);
        }
        linkDetallesViaje.appendChild(journeyCard);
        misViajesContainer.appendChild(linkDetallesViaje);

    }

    //viajes compartidos

    const dataViajesCompartidos = await fetchMisViajes.showMisViajesData();
    for (const [key, journeyData] of Object.entries(data)) {
        let linkDetallesViaje = document.createElement("a");
        linkDetallesViaje.setAttribute("href", "/detallesviaje");
        let journeyCard = document.createElement('div');
        journeyCard.setAttribute("class","cajaSombra cajatarjeta");
        journeyCard.setAttribute('value', `${journeyData.id}`);
        //imagen del viaje
        let imgDiv = document.createElement('div');
        let img = document.createElement('img');
        img.src = journeyData.img;
        imgDiv.appendChild(img);
        journeyCard.appendChild(imgDiv);

        //nombre del viaje
        let journeyName = document.createElement('h3');
        let journeyNameText = document.createTextNode(`${journeyData.name}`);
        let divname= document.createElement('div');
        divname.setAttribute('class','divnombre');
       journeyName.appendChild(journeyNameText);
        divname.appendChild(journeyName);
        journeyCard.appendChild(divname);

        let downDiv = document.createElement('div');
        downDiv.setAttribute('class','divdatos');

        let leftDiv = document.createElement('div');

        //nombre del destino del viaje


        let journeyDestination = document.createElement('p');
        let journeyDestinationText = document.createTextNode(`${journeyData.destination}`);
        journeyDestination.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/></svg>';
        journeyDestination.appendChild(journeyDestinationText);
        leftDiv.appendChild(journeyDestination);


        //numero de participantes del viaje
        let journeyParticipants = document.createElement('p');
        let journeyParticipantsText = document.createTextNode(`${journeyData.participants}`);
        journeyParticipants.appendChild(journeyParticipantsText);
        journeyParticipants.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>';
        leftDiv.appendChild(journeyParticipants);

        //dias de duracion del viaje
        let journeyDays = document.createElement('p');
        let journeyDaysText = document.createTextNode(`${journeyData.days} días`);
        journeyDays.appendChild(journeyDaysText);

        leftDiv.appendChild(journeyDays);

        downDiv.appendChild(leftDiv);

        let rightDiv = document.createElement('div');

        //fecha de inicio del viaje
        let journeyStartDate = document.createElement('p');
        let journeyStartDateText = document.createTextNode(`${journeyData.dateStart} `);
        journeyStartDate.appendChild(journeyStartDateText);
        rightDiv.appendChild(journeyStartDate);

        //fecha de finalizacion del viaje
        let journeyEndDate = document.createElement('p');
        let journeyEndDateText = document.createTextNode(`${journeyData.dateEnd}`);
        journeyEndDate.appendChild(journeyEndDateText);
        rightDiv.appendChild(journeyEndDate);

        //estado actual del viaje(abierto/cerrado)
        let journeyStatus = document.createElement('p');
        let journeyStatusText = document.createTextNode(`${journeyData.status}`);
        journeyStatus.appendChild(journeyStatusText);
        rightDiv.appendChild(journeyStatus);

        downDiv.appendChild(rightDiv);

        journeyCard.appendChild(downDiv);


        linkDetallesViaje.appendChild(journeyCard);
        viajesCompartidosContainer.appendChild(linkDetallesViaje);
    }

    //apartado para borrar contenido de los viajes cuyo dueño es el propio usuario
    const deleteButton = document.querySelectorAll('.deleteButton');

    const cajaSombra = document.querySelectorAll('.caja-mis-viajes');

    for (let index = 0; index < deleteButton.length; index++) {

        deleteButton[index].addEventListener('click', ()=> {

            // console.log(cajaSombra[index].id); ESTE ES EL ID DEL VIAJE QUE SE DEBE INDICAR AL SERVIDOR QUE DEBE SER BORRADO
            
            misViajesContainer.removeChild(cajaSombra[index]);

        });
    }

};
import { fetchMisViajes } from "./fetch-mis-viajes";

const misViajesContainer = document.querySelector('.mis-viajes');

const viajesCompartidosContainer = document.querySelector('.viajes-compartidos');

async function getMisViajesData() {

    //mis viajes

    const data = await fetchMisViajes.showMisViajesData();
    for(const [key, journeyData] of Object.entries(data)){
        let journeyCard = document.createElement('div');

        //imagen del viaje
        let imgDiv = document.createElement('div');
        let img = document.createElement('img');
        img.src = journeyData.img;
        imgDiv.appendChild(img);
        journeyCard.appendChild(imgDiv);

        //nombre del viaje
        let journeyName = document.createElement('p');
        let journeyNameText = document.createTextNode(`${journeyData.name}`);
        journeyName.appendChild(journeyNameText);
        journeyCard.appendChild(journeyName);

        let downDiv = document.createElement('div');

        let leftDiv = document.createElement('div');

        //nombre del destino del viaje
        

        let journeyDestination = document.createElement('p');
        let journeyDestinationText = document.createTextNode(`${journeyData.destination}`);

        let iconMap = document.createElement('i');
        iconMap.classList.add('bi');
        iconMap.classList.add('bi-map');
        journeyDestination.appendChild(iconMap);

        journeyDestination.appendChild(journeyDestinationText);
        leftDiv.appendChild(journeyDestination);


        //numero de participantes del viaje
        let journeyParticipants = document.createElement('p');
        let journeyParticipantsText = document.createTextNode(`${journeyData.participants}`);

        let iconPerson = document.createElement('i');
        iconPerson.classList.add('bi');
        iconPerson.classList.add('bi-people');

        journeyParticipants.appendChild(journeyParticipantsText);
        journeyParticipants.appendChild(iconPerson);

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

        misViajesContainer.appendChild(journeyCard);
    }

    //viajes compartidos

    const dataViajesCompartidos = await fetchMisViajes.showMisViajesData();
    for(const [key, journeyData] of Object.entries(data)){
        let journeyCard = document.createElement('div');

        //imagen del viaje
        let imgDiv = document.createElement('div');
        let img = document.createElement('img');
        img.src = journeyData.img;
        imgDiv.appendChild(img);
        journeyCard.appendChild(imgDiv);

        //nombre del viaje
        let journeyName = document.createElement('p');
        let journeyNameText = document.createTextNode(`${journeyData.name}`);
        journeyName.appendChild(journeyNameText);
        journeyCard.appendChild(journeyName);

        let downDiv = document.createElement('div');

        let leftDiv = document.createElement('div');

        //nombre del destino del viaje
        

        let journeyDestination = document.createElement('p');
        let journeyDestinationText = document.createTextNode(`${journeyData.destination}`);

        let iconMap = document.createElement('i');
        iconMap.classList.add('bi');
        iconMap.classList.add('bi-map');
        journeyDestination.appendChild(iconMap);

        journeyDestination.appendChild(journeyDestinationText);
        leftDiv.appendChild(journeyDestination);


        //numero de participantes del viaje
        let journeyParticipants = document.createElement('p');
        let journeyParticipantsText = document.createTextNode(`${journeyData.participants}`);

        let iconPerson = document.createElement('i');
        iconPerson.classList.add('bi');
        iconPerson.classList.add('bi-people');

        journeyParticipants.appendChild(journeyParticipantsText);
        journeyParticipants.appendChild(iconPerson);

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

        viajesCompartidosContainer.appendChild(journeyCard);
    }
};
getMisViajesData();
fetchMisViajes.showViajesCompartidosData();
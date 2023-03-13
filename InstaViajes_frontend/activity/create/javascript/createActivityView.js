export class createActivityView{
    static buildView() {

        const container = document.querySelector('.container');
        
        let name = document.createElement('p');
        let nameText = document.createTextNode('Nombre');
        name.appendChild(nameText);
        container.appendChild(name);

        let inputName = document.createElement('input');
        inputName.setAttribute('value', '');
        inputName.setAttribute('name', 'inputName');
        inputName.setAttribute('id', 'inputName');
        inputName.setAttribute('list', 'nameDataList');
        inputName.setAttribute('autocomplete', 'off');
        container.appendChild(inputName);

        let description = document.createElement('p');
        let descriptionText = document.createTextNode('Descripción');
        description.appendChild(descriptionText);
        container.appendChild(description);

        let inputDescription = document.createElement('input');
        inputDescription.setAttribute('id', 'inputDescription');
        inputDescription.setAttribute('autocomplete', 'off');
        container.appendChild(inputDescription);

        let dateStart = document.createElement('p');
        let dateStartText = document.createTextNode('Fecha de inicio');
        dateStart.appendChild(dateStartText);
        container.appendChild(dateStart);

        let dateStartInput = document.createElement('input');
        dateStartInput.setAttribute('type', 'date');
        dateStartInput.setAttribute('id', 'inputDateStart');
        container.appendChild(dateStartInput);

        let hourStart = document.createElement('p');
        let hourStartText = document.createTextNode('Hora de inicio');
        hourStart.appendChild(hourStartText);
        container.appendChild(hourStart);

        let inputHourStart = document.createElement('input');
        inputHourStart.setAttribute('type', 'time');
        inputHourStart.setAttribute('id', 'inputHourStart');
        container.appendChild(inputHourStart);

        let duration = document.createElement('p');
        let durationText = document.createTextNode('Duración');
        duration.appendChild(durationText);
        container.appendChild(duration);

        let inputDuration = document.createElement('input');
        inputDuration.setAttribute('type', 'time');
        inputDuration.setAttribute('id', 'inputDuration');
        container.appendChild(inputDuration);

        let price = document.createElement('p');
        let priceText = document.createTextNode('Precio');
        price.appendChild(priceText);
        container.appendChild(price);

        let inputPrice = document.createElement('input');
        inputPrice.setAttribute('type', 'range');
        inputPrice.setAttribute('id', 'inputPrice');
        container.appendChild(inputPrice);

        let datalist = document.createElement('datalist');
        datalist.setAttribute('class', 'nameDataList');
        datalist.setAttribute('id', 'nameDataList');
        container.appendChild(datalist);

    }
}

export class createActivityView{
    static buildView() {

        const container = document.getElementById('form-crear-actividades');
        container.setAttribute('onsubmit', 'return false');
        
        //start name, name input and its datalist
            let divName = document.createElement('div');

            let name = document.createElement('label');
            let nameText = document.createTextNode('Nombre');
            name.appendChild(nameText);
            divName.appendChild(name);

            let inputName = document.createElement('input');
            inputName.setAttribute('value', '');
            inputName.setAttribute('name', 'inputName');
            inputName.setAttribute('id', 'inputName');
            inputName.setAttribute('list', 'nameDataList');
            inputName.setAttribute('autocomplete', 'off');
            inputName.setAttribute('placeholder', 'Sitio donde se va a realizar...');
            divName.appendChild(inputName);

            let spanErrorName = document.createElement('span');
            spanErrorName.setAttribute('id', 'spanErrorName');
            divName.appendChild(spanErrorName);

            let datalist = document.createElement('datalist');
            datalist.setAttribute('class', 'nameDataList');
            datalist.setAttribute('id', 'nameDataList');
            divName.appendChild(datalist);

            container.appendChild(divName);
        //end

        //start description and description input
            let descriptionDiv = document.createElement('div');

            let description = document.createElement('label');
            let descriptionText = document.createTextNode('Descripción');
            description.appendChild(descriptionText);
            descriptionDiv.appendChild(description);

            let inputDescription = document.createElement('textarea');
            inputDescription.setAttribute('id', 'inputDescription');
            inputDescription.setAttribute('autocomplete', 'off');
            inputDescription.setAttribute('placeholder', 'Describe los diferentes pasos, sitios y experiencias que se van a vivir en la actividad.');
            
            descriptionDiv.appendChild(inputDescription);

            let spanErrorDescription = document.createElement('span');
            spanErrorDescription.setAttribute('id', 'spanErrorDescription');
            descriptionDiv.appendChild(spanErrorDescription);

            container.appendChild(descriptionDiv);
        //end

        //start date and hour
            let dateDiv = document.createElement('div');
            dateDiv.setAttribute('class', 'style-time');

            let dateStartDiv = document.createElement('div');

            let dateStart = document.createElement('label');
            let dateStartText = document.createTextNode('Fecha de inicio');
            dateStart.appendChild(dateStartText);
            dateStartDiv.appendChild(dateStart);

            let dateStartInput = document.createElement('input');
            dateStartInput.setAttribute('type', 'date');
            dateStartInput.setAttribute('id', 'inputDateStart');
            dateStartDiv.appendChild(dateStartInput);

            let spanErrorDate = document.createElement('span');
            spanErrorDate.setAttribute('id', 'spanErrorDate');
            dateStartDiv.appendChild(spanErrorDate);

            dateDiv.appendChild(dateStartDiv);

            let hourDiv = document.createElement('div');
            let hourStart = document.createElement('label');
            let hourStartText = document.createTextNode('Hora de inicio');
            hourStart.appendChild(hourStartText);
            hourDiv.appendChild(hourStart);
            dateDiv.appendChild(hourDiv);

            let inputHourStart = document.createElement('input');
            inputHourStart.setAttribute('type', 'time');
            inputHourStart.setAttribute('id', 'inputHourStart');
            hourDiv.appendChild(inputHourStart);

            let spanErrorHour = document.createElement('span');
            spanErrorHour.setAttribute('id', 'spanErrorHour');
            hourDiv.appendChild(spanErrorHour);

            dateDiv.appendChild(hourDiv);

            container.appendChild(dateDiv);

        //end

        //start duration and price

            let durationDiv = document.createElement('div');

            let duration = document.createElement('label');
            let durationText = document.createTextNode('Duración');
            duration.appendChild(durationText);
            durationDiv.appendChild(duration);

            let inputDuration = document.createElement('input');
            inputDuration.setAttribute('type', 'time');
            inputDuration.setAttribute('id', 'inputDuration');
            durationDiv.appendChild(inputDuration);

            let spanErrorDuration = document.createElement('span');
            spanErrorDuration.setAttribute('id', 'spanErrorDuration');
            durationDiv.appendChild(spanErrorDuration);

            let durationAndPriceDiv = document.createElement('div');
            durationAndPriceDiv.setAttribute('class', 'style-time');

            durationAndPriceDiv.appendChild(durationDiv);

            let priceDiv = document.createElement('div');
            let price = document.createElement('label');
            let priceText = document.createTextNode('Precio');
            price.appendChild(priceText);
            priceDiv.appendChild(price);

            let inputPrice = document.createElement('input');
            inputPrice.setAttribute('type', 'text');
            inputPrice.setAttribute('id', 'inputPrice');
            priceDiv.appendChild(inputPrice);

            let spanErrorPrice = document.createElement('span');
            spanErrorPrice.setAttribute('id', 'spanErrorPrice');
            priceDiv.appendChild(spanErrorPrice);

            durationAndPriceDiv.appendChild(priceDiv);

            container.appendChild(durationAndPriceDiv);
        //end

        //start buttons
            let buttonsDiv = document.createElement('div');

            let buttonAddActivity = document.createElement('button');
            buttonAddActivity.setAttribute('id', 'buttonAddActivity');
            buttonAddActivity.textContent = 'Añadir actividad'

            buttonsDiv.appendChild(buttonAddActivity);

            let buttonCancell = document.createElement('button');
            buttonCancell.setAttribute('id', 'buttonCancell');
            buttonCancell.textContent = 'Cancelar'

            buttonsDiv.appendChild(buttonCancell);
            container.appendChild(buttonsDiv);
        //end
    }
}

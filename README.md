# InstaViajes
Crea y comparte viajes con tus amigos al momento y planealo hasta el últimos detalle. A que esperas! 

La idea es de tener un sitio centralizado donde puedes planificar viajes, sea para un viaje a solas, con amigos, familia o pareja. 

# Requisitos

## APP
Aplicación web colaborativa para la creación de viajes. La aplicación debera tener los siguientes módulos:

### Login 
En la plataforma debe haber un login con una parte de registracion. Lo mejor seria que el usuario se puede logear con su email o usuario

### Planificación: 
En este módulo los usuarios pueden crear su viaje. El viaje debe tener varios campos para identificarlo, un campo de texto para una descripcion, incluyendo la fecha, destino, presupuesto.

Para que se puede planificar bien. Una vez creado el viaje, el usuario puede añadir nuevas tarjetas al viaje. Las tarjetas pueden ser actividades, lugares, restaurantes, etc. Es decir, las tarjetas representan actividades. Esas actividades se deberan asignar a un dia especifico del viaje. 
Ej: (Dia 1: Llegada, Dia 2: Visita a la ciudad, Dia 2: Comida en el italiano Di Pizza, Dia 3: Visita a la playa, etc.) 

Cada actividad puede o no tener un precio que se puede asignar y que lo restara del presupuesto completo.

Para que en un viaje de grupo, todo pueden elegir que hacer, los usuarios podran votar por las ideas de otros usuarios dando un like a las ideas. Una vez que se cierra el viaje, la aplicacion creara el itinirario automaticamente por los likes que se han generado.

### Comparte viajes
Debe existir una manera de compatir el viaje con amigos e invitarlos al viaje. Una vez invitados, podran poner tarjetas y votar tarjetas. Si no estas invitado. Solo podras ver viajes ya finalizados de la gente.

### Reservas: 
En este módulo los usuarios pueden realizar / ver las ofertas de posibles reservas de alojamiento, transporte y actividades a través de la API de reservas externa. (Ejemplo: Airbnb, Uber, etc.) 

Un buen feature seria que al poner el destino del viaje, automaticamente busca un precio aproximado del viaje en avion, tren o como sea llegar al destino.

### Wall del viaje: 
En este módulo se muestra otros viajes de otras personas.

### Buscador de viajes: 
En este módulo los usuarios podrían buscar viajes de otros usuarios y hacerce una idea.

### Blog: 
En este módulo los usuarios pueden escribir sobre su experiencia en el viaje y compartir consejos y recomendaciones.


## Plataforma

La aplicacion front es node JavaScript en forma de microservicio
El middleware es una API de Laravel que se estructura por clases
La aplicación estaría almacenada en una base de datos MySQL

La aplicacion final debera tener 3 componentes, 2 en Docker: Front, Middle y la DB en un servidor.

CICD: La aplicacion conterinizado debera desplegarse usando el repositorio de GITHUB la rama MASTER. 


## Extras

### Galería: 
En este módulo los usuarios pueden subir y compartir fotos del viaje.

### Anuncios en la pagina
Para financiar el proyecto, deberiamos pensar en publicidad en la pagina. Pero no la publicidad pesada de pop up's. Tiene que ser sutil y ser un bana pequeño. Nos debera mostrar cosas de interes del lugar al que vamos por ejemplo. 


## Tareas

 - [ ] 1. Crear un modelo mockup de forma simple que muestra un ejemplo
       visual de la pagina. 
 - [ ] 2. Pensar que datos trataremos y que tenemos que tener en cuenta
 - [ ] 3. Como seria el modelo de DB
 - [ ] 4. Como seria el modelo de microservicios
 - [ ] 5. Como hago un real CICD
 - [ ] 6. TASK brack down (Como usar Tareas con SCRUM: [SCRUM TASK WORK](https://manifesto.co.uk/agile-concepts-scrum-task-board/))
 - [ ] 7. Implementacion

## API's de interes

API de viajes mas conocida: [despegar.com](https://dev.despegar.com/)
Smart Travel [Smart Travel](https://www.smartvel.com/es/api-de-recomendacion-turistica/)
APi de reservas [Reservas 6 apis](https://www.instintoprogramador.com.mx/2020/12/las-6-api-de-viajes-y-reservas-mas.html)

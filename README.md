# InstaViajes
Crea y comparte viajes con tus amigos al momento y planealo hasta el últimos detalle. A que esperas

# Requisitos

## APP
Aplicación web colaborativa para la creación de viajes. La aplicación debera tener los siguientes módulos:

### Login en la plataforma y poder registrarse.

### Planificación: 
En este módulo los usuarios pueden crear y compartir sus ideas para el viaje, incluyendo la fecha, destino, presupuesto, actividades, etc. 

La pagina del viaje debera tener un itinerario para el viaje. Ese itinirario puede ser creado y modificado por las personas que comparten el viaje
Ej: (Dia 1: Llegada, Dia 2: Visita a la ciudad, Dia 3: Visita a la playa, etc.) 

Los usuarios podrían votar por las ideas de otros usuarios dando un like a las ideas. Una vez que se cierra el viaje, la aplicacion creara el itinirario automaticamente por los likes que se han generado.

### Reservas: en este módulo los usuarios pueden realizar / ver las ofertas de posibles reservas de alojamiento, transporte y actividades a través de la API de reservas externa. (Ejemplo: Airbnb, Uber, etc.) 

### Wall: en este módulo los usuarios podrían compartir sus experiencias en el viaje.

### Buscador de viajes: en este módulo los usuarios podrían buscar viajes por destino de otros usuarios.

### Blog: en este módulo los usuarios pueden escribir sobre su experiencia en el viaje y compartir consejos y recomendaciones.


## Plataforma

La aplicacion front es node JavaScript en forma de microservicio
El middleware es una API de Laravel que se estructura por clases
La aplicación estaría almacenada en una base de datos MySQL

La aplicacion final debera tener 3 componentes, 2 en Docker: Front, Middle y la DB en un servidor.

CICD: La aplicacion conterinizado debera desplegarse usando el repositorio de GITHUB la rama MASTER. 


## Extras

### Galería: en este módulo los usuarios pueden subir y compartir fotos del viaje.


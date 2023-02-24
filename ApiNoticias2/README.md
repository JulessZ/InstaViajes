# Noticias
Este código utiliza la API de noticias de newsapi.org para mostrar noticias de un tema específico en una página web. El código está escrito en JavaScript y utiliza el método fetch() para recuperar los datos de la API y el método DOM para mostrarlos en la página.

## Características
- Permite buscar noticias por tema seleccionando una categoría o buscando por un término específico.
- Muestra un número específico de noticias (5 + 1) cada vez que se presiona "Siguiente".
- Permite acceder a la noticia completa al hacer clic en el título.
- Muestra la fecha y la fuente de cada noticia.
- Utilizo map, reduce, filter y slice, como lo acordado en el proyecto. 
- Tambien, si abres F12 y vas a aplicacion, cookies verás que se guarda la cookie según la categoria de la noticia. Graficamente se verá al principio. Debajo del titulo como "Último tema visto: "
- Tiene un video inscruztado por iframe que te pone en contexto de lo que es el mundo informativo.

## Uso
1. Incluye el archivo JavaScript en la página HTML.
2. Utiliza la función `buscar(cat)` para buscar noticias por categoría. Por ejemplo, `buscar("Tecnología")`.
3. Utiliza la función `buscarTema()` para buscar noticias por un término específico. Este término debe ser ingresado en el input con id "busqueda" en la página HTML.
4. Utiliza la función `siguiente()` para mostrar más noticias de la última búsqueda realizada.
   
## Personalización
- La cantidad de noticias que se cargan cada vez que se presiona "Siguiente" se puede cambiar modificando el valor de la variable `cantidadNoticias`.
- El tema de noticias mostrado por defecto al cargar la página se puede cambiar modificando el valor de la variable `temaActual`.

## Limitaciones
- La API de newsapi.org tiene un límite de solicitudes diarias, por lo que puede que no se puedan obtener todas las noticias deseadas en caso de alcanzar dicho límite.
- El código solo está diseñado para mostrar noticias en español y solo funciona con el endpoint "everything".

HE GENERADO UNA APIKEY CON MI CUENTA Y ESTE SERIA UNA URL PARA BUSCAR NOTICIAS DE TECNOLOGIA:
`https://newsapi.org/v2/everything?q="+tecnology+"&languaje=es&apiKey=3538a4d9cd27480b9f206060fdb9fbdd`

## Responsive
He usado el Framework Bootstrap 5 para que el archivo html sea adaptable a cualquier dispositivo. También CSS3 puro.


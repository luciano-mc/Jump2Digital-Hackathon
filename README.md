# Introducción
## Descripción de la aplicación
Este proyecto fue creado con [Vite](https://vitejs.dev/).

La aplicación permite explorar los personajes del multiverso de Rick y Morty. Con solo introducir el nombre, puedes descubrir información detallada sobre tus personajes favoritos, incluyendo su origen, especie, y las locaciones que han visitado. Utiliza una API para obtener datos en tiempo real, asegurando que siempre tengas acceso a la información más actualizada y precisa.

## Enlace
Para comenzar a utilizarla, visita 

https://jump2digital-hackathon.vercel.app/

Aquí encontrarás una interfaz de usuario intuitiva y fácil de usar que te guiará a través del proceso de búsqueda y visualización de personajes.
También, puedes utilizar las instrucciones para realizarlo en local.

## Instrucciones
Clona el repositorio de GitHub en tu máquina local. Puedes hacerlo utilizando el siguiente comando en tu terminal:
### git clone https://github.com/luciano-mc/jump2digital-hackathon

Navega hasta el directorio del proyecto. Una vez que el repositorio se haya clonado en tu máquina, navega hasta ese directorio utilizando el comando:
### cd jump2digital-hackathon

Instala las dependencias del proyecto. Si tu proyecto utiliza npm (Node Package Manager), puedes instalar todas las dependencias utilizando el comando:
### npm install

Ejecuta la aplicación. Finalmente, puedes iniciar la aplicación utilizando el comando:
### npm start

Esto debería iniciar la aplicación en tu navegador local. 
La URL es http://localhost:5173

## Uso
En la página principal de la aplicación, encontrarás un campo de entrada o input en la parte superior. Este es el lugar donde puedes escribir el nombre del personaje que estás buscando.

A medida que empieces a escribir, la aplicación comenzará a buscar personajes que coincidan con tu consulta en tiempo real. No necesitas preocuparte por hacer clic en un botón de búsqueda o presionar enter; los resultados se actualizarán automáticamente a medida que escribes.

Los resultados de la búsqueda se mostrarán debajo del campo de entrada en tiempo real. Cada resultado incluirá información básica sobre el personaje, como su nombre, origen y especie.

## API
Descripción
La aplicación utiliza la API de Rick y Morty (https://rickandmortyapi.com/). 
Esta API proporciona acceso a datos sobre cientos de personajes, imágenes, ubicaciones y episodios. La información es canónica, es decir, se basa en lo que se ve en el programa de televisión.

Detalles sobre los datos disponibles
La API proporciona una variedad de datos para cada personaje, de los cuales utilizaremos:

name: El nombre del personaje.
status: El estado del personaje (por ejemplo, Vivo, Muerto, desconocido).
image: La URL de la imagen del personaje.
origin: El origen del personaje, que incluye el nombre y la URL del origen. En la APP lo veras con el icono del planeta tierra.
location: La última ubicación conocida del personaje, que incluye el nombre y la URL de la ubicación. En la app lo veras con el icono del pin.

## Tecnologías
- HTML, CSS, React, Typescript. Vite

## Contacto luciano.martiin@gmail.com

## Referencias https://rickandmortyapi.com/

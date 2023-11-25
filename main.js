function Buscador() {

  const Busqueda = document.getElementById('Busqueda').value;
  const Resultado = document.getElementById('Resultado');
  
  resultado.innerHTML = ''; //borra gif de la anterior busqueda
  const APIClave = 'qd95Ett6HN9ITVRLwDIQjZiVTMJesNoj'; //clave API de Giphy
  //Constructor de la url de Guiphy
  const URLBusqueda = "https://api.giphy.com/v1/gifs/search?q=" + Busqueda + "&api_key=" + APIClave + "&limit=9";

  fetch(URLBusqueda)
      .then(response => response.json())
      .then(data => {
        const gifs = data.data;
        gifs.forEach(gif => {
          const gifUrl = gif.images.fixed_height.url;
          const imgElement = document.createElement('img');
          imgElement.src = gifUrl;
          resultado.appendChild(imgElement);
        });
    });
      
 
}

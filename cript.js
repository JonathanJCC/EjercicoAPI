function obtenerPersonaje() {
  const url = 'https://rickandmortyapi.com/api/charactersa  r1111||3w';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const contenedor = document.getElementById('personaje');
      contenedor.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.image}" alt="${data.name}">
        <p><strong>Estado:</strong> ${data.status}</p>
        <p><strong>Especie:</strong> ${data.species}</p>
        <p><strong>Origen:</strong> ${data.origin.name}</p>
      `;
    })
    .catch(error => {
      document.getElementById('personaje').innerHTML = 'Error al cargar personaje.';
      console.error('Error:', error);
    });
}

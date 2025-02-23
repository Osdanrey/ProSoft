function updateClock() { //Función declarada
  const clockElement = document.getElementById('clock'); //Define la variable al id de HTML
  const now = new Date(); //Define la hora actual

  const hours = now.getHours().toString().padStart(2, '0'); //Variable que guarda únicamente las horas, asegurandose que tome solo 2 digitos.
  const minutes = now.getMinutes().toString().padStart(2, '0'); //Variable que guarda los minutos.
  const seconds = now.getSeconds().toString().padStart(2, '0'); //Variable que guarda los segundos.

  clockElement.textContent = `${hours}:${minutes}:${seconds}`; //Impresión de la hora actual
}

setInterval(updateClock, 1000);// Actualiza el reloj cada segundo
updateClock();  // Llama la función de inmediato para evitar el retraso inicial

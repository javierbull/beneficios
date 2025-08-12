function actualizarBarra(porcentaje) {
    const progressBar = document.getElementById("myProgressBar");
    progressBar.style.width = porcentaje + "%";

    // Cambiar color según el progreso
    if (porcentaje < 21) {
        progressBar.style.backgroundColor = "#FF5F72"; // Rojo
    } else if (porcentaje < 50) {
        progressBar.style.backgroundColor = "#FFBF00"; // Amarillo
    } else {
        progressBar.style.backgroundColor = "#76B435"; // Verde
    }
}

// Ejemplo de uso
actualizarBarra(40); // Actualiza la barra al 50%
      
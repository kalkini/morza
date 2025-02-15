// Función para reproducir/pausar la radio
function toggleRadio() {
    var radio = document.getElementById('radio');
    if (radio.paused) {
        radio.play();
    } else {
        radio.pause();
    }
}

// Función para cambiar el video de YouTube
function changeVideo() {
    var youtube = document.getElementById('youtube');
    youtube.src = "https://www.youtube.com/embed/NUEVO_VIDEO_ID";
}

// Función para programar un programa en vivo
function scheduleLiveProgram(hour, minute, url) {
    var now = new Date();
    var startTime = new Date();
    startTime.setHours(hour, minute, 0, 0);

    if (now > startTime) {
        startTime.setDate(startTime.getDate() + 1); // Programar para el día siguiente si la hora ya pasó
    }

    var timeUntilStart = startTime - now;

    setTimeout(function() {
        var radio = document.getElementById('radio');
        radio.src = url;
        radio.play();
    }, timeUntilStart);
}

// Programar un programa en vivo a las 15:00 (3:00 PM)
scheduleLiveProgram(15, 0, 'URL_DEL_PROGRAMA_EN_VIVO');
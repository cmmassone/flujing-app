/* =====================================================
   FlujIng
   script.js
===================================================== */

/*=========================
    CONFIGURACIÓN
=========================*/

const APP = {

    nombre: "FlujIng",

    version: "1.0.5",

    apk: "apk/FlujIng_V105.apk",

    androidMinimo: "Android 8.0",

    videos: {

        instalacion: "#",

        equipo: "#",

        app: "#"

    }

};


/*=========================
    CARGAR DATOS
=========================*/

document.addEventListener("DOMContentLoaded", () => {

    // Versión

    const version = document.getElementById("version");

    if (version) {

        version.textContent = APP.version;

    }

    // Botón APK

    const apk = document.getElementById("apk");

    if (apk) {

        apk.href = APP.apk;

    }

    // Videos

    const botones = document.querySelectorAll(".card-btn");

    if (botones.length >= 4) {

        botones[0].href = APP.videos.instalacion;

        botones[1].href = APP.videos.equipo;

        botones[2].href = APP.videos.app;

    }

});


/*=========================
    DETECTAR ANDROID
=========================*/

const esAndroid = /Android/i.test(navigator.userAgent);

const esIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

const boton = document.getElementById("apk");

if (boton) {

    boton.addEventListener("click", (e) => {

        if (esAndroid) {

            return;

        }

        e.preventDefault();

        if (esIOS) {

            alert(

                `La aplicación FlujIng actualmente está disponible únicamente para Android.

Para utilizar el equipo deberá instalar la aplicación desde un dispositivo Android.`

            );

            return;

        }

        alert(

            `La aplicación FlujIng fue desarrollada para Android.

Si está utilizando una computadora, descargue la aplicación desde un teléfono Android escaneando el código QR del producto.`

        );

    });

}


/*=========================
    EFECTO APARICIÓN
=========================*/

const elementos = document.querySelectorAll(".feature,.card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: .15
});

elementos.forEach(el => {

    observer.observe(el);

});


/*=========================
    FOOTER
=========================*/

const año = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = `Ingeniería Electrónica<br>© ${año} FlujIng`;

}

console.log(

    `%cFlujIng v${APP.version}`,

    "color:#2F6FB4;font-size:18px;font-weight:bold;"

);

console.log(

    "Desarrollado por Ing. Carlos Maximiliano Massone"

);
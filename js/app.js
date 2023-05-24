let toggle=document.getElementById('toggle');
let label_toggle=document.getElementById('label_toggle');
let div=document.getElementById('card');
let img=document.getElementById('img');


let cardLines = document.querySelector('.card .lines');

toggle.addEventListener('change', (event) => {
  let checked = event.target.checked;
  document.body.classList.toggle('dark');

  if (checked) {
    label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    label_toggle.style.color = "#ff3c7b";
    div.style.background = "#fff";
    div.style.color = "white";
    img.style.filter = "grayscale(0)";

    // cardLines.classList.remove('white');
    
  } else {
    label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    label_toggle.style.color = "#45f3ff";
    div.style.background = "#fff";
    div.style.color = "white";
    img.style.filter = "grayscale(1)";

    // cardLines.classList.add('white');
  }
});

// Botón de WhatsApp
var whatsappBtn = document.getElementById('whatsappBtn');
whatsappBtn.addEventListener('click', function() {
  var mensaje = encodeURIComponent('¡Hola! Requiero tu asesoría. ¿Podrías proporcionarme más información?');
  var url = 'https://api.whatsapp.com/send?phone=3122441022&text=' + mensaje;
  window.open(url);
});

// Botón de correo
var correoBtn = document.getElementById('correoBtn');
correoBtn.addEventListener('click', function() {
  var mensaje = encodeURIComponent('Hola, quería ponerte en contacto...');
  var asunto = encodeURIComponent('Mensaje importante');
  var url = 'mailto:mvillota.189@gmail.com?subject=' + asunto + '&body=' + mensaje;
  window.location.href = url;
});

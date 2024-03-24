const bulb = document.getElementById('bulb');
const moj = document.querySelector('.moj');

let isOn = false;

function toggleLight() {
  isOn = !isOn;
  bulb.style.backgroundColor = isOn ? '#f2f200' : '#f0f0f0';
  moj.style.backgroundColor= isOn ? '#ffffff': '#89eccc';
}

bulb.addEventListener('click', toggleLight);

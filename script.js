// Alapértékek
let angle = 90;           // indulás középállásban
const minAngle = 0;
const maxAngle = 180;

const arm = document.getElementById('servoArm');
const angleValue = document.getElementById('angleValue');

const btnA = document.getElementById('btnA');
const btnB = document.getElementById('btnB');

const stepSlider = document.getElementById('stepSlider');
const stepValue = document.getElementById('stepValue');

const centerBtn = document.getElementById('centerBtn');
const resetBtn  = document.getElementById('resetBtn');

// Segédfüggvény: szög beállítása és megjelenítése
function setAngle(newAngle){
  angle = Math.min(maxAngle, Math.max(minAngle, Math.round(newAngle)));
  // A kar alapból vízszintesen jobbra néz; tegyük úgy, hogy 90° legyen a vízszintes:
  // Forgatás:  angle - 90  (így 90° → 0°, 0° → -90°, 180° → 90°)
  arm.style.transform = `rotate(${angle - 90}deg)`;
  angleValue.textContent = `${angle}°`;
}

// Lépésköz kijelzés frissítése
function updateStepLabel(){
  stepValue.textContent = `${stepSlider.value}°`;
}

// Kezdeti állapot
updateStepLabel();
setAngle(angle);

// A gombok működése
btnA.addEventListener('click', () => {
  const step = Number(stepSlider.value);
  setAngle(angle - step); // balra
});

btnB.addEventListener('click', () => {
  const step = Number(stepSlider.value);
  setAngle(angle + step); // jobbra
});

// Extra gombok
centerBtn.addEventListener('click', () => setAngle(90));
resetBtn.addEventListener('click', () => setAngle(0));

// Lépésköz csúszka
stepSlider.addEventListener('input', updateStepLabel);

// Billentyűzet támogatás (A/B mint Edubit gombok)
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'a') btnA.click();
  if (e.key.toLowerCase() === 'b') btnB.click();
});

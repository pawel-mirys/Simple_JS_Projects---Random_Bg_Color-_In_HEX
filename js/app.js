const body = document.querySelector('body');
const btn = document.querySelector('#btn');
const hex_span = document.querySelector('#hex-value');

const values = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

const randomColorGenerator = () => {
  let hexValue = '#';
  console.log('initial hexValue - ' + hexValue);
  for (let i = 0; i < 6; i++) {
    let randomIndex = parseInt(Math.random() * values.length);
    console.log('value with random index - ' + values[randomIndex]);
    hexValue += values[randomIndex];
    console.log('final hexValue - ' + hexValue);
  }
  body.style.background = hexValue;
  hex_span.innerHTML = hexValue;
};

btn.addEventListener('click', randomColorGenerator);

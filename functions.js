let data = '';
let values = [];
let sign = '';
document.addEventListener('click', (e) => Calculator(e.target.innerText));
document.addEventListener('keydown', (e) => Calculator(e.key));

function Calculator(value) {
  switch (value) {
    case 'AC':
      data = '';
      break;

    case 'CE':
    case 'Backspace':
      data = data.slice(0, data.length - 1);
      break;

    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
    case '.':
      data += value;
      break;

    case '+':
    case '-':
    case '*':
    case '/':
      data += value;
      sign = value;
      break;

    case '=':
    case 'Enter':
      let operation;
      for (let i = 0; i < data.length; i++) {
        if ('+' || '-' || '*' || '/') {
          operation = data.split(`${sign}`);
        }
      }

      switch (sign) {
        case '+':
          data = Number(operation[0]) + Number(operation[1]);
          break;
        case '-':
          data = Number(operation[0]) - Number(operation[1]);
          break;
        case '*':
          data = Number(operation[0]) * Number(operation[1]);
          break;
        case '/':
          data = Number(operation[0]) / Number(operation[1]);
          break;

        default:
          break;
      }
      break;

    default:
      break;
  }
  //screen text
  if (data.length > 25) {
    data = '';
    document.getElementById('screen').innerText = data;
    alert('out of supported range');
  } else {
    document.getElementById('screen').innerText = data;
  }
}

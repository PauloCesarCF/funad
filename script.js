const dia = document.querySelector('.dia');
const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const secundo = document.querySelector('.secundo');

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit;

const insertDates = ({ days, hours, minutes, seconds}) => {
    dia.textContent = getTimeUnit(days);
    hora.textContent = getTimeUnit(hours);
    minuto.textContent = getTimeUnit(minutes);
    secundo.textContent = getTimeUnit(seconds);
}

const tell = () => {
    const month = 'july';
    const day = 21;
    const year = 2022;
    const hour = 14;
    const minute = 00;
    const second = 00;
    const dayCopa = new Date(`${month} ${day} ${year} ${hour}:${minute}:${second}`);

    const now = new Date();
    const diference = dayCopa - now;
    const days = Math.floor(diference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(diference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(diference / 1000 / 60) % 60
    const seconds = Math.floor(diference / 1000) % 60

    insertDates({ days, hours, minutes, seconds});
}

setTimeout(() => {
    const container = document.querySelector('.container');
    const spinner = document.querySelector('.lds-roller');
     
    spinner.style.display = 'none';
    container.style.display = 'block';
}, 1000)

setInterval(tell,1000);

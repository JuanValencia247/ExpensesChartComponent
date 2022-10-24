import data from '../data.json' assert {type:'json'};
const bars = document.querySelector('.section-chart__bars');

let values = [];

data.forEach(d =>{
    // console.log(d)
    values.push(d.amount);
    bars.innerHTML += `
    <div class="section-chart__bars-bar">
            <div class="section-chart__bars-bar-label">$${d.amount}</div>
            <div class="section-chart__bars-bar-day">${d.day}</div>
        </div>
    `
});
let maxValue = Math.max(...values);
let alturaMaxima = 175;

let bar = document.querySelectorAll('.section-chart__bars-bar');
bar = [...bar]

bar.forEach(element =>{
     let nuevoValor = parseFloat(element.childNodes[1].innerText.slice(1));
     let alturaActual = (nuevoValor * alturaMaxima) / maxValue;
    element.style.height = `${alturaActual}px`;
    if(nuevoValor == maxValue){
        element.style.backgroundColor = 'hsl(186, 43%, 60%)'
    }

    element.addEventListener('mouseover', (e) =>{
       if(e.target.className == 'section-chart__bars-bar'){
           let labelElement = e.target.childNodes[1];
           labelElement.style.display = 'block';
       }

    })
    element.addEventListener('mouseout', (e) =>{
        if(e.target.className == 'section-chart__bars-bar'){
            let labelElement = e.target.childNodes[1];
            labelElement.style.display = 'none';

        }
    })
});
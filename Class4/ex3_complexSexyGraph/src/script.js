const Chart = require('../node_modules/chart.js/dist/chart.js');
import * as data from "../data/complexdata.json";

let levels = [];
let numberofspells = [0,0,0,0,0,0,0,0,0,0]; // has to be as long as the number of levels there are :/

window.onload = function(){
    dataPrep();
    createGraph();
    console.log(levels);
    console.log(numberofspells)
}

function dataPrep(){
    data.forEach(function(spell, index){
        if (spell.level == "Cantrip"){
            spell.level = " Cantrip";
            numberofspells[0] += 1;
        }
        if (levels.includes(spell.level) == false && spell.level != undefined) {     
            levels.push(spell.level);
        }  
        if (spell.level != undefined && spell.level != " Cantrip"){
            let lvl = spell.level.charAt(0);
            numberofspells[lvl] += 1;
        }
    });
    numberofspells.reverse();
    levels.sort();
    levels.reverse(); 
}

function createGraph (){
    const ctx = document.getElementById('hypechart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: levels,
            datasets: [{
                label: '# of Votes',
                data: numberofspells,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            indexAxis: 'y',
        }
    });
}
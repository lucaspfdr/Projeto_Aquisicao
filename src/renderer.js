// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const {ipcRenderer} = require('electron');

const data_grafico_1 =
{
    type: 'line',
    data:
    {
        labels: [],
        datasets:
        [

            {
                label: 'Sinais 10',
                borderColor: 'rgba(0, 120, 200, 0.5)',
                data: []
            }
        ]
    }
};

const data_grafico_2 =
{
    type: 'line',
    data:
    {
        labels: [],
        datasets:
        [
            {
                label: 'Sinais 1',
                borderColor: 'rgba(200, 0, 200, 0.5)',
                data: []
            }
        ]
    }
};

const charts = [
    new Chart(document.getElementById('plot-1'), data_grafico_1),
    new Chart(document.getElementById('plot-2'), data_grafico_2)
]

let data = [
    {
        x:0,
        y:0,
        max: 10,
        min: -10
    },
    {
        x:0,
        y:0,
        max: 1,
        min: -1
    }
]

setInterval( ()=>
{
    for (let i=0; i< 2; i++){
        data[i].y= 2 * Math.random() * data[i].max + data[i].min;
        charts[i].data.labels.push(data[i].x++);
        charts[i].data.datasets[0].data.push(data[i].y);
        charts[i].update()
    }
}, 
500);


function exit(){
    console.log('entrei')
    ipcRenderer.send('exit')
}
var ctx = document.getElementById("chartCategorias").getContext("2d");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['Cineplanet', 'Entretenimiento', 'Salud y belleza', 'Boxes y regalos', 'Viajes y turismo', 'Otros'],
        datasets: [{
            label: 'Solicitudes',
            data: [900, 850, 800, 780, 500, 550],
            fill: true,
            borderRadius: 8,
            backgroundColor: [
                '#2F71E5',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF'
            ],
            datalabels: {
                display: false
            }
        }]

    },
    options: {
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false,
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },

    },

});

var ctx = document.getElementById("chartCanales").getContext("2d");
var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ['Plataforma', 'WhatsApp', 'Visita In-House'],
        datasets: [{
            label: 'Porcentaje',
            data: [400, 350, 250],
            fill: true,
            backgroundColor: [
                '#518AF9',
                '#76B435',
                '#FFBC3B'
            ],
            datalabels: {
                display: false
            }
        }]

    },
    options: {
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false,
            }
        },
    },


});

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
            y: {
                grid: {
                    display: false // Oculta las líneas horizontales (eje Y)
                }
            },
            x: {
                grid: {
                    display: false // Muestra las líneas verticales (eje X, por defecto)
                }
            },

            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }

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

var ctx = document.getElementById("chartCumplesMonth").getContext("2d");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [{
            label: '# de Cumpleaños',
            data: [7, 9, 8, 8, 3, 5, 4, 10, 6, 7, 7, 4, 9, 2, 0, 4, 10, 9, 11, 7, 3, 7, 9, 8, 8, 3, 5, 4, 10, 6, 1],
            fill: true,
            borderRadius: 8,
            backgroundColor: [
                '#2F71E5',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
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
            y: {
                grid: {
                    display: false // Oculta las líneas horizontales (eje Y)
                }
            },
            x: {
                grid: {
                    display: false // Muestra las líneas verticales (eje X, por defecto)
                }
            },

            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }

    },

});

var ctx = document.getElementById("chartCumplesYear").getContext("2d");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'],
        datasets: [{
            label: '# de Cumpleaños',
            data: [7, 9, 8, 8, 3, 5, 4, 10, 6, 7, 7, 4],
            fill: true,
            borderRadius: 8,
            backgroundColor: [
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#BAD5FF',
                '#2F71E5',
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
            y: {
                grid: {
                    display: false // Oculta las líneas horizontales (eje Y)
                }
            },
            x: {
                grid: {
                    display: false // Muestra las líneas verticales (eje X, por defecto)
                }
            },

            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }

    },

});

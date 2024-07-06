var ctx = document.getElementById("chartCategorias").getContext("2d");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['Cineplanet', 'Entretenimiento', 'Salud y belleza', 'Boxes y regalos', 'Viajes y turismo'],
        datasets: [{
            label: 'Sales',
                data: [1000,830,950,450,500],
                fill: true,
                borderRadius: 8,
                backgroundColor: [
                    '#0ABDA0',
                    '#59E5C8',
                    '#24D5B5',
                    '#96FAE1',
                    '#CAFEEE'
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
            ticks:{
                beginAtZero: true
            }
          }]
        },
        
        
      },
   

});

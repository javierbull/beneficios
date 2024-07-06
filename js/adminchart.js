var ctx = document.getElementById("chartCategorias").getContext("2d");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['Cineplanet', 'Entretenimiento', 'Salud y belleza', 'Boxes y regalos', 'Viajes y turismo'],
        datasets: [{
            data: [1000, 820, 900, 350, 500],
            backgroundColor: [
                'rgba(223, 251, 242, 1)',
                'rgba(238, 246, 252, 1)',
                'rgba(254, 236, 240, 1)'
            ],
            borderColor: [
                'rgba(0,150,109,1)',
                'rgba(29, 114, 170, 1)',
                'rgba(204, 15, 53, 1)'
            ],
            borderWidth: 2,
            fill: false,
        }]
        
    },
    options: {
        legend: {
            display: false
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

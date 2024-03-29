var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['col1', 'col2', 'col3'],
        datasets: [{
            label: 'num datos',
            data: [10, 9, 15]
        }]
    }
});

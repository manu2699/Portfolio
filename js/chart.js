let RadarChart = document.getElementById('RadarChart').getContext('2d');
let barchart = document.getElementById('bar').getContext('2d');
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';
var myChart = new Chart(RadarChart, {
    type: 'polarArea',
    data: {
        labels: ['HTML/CSS/JS', 'Node.js', 'React.js', 'Firebase/MongoDB', 'Photoshop/Adobe XD', 'Bootstrap/Materialize'],
        datasets: [{
            label: '% Known',
            data: [65, 50, 30, 70, 80, 75],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 2)',
                'rgba(54, 162, 235, 2)',
                'rgba(255, 206, 86, 2)',
                'rgba(75, 192, 192, 2)',
                'rgba(153, 102, 255, 2)',
                'rgba(255, 159, 64, 2)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var chart2 = new Chart(barchart, {
    type: 'horizontalBar',
    data: {
        labels: ['B.E-CSE(till 4th sem)', 'HSC', 'SSLC'],
        datasets: [{
            label: "Secured %",
            data: [85.2, 91.2, 74.751],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 2)',
                'rgba(255, 206, 86, 2)',
                'rgba(75, 192, 192, 2)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
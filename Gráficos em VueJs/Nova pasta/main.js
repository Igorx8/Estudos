    var ctx = document.getElementById('myChart2').getContext('2d');
    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Tipo A', 'Tipo B', 'Tipo C', 'Tipo D', 'Tipo E', 'Tipo F'],
            datasets: [{
                label: '# of Votes',
                data: [1, 2, 1.9, 0.5, 1.5, 1],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',  //a
                    'rgba(54, 162, 235, 1)',  //b
                    'rgba(255, 206, 86, 1)',  //c
                    'rgba(75, 192, 192, 0.2)',  //d
                    'rgba(153, 102, 255, 0.2)', //e
                    'rgba(255, 159, 64, 0.2)'   //f
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',  //a       
                    'rgba(54, 162, 235, 1)',  //b
                    'rgba(255, 206, 86, 1)',  //c
                    'rgba(75, 192, 192, 1)',  //d
                    'rgba(153, 102, 255, 1)', //e
                    'rgba(255, 159, 64, 1)'   //f
                ],  
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctx = document.getElementById('myChart3').getContext('2d');
    var myChart3 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Tipo A', 'Tipo B', 'Tipo C', 'Tipo D', 'Tipo E', 'Tipo F'],
            datasets: [{
                label: '# of Votes',
                data: [1.1, 2, 1.9, 0.5, 1.5, 1],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',  //a
                    'rgba(54, 162, 235, 1)',  //b
                    'rgba(255, 206, 86, 1)',  //c
                    'rgba(75, 192, 192, 0.2)',  //d
                    'rgba(153, 102, 255, 0.2)', //e
                    'rgba(255, 159, 64, 0.2)'   //f
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',  //a       
                    'rgba(54, 162, 235, 1)',  //b
                    'rgba(255, 206, 86, 1)',  //c
                    'rgba(75, 192, 192, 1)',  //d
                    'rgba(153, 102, 255, 1)', //e
                    'rgba(255, 159, 64, 1)'   //f
                ],  
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctx = document.getElementById('myChart4').getContext('2d');
    var myChart4 = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: [],
            datasets: [{
                label: '# of Votes',
                data: [1.1, 2, 1.9, 0.5, 1.5, 1],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',  //a
                    'rgba(54, 162, 235, 1)',  //b
                    'rgba(255, 206, 86, 1)',  //c
                    'rgba(75, 192, 192, 0.2)',  //d
                    'rgba(153, 102, 255, 0.2)', //e
                    'rgba(255, 159, 64, 0.2)'   //f
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',  //a       
                    'rgba(54, 162, 235, 1)',  //b
                    'rgba(255, 206, 86, 1)',  //c
                    'rgba(75, 192, 192, 1)',  //d
                    'rgba(153, 102, 255, 1)', //e
                    'rgba(255, 159, 64, 1)'   //f
                ],  
                borderWidth: 1
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


const dados = [
    {
        quantidade: 3,
        prioridade: 'media'
    },
    {
        quantidade: 5,
        prioridade: 'alta'
    },
    {
        quantidade: 8,
        prioridade: 'baixa'
    },
    {
        quantidade: 2,
        prioridade: 'urgente'
    },
    {
        quantidade: 1,
        prioridade: 'teste'
    },
    {
        quantidade: 3,
        prioridade: 'em desenvolvimento'
    }
]

    for (x of dados) {
        myChart4.data.labels.push(x.prioridade)
}
    
var chartData = {
   labels: ['Ticket PF', 'IBAMA', 'Teste'],
   datasets: [{
      label: "Hot Fix",
      backgroundColor: "red",
      data: [1, 1, 1]
   }, {
      label: "Alta Prioridade",
      backgroundColor: "orange",
      data: [2, 2, 2]
   }, {
      label: "Media Prioridade",
      backgroundColor: "blue",
      data: [1, 1, 3]
       },
       {
      label: "Baixa Prioridade",
      backgroundColor: "green",
      data: [1, 1, 3]
       },
   ]
};

var canvas = document.getElementById('myChart5').getContext('2d');
var myBarChart = new Chart(canvas, {
   type: "bar",
   data: chartData,
   options: {
       scales: {
         yAxes: [{
            display: true,
            ticks: {
               min: 0,
               max: 20
            }
           }],
           xAxes: [{
               display: true,
               ticks: {
                   suggestedMin: 0,
                   suggestedMax: 20,
                   stepSize: 2,
                   borderWidth: 2,
                   borderColor: 'black'
               }
           }]
      }
   }
});
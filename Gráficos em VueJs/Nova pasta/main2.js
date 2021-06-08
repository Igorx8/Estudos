var chartData = {
   labels: ['Ticket PF', 'IBAMA', 'Helisul','Mg-siga'],
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
      data: [1, 1, 4]
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
        indexAxis: 'y',
        
       scales: {
         yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0,
                suggestedMax: 20,
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
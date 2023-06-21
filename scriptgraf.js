const ctx = document.getElementById('myChart');

let botao = document.querySelector('#calcular');

botao.addEventListener('click', function(event){
    event.preventDefault()
  
    let xMin = Number(document.querySelector('#xMin').value);
    let xMax = Number(document.querySelector('#xMax').value);
    let x = xMin
    let y = []
    let labels = [];
    while(x <= xMax){
       y.push(Math.log10(x))
       labels.push(x)
       x = x + 1
    }
    
    const data = {
        labels,
        datasets: [{
            data: y,
            label: 'Função exponencial',
            backgroundColor: 'orange',
            borderColor: '#fff',
            
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true
        },
    };

    const myChart = new Chart(
        ctx,
        config
      );
    //document.querySelector('#resposta').textContent = y 

    ctx.classList.add('chart-show');
});
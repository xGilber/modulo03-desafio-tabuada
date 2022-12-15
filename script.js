const res = document.getElementById('valores')   


function multiplica(){
    var num1 = document.getElementById('firstNumber').value
    var num2 = document.getElementById('secondNumber').value

    for(i=0; i< num2 ;i++){
        let mult = Number(num1) * (Number(i)+1) 
        res.innerHTML += ` ${num1} x ${i+1} = ${mult} <br>`
    

    }
}

function limpar(){
    res.innerHTML = ''
}
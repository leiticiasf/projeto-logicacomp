
function voltar(){
    window.location.href = "index.html"
}

function func(){  
    var saldo = 1000 
    if (document.getElementById ("saldo").checked){
       document.getElementById("saida").innerHTML = saldo
    }
    else if (document.getElementById ("saque").checked){
        var saque = parseFloat(document.getElementById("saq2").value);
           if (saque <= saldo){
            saldo -= saque
            document.getElementById("saida").innerHTML = "Saldo atual R$ " + saldo + ",00."
            
           }
           else{
            alert("Erro! Você está tentando sacar mais do que possui!");
           }
        }
     else if (document.getElementById ("deposito").checked){
        var valorDepositado = parseFloat(document.getElementById("dep2").value);
        saldo+= valorDepositado    
        document.getElementById("saida").innerHTML = "Saldo atual R$ " + saldo + ",00."
        
    }
}
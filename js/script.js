$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

function CalcularRendimento(){
    var pv = document.getElementById("valor").value;
    var n =  document.getElementById("tempo").value;
    var poupanca = 0.000291;
    var selic = 0.0004166;
    var ipca = 0.24;

    var Ppoupanca = poupanca*n;
    var Pselic = selic*n;

    var fv = pv*(Math.pow(1+ Ppoupanca,n));
    var fvs = pv*(Math.pow(1+ Pselic,n));
    
    if (fv > fvs)
    {
        var compara = fv - fvs;
        document.getElementById("compara-poupanca-selic") .textContent="Essa opção rendeu R$ "+compara.toFixed(2).replace(".",",")+" a mais.";
        var comparaipca = ((ipca * n) * -1);
        document.getElementById("compara-poupanca-ipca") .textContent="Sua moeda poderá ter desvalorização de "+comparaipca.toFixed(2).replace(".",",")+"% aproximada neste período";
    }
    else
    {
        var compara = fvs - fv;
        document.getElementById("compara-selic-poupanca") .textContent="Essa opção rendeu R$ "+compara.toFixed(2).replace(".",",")+" a mais.";
        var comparaipca = ((ipca * n) * -1);
        document.getElementById("compara-selic-ipca") .textContent="Sua moeda poderá ter uma desvalorização de "+comparaipca.toFixed(2).replace(".",",")+"% aproximada neste período";
    }


    document.getElementById("rendimento-poupanca") .textContent= "R$"+ fv.toFixed(2).replace(".",",");
    document.getElementById("rendimento-selic") .textContent= "R$"+ fvs.toFixed(2).replace(".",",");
}
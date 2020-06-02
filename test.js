var ajoutGain = () => {
    var saisieClient = prompt("Qui vous as donné de l'argent:")
        if(saisieClient === null || saisieClient === ""){
            alert("Aller recommence !")
        }else{
    var div = document.createElement("div")
        div.id = "champ"
        document.getElementById("input_gain").appendChild(div)
    var label = document.createElement("label")
    var input = document.createElement("input")
        input.id = "argentAjouter"
        input.type = "number"
        div.appendChild(label)
        div.appendChild(input)
    var label_txt = document.createTextNode(saisieClient +" ")
        label.appendChild(label_txt)
}}
var ajoutDebit = () => {
    var saisieClient = prompt("Qui a débité votre argent:")
    if(saisieClient === null || saisieClient === ""){
        alert("Aller recommence !")
    }else{
    var div = document.createElement("div")
    document.getElementById("input_debit").appendChild(div)
    var label = document.createElement("label")
    var input = document.createElement("input")
        input.id ="argentRetirer"
        input.type = "number"
        div.appendChild(label)
        div.appendChild(input)
    var label_txt = document.createTextNode(saisieClient +" ")
        label.appendChild(label_txt)
}}
document.getElementById("add_gain").addEventListener("click", ajoutGain)
document.getElementById("add_debit").addEventListener("click", ajoutDebit)

var supprGain = () => {
    var champ = document.getElementById("input_gain").lastChild;
    var div = document.getElementById("div");
    champ.remove(div);
} 
var supprDebit = () => {
    var champ1 = document.getElementById("input_debit").lastChild;
    var div1 = document.getElementById("div");
    champ1.remove(div1);
} 
document.getElementById("remove_gain").addEventListener("click", supprGain)
document.getElementById("remove_debit").addEventListener("click", supprDebit)

var calculer = () => {
    var sommeGain = 0
    var formGain = document.getElementById("input_gain")
    var inputsGain = formGain.getElementsByTagName("input")
        for(var i = 0; i < inputsGain.length; i++){
            var inputGain = inputsGain[i].value;
            sommeGain += inputGain ++
        }
    var sommeDebit = 0
    var formDebit = document.getElementById("input_debit")
    var inputsDebit = formDebit.getElementsByTagName("input")
        for(var i =0; i<inputsDebit.length; i++){
            var inputDebit = inputsDebit[i].value;
            sommeDebit += inputDebit ++
        }
        var sommeReste = sommeGain-sommeDebit
document.getElementById("somme_restante").innerHTML=sommeReste
document.getElementById("somme_depenser").innerHTML=sommeDebit
}
document.getElementById("calculate").addEventListener("click", calculer)


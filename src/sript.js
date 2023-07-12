function InserirNumero(num){
    if(document.querySelector('.visor').innerHTML == "__"){
        document.querySelector('.visor').innerHTML = "";
    }else{
    const visor_res = document.querySelector('.visor').innerHTML;
    document.querySelector('.visor').innerHTML = visor_res + num;
    }
}

function DeleNumero(){
    if(document.querySelector('.visor').innerHTML == "__"){
        document.querySelector('.visor').innerHTML = "";
    }else{
        const visor_res = document.querySelector('.visor').innerHTML;
        document.querySelector('.visor').innerHTML = visor_res.substring(0, visor_res.length -1);
    }
}

function Resultado(){
    const visor_res = document.querySelector('.visor').innerHTML;
    document.querySelector('.visor').innerHTML = eval(visor_res);
}
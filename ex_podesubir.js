

//exercicio 1
function podeSubir ( altura , n_acompanhantes = 0 ){
    if ( altura >= 1.40 && altura < 2.00) {
        return true;
    }else if ( altura < 1.40 && altura >= 1.20 && n_acompanhantes >= 1) {
        return true;
    }else {
        return false;
    }
    
}

console.log (podeSubir(1.89));
console.log (podeSubir(1.35 , 1));
console.log (podeSubir(1.35 , 0));



// exercicio 2
function podeSubir2 ( altura , n_acompanhantes = 0 ) {
    if ( altura >= 1.40 && altura < 2.00) {
        return '---Acesso autorizado---';
    }else if ( altura < 1.40 && altura >= 1.20 && n_acompanhantes >= 1) {
        return '---Acesso autorizado somente com acompanhante---';
    }else {
        return '---Acesso negado---';
    } 
}

console.log (podeSubir2(1.89));
console.log (podeSubir2(1.35 , 1));
console.log (podeSubir2(1.35 , 0));



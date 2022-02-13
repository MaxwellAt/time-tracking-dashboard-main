function mostrarResultado(){
    $('.dia').css({'display':'flex'});
    $('.semana').css({'display':"none"});
    $('.mes').css({'display':'none'})
}
function mostrarResultadoSemana (){
    $('.semana').css({'display':'flex'});
    $('.dia').css({'display':'none'});
    $('.mes').css({'display':'none'})
}
function mostrarResultadoMes(){
    $('.mes').css({'display':'flex'});
    $('.dia').css({'display':'none'});
    $('.semana').css({'display':'none'})
}
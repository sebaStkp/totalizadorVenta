function descPorcentaje(pNeto){
    let result = 0;
    if(pNeto >= 10000){
        result= 0.1;
    }
    else if(pNeto >= 7000){
        result= 0.07;
    }
    else if(pNeto >= 3000){
        result= 0.05;
    }
    else if(pNeto >= 1000){
        result= 0.03;
    }
    return result;
}
export default descPorcentaje;
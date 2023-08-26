function retornarPorcentaje(estado)
{
    let result;
    switch(estado){
        case "UT":
            result= 6.65;
            break;
        case "NV":
            result = 8;
            break;
        case "TX":
            result = 6.25;
            break;
        case "AL":
            result = 4;
            break;
        case "CA":
            result = 8.25;
            break;                      
    }
    return result;
}

export default retornarPorcentaje;
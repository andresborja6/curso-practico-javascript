const lista1 = [100,200,500,400000000]

const mitadlista1 = parseInt(lista1.length / 2);
let mediana;
function par(number)
{
    if(number % 2 === 0)
    {
        return true
    }
    else
    {
        return false
    }
}

if(par(lista1.length))
{
    const elemento1 = lista1[mitadlista1]
    const elemento2 = lista1[mitadlista1 + 1]

    
}
else
{
    mediana = lista1[mitadlista1];
}
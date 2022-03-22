console.group("Suma Lista")
let lista1 = [100, 200, 300, 500];
let tot = 0;
for(var i = 0; i < lista1.length; i++)
{
   tot = tot + lista1[i]
}
console.log(tot)
console.groupEnd()

console.group("Promedio")
const promedio =  tot / lista1.length
console.log(promedio)
console.groupEnd()


function mediaaritmetica(list)
{
    console.group("Media Aritmetica")
    const sumalista = list.reduce(
        function(valorAcomulado = 0, nuevoelemento){
            return valorAcomulado + nuevoelemento
        }
    )
    const tota = sumalista / list.length
    console.log(tota)
    console.groupEnd()
}

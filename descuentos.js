function calculardatos(valor,porcentage)
{
    /*const val = document.getElementById('valor');
    const valor = val.value
    const porcentage = document.getElementById('porcentage')
    const result = document.getElementById('result')*/
    const descuento = (valor * (100 - porcentage)) / 100
    return descuento
}

function cupon()
{
    const val = document.getElementById('valor');
    const valor = val.value
    const cup = document.getElementById('cupon');
    const cupon = cup.value
    const result = document.getElementById('result')
    const coupons = [
        "JuanDC_es_Batman",
        "pero_no_le_digas_a_nadie",
        "es_un_secreto",
    ];
    let descuento;

    switch(cupon) {
        case coupons[0]: // "JuanDC_es_Batman"
        descuento = 15;
        break;
        case coupons[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
        break;
        case coupons[2]: // "es_un_secreto"
        descuento = 25;
        break;
    }
    const total = calculardatos(valor,descuento)
    result.innerHTML = "El total del producto con descuento es: $" + total
}
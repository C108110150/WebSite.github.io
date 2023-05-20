var $nt = getNT();

function xx() {
    var tb  = $nt.formData.Assets;
    
    for (let index = 0; index < tb.body.length; index++) {
        const element = tb.body[index];

console.log(element);

        var cost = element.getcost;
        console.log (cost);
        var result = cost.replace(/[,]/g, "");
        console.log (parseInt(result));
    }

}

xx();
isNaN
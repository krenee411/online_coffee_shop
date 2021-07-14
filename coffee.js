var form= form.formName

function getTotal(){
    var cupcake= Number(formName.cupcake.value) * 2.50;
    var latte= Number(FormName.latte.value) * 3;
    var cookie= Number(FormName.cookie.value) * 1.50;
    
    document.getElementById("total")= cupcake + latte + cookie;
}
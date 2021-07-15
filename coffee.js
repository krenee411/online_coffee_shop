


function Total(){
    var tot = 0;
    tot += f.cupcake.value * 2.5 +
           f.latte.value * 3 +
           f.cookie.value * 1.5;
        
    document.getElementById("cost").value = "total" + tot.toFixed(2);
  }
  
  var f = document.forms['myForm'];
  
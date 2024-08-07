dineroCoflas = prompt("cuanto dinero tienes cofla?");
dineroRoberto = prompt("cuanto dinero tienes roberto");
dineroPedro = prompt("cuanto dinero tienes pedro");
dineroCoflas = parseInt(dineroCoflas);// convertir texto a entero

if (dineroCoflas >=0.6 && dineroCoflas < 1){
    alert("coflas; comprate el helado de agua");
    alert("y tes sobran" + (dineroCoflas - 0.06));
}

else if (dineroCoflas >=1 && dineroCoflas < 1.6){
    alert("coflas; comprate el helado de crema");
    alert("y tes sobran" + (dineroCoflas - 1));
}

else if (dineroCoflas >=1.6 && dineroCoflas < 1.7){
    alert("coflas; comprate el helado de heladix");
    alert("y tes sobran" + (dineroCoflas - 1.6));
}

else if (dineroCoflas >=1.7 && dineroCoflas < 1.8){
    alert("coflas; comprate el helado de heladovich");
    alert("y tes sobran" + (dineroCoflas - 1.7));
}

else if (dineroCoflas >=1.8 && dineroCoflas < 2.9){
    alert("coflas; comprate el helado de helardo");
    alert("y tes sobran" + (dineroCoflas - 1.8));
}

else if (dineroCoflas >=2.9){
    alert("coflas; helado con confites o el pote de 1/4kg");
    alert("y tes sobran" + (dineroCoflas - 2.9));
}


else {
    alert("coflas; lo siento no te alcanza para ningun helado");
}





if (dineroRoberto >=0.6 && dineroRoberto < 1){
    alert("Roberto; comprate el helado de agua");
}

else if (dineroRoberto >=1 && dineroRoberto < 1.6){
    alert("Roberto; comprate el helado de crema");
}
else if (dineroRoberto >=1.6 && dineroRoberto < 1.7){
    alert("Roberto; comprate el helado de heladix");
}
else if (dineroRoberto >=1.7 && dineroRoberto < 1.8){
    alert("Roberto; comprate el helado de heladovich");
}
else if (dineroRoberto >=1.8 && dineroRoberto < 2.9){
    alert("Roberto; comprate el helado de helardo");
}
else if (dineroRoberto >=2.9){
    alert("Roberto; helado con confites o el pote de 1/4kg");
}

else {
    alert("Roberto; lo siento no te alcanza para ningun helado");
}




if (dineroPedro >=0.6 && dineroPedro < 1){
    alert("Pedro; comprate el helado de agua");
}

else if (dineroPedro >=1 && dineroPedro < 1.6){
    alert("Pedro; comprate el helado de crema");
}
else if (dineroPedro >=1.6 && dineroPedro < 1.7){
    alert("Pedro; comprate el helado de heladix");
}
else if (dineroPedro >=1.7 && dineroPedro < 1.8){
    alert("Pedro; comprate el helado de heladovich");
}
else if (dineroPedro >=1.8 && dineroPedro < 2.9){
    alert("Pedro; comprate el helado de helardo");
}
else if (dineroPedro >=2.9){
    alert("Pedro; helado con confites o el pote de 1/4kg");
}

else {
    alert("Pedro; lo siento no te alcanza para ningun helado");
}



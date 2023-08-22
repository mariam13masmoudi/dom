var plus=document.querySelectorAll('.plus');
var price=document.querySelectorAll('.price');
var minus=document.querySelectorAll('.minus');
var unitprice=document.querySelectorAll('.unitPrice');
var total=document.querySelectorAll('#total');
var remove=document.querySelectorAll('.delete');
var likes=document.querySelectorAll('.like');
function incrementation(e){
    var cible=e.target;
    var div = cible.parentElement
    var divP=div.querySelector('p')
  var value = Number(divP.innerHTML)
    value++
    divP.innerHTML=value
    //
    var tr=div.parentElement.parentElement
    console.log(tr)
    var td=tr.querySelector('.unitPrice')
    var pr=tr.querySelector('.price')
    console.log(td)
    pr.innerHTML=Number(td.innerHTML*value)
       som();
}
for(var i=0;i<plus.length;i++){
    plus[i].addEventListener("click",incrementation);
}

function decrementation(e){
    var cible=e.target;
    var div = cible.parentElement
    var divP=div.querySelector('p')
  var value = Number(divP.innerHTML)
  if(value>0){
    value--
    divP.innerHTML=value
  }
  //
   var tr=div.parentElement.parentElement
   var unitPrice=tr.querySelector('.unitPrice')
   var price=tr.querySelector('.price')
   price.innerHTML=Number(unitPrice.innerHTML*value)
      som();
  
}
for(var i=0;i<minus.length;i++){
    minus[i].addEventListener("click",decrementation);
}

function som(){
  
  var s=0;
  for (var i= 0; i< price.length; i++) {
      s+=Number(price[i].innerHTML);
  }
  total.innerHTML=s;
}
function removeall(e)
{
  var cible=e.target
  var tr=cible.parentElement.parentElement.parentElement.parentElement
  tr.remove();
  var price=tr.querySelector(".price");
  price.innerHTML=0;
   som();
}
for(var i=0;i<remove.length;i++){
  remove[i].addEventListener("click",removeall);
}
function changeColor(e){
  var cible=e.target;
  console.log(cible);
  if(cible.style.color=="red"){
    cible.style.color="black"
  }
  else{
    cible.style.color="red"
  }
}
for(var i=0;i<likes.length;i++){
  likes[i].addEventListener("click",changeColor);
}











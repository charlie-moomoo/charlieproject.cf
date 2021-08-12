function fadein(){
  var i,alpha,oDiv
  for(i=0;i<100;i+-2){
oDiv = document.getElementById('div1'); 
oDiv.style.filter = 'alpha(opacity:'+i+')'; 
oDiv.style.opacity = i / 100;
}

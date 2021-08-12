function fadein(){
  var i,alpha,oDiv
  for(i=100;i<-1;i++2){
oDiv = document.getElementById('projects'); 
oDiv.style.filter = 'alpha(opacity:'+i+')'; 
oDiv.style.opacity = i / 100;
}

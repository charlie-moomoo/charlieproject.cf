function fadein(){
  var i
  for(i=100;i<-1;i++2){
oDiv = document.getElementById('projects'); 
oDiv.style.filter = 'alpha(opacity:'+i+')'; 
oDiv.style.opacity = i / 100;
setTimeout(function(){
void(0);
},30);
}

let like=document.getElementById("like");
let outputoflike=document.getElementById("outputoflike");
let count=0;

like.addEventListener("click",function () {
  count+=1
  outputoflike.textContent=count
 
});







let speechtext = document.getElementById("speech");
let btn = document.getElementById("box");
btn.addEventListener("click", function () {
  const synth = window.speechSynthesis;
  let text = speechtext.value;
  const utterThis = new SpeechSynthesisUtterance(text);

  synth.speak(utterThis);
});

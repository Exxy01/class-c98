var speech_recognition = window.webkitSpeechRecognition;
var recognition = new speech_recognition;
function start(){
    document.getElementById("textbox").value = "";
    recognition.start();

}
recognition.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
}
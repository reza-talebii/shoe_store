try {
  var SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  var recognition = new SpeechRecognition();
  recognition.lang = "fa-IR";

  recognition.onstart = function () {
    console.log("start");
  };

  recognition.onspeechend = function () {
    console.log("stop");
    recognition.stop();
  };

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript.toLowerCase();

    console.log(transcript);
  };
} catch (e) {
  console.error(e);
}

export default recognition;

import gTTS from "gtts";
const TextToSpeech = (Text) => {
  let speech = Text;
  const gtts = new gTTS(speech, "en");

  gtts.save("Voice.mp3", function (err, result) {
    if (err) {
      throw new Error(err);
    }
    console.log("Text to speech converted!");
  });
};
export default TextToSpeech;

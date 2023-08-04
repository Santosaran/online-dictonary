import React from "react";
const ListDetails = ({ result }) => {
  const { word, phonetics, meanings } = result;

  function playAudio() {
    try {
      let audio = new Audio(phonetics[0].audio);
      audio.play();
    } catch (e) {
      console.log({ e });
    }
  }

  return (
    <div className="card mt-10">
      <div className="p-20">
        <h3>Word :</h3>
          <p>{word}</p>
        <h3>Part Of Speech :</h3>
          <p> {meanings[0].partOfSpeech} </p>
        <h3>Phonetics :</h3>
          <p> {phonetics[0].text} </p>
        <h3>Audio:</h3>
          <div className="pl-20">
            <p className="audio" onClick={playAudio}>
              {" "}
              play audio{" "}
            </p>
          </div>
        <h3>Meaning :</h3>
          <p>{meanings[0].definitions[0].definition}</p>
        <h3>Synonyms :</h3>
          <p>
          {meanings[0].synonyms.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </p>
        
      </div>
    </div>
  );
};

export default ListDetails;

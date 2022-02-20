import React, { Component } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import './textarea.css';

const Sharedtextarea = () => {
  function handleSubmit(event) {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    let arr = {}
    for (let [key, value] of formData.entries()) {
      arr[key] = value
    }
    console.log(arr['Text'])
    let f = new FormData()

    f.append("key", "c69d14e1894b2e000ca835ca3b785ef2");
    f.append("txt", `${arr['text']}`);
    f.append("sentences", `${arr['sentenceNumber']}`);

    const requestOptions = {
      method: 'POST',
      body: f,
      redirect: 'follow'
    };

    const response = fetch("https://api.meaningcloud.com/summarization-1.0", requestOptions)
      .then(response => ({
        status: response.status,
        body: response.json()
      }))
      .then(({ status, body }) => console.log(status, body))
      .catch(error => console.log('error', error));
  }

  return (
    <div className="main">
      <div className="container">
        <form className="textForm" onSubmit={handleSubmit}>
          <label>Enter Text To Summarize: </label><br />
          <br />

          <input id="mainbox" type="textare"
            name="Text" />
          <br />
          <label>Summarized Text: </label><br /><br />
          <input id="summarized" type="textare"
            name="answer" />
          <br />
          <label>Sentence Number: </label><br /><br />
          <input id="sentenceinput" type="number" name="sentenceNumber" min="1" />
          <br></br><br />
          <button id="text-submit" type="submit">Summarize</button>
        </form>
      </div>
    </div>
  )
}

export default Sharedtextarea
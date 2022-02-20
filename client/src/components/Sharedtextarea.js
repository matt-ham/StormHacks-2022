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
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get('http://localhost:9000/api/summorize', { withCredentials: false }, {
      text: arr['Text'],
      len: arr['sentenceNumber'],
    }).then((res) => {
      console.log(res.data['text'])
    }).catch((err) => {
      console.log(err)
      alert("Something went wrong")
    })
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Enter Text To Summarize: </label><br />
        <br />

        <textarea id="mainbox" type="textare"
          name="Text"/>
        <br />
        <label>Sentence Number: </label><br /><br />
        <input type="number" name="sentenceNumber" min="1" />
        <br></br><br />
        <button type="submit">Summarize</button>
      </form>
    </div>
  )
}

export default Sharedtextarea
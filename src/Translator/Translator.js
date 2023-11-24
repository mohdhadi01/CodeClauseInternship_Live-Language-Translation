import React from "react";
import "./Translator.css";
import logo from "../assets/logo1.png";
import cross from "../assets/cross.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import search from "../assets/search.png"

function Translator() {
  async function translate() {
    const url =
      "https://google-translate113.p.rapidapi.com/api/v1/translator/text";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "61de5f5c03msh868ae38980530d7p130d78jsn822283dfe31e",
        "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
      },
      body: new URLSearchParams({
        from: "auto",
        to: document.querySelector("select").value,
        text: document.getElementsByClassName("input1")[0].value,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const translatedText = result.trans;
      document.getElementsByClassName("input2")[0].value = translatedText;
      // console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  const clearAll = () => {
    document.getElementsByClassName("input1")[0].value = "";
    document.getElementsByClassName("input2")[0].value = "";
  };

  return (
    <div>
      <header>
        <img className="logo" src={logo} alt="" />
      </header>
      <div className="upperarea">
        <h1 className="Title">Easy Translation </h1>
        <p className="desc">Translate with ease and precision</p>
      </div>

      <div className="mainContainer">
        <div className="translatearea">
          <div className="options-line">
            <h5>Translate to</h5>
            <select className="Option" name="Languages" id="languages">
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="es">Spanish</option>
              <option value="hi">Hindi</option>
              <option value="zh">Chinese</option>
              <option value="el">Greek</option>
              <option value="gu">Gujarati</option>
              <option value="ja">Japanese</option>
              <option value="ml">Malayalam</option>
              <option value="mr">Marathi</option>
              <option value="ne">Nepali</option>
              <option value="fa">Persian</option>
              <option value="pt">Portuguese</option>
              <option value="ru">Russian</option>
              <option value="sv">Swedish</option>
              <option value="tr">Turkish</option>
              <option value="la">Latin</option>
              <option value="ko">Korean</option>
              <option value="it">Italian</option>
              <option value="id">Indonesian</option>
              <option value="am">Amharic</option>
            </select>
            <img className="search" onClick={translate} src={search} alt="" />
            <div onClick={clearAll}>
              
              <img className="cross" src={cross} alt="" />
              
            </div>
          </div>
          <textarea
            className="input1"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter Text in ( any language )"
            onChange={translate}
          ></textarea>
          <textarea
            className="input2"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Translation"
          ></textarea>
        </div>
      </div>
      <div className="credit">
        <p>© Build by Mohd Hadi</p>{" "}
        <a href="https://www.linkedin.com/in/mohd-hadi-5a4638226/">
          {" "}
          <img className="social" src={linkedin} alt="" />
        </a>
        <a href="https://github.com/mohdhadi01">
          <img className="social" src={github} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Translator;

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
let pronoun = ["our", "the"];
let adjective = ["ugly", "big", "nice"];
let noun = ["cake", "face", "person", "thing"];
let extension = [".com", ".es"];

domainList.innerHTML = ""; //vacio
let names = "";

function generateDomain() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          let domain = [pronoun[i] + adjective[j] + noun[k] + extension[l]];
          names += domain + "<br>";
        }
      }
    }
  }
  domainList.innerHTML = names;
}
window.onload = generateDomain();

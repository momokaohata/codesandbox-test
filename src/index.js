import "./styles.scss";
import $ from "jquery";

console.log("こんにちは");

async function asyncCB(event) {
  event.preventDefault();
  let url =
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
  let response = await fetch(url);

  let commits = await response.json(); // read response body and parse as JSON

  console.log(commits[0].author.login);
}

$("body").on("reinitialize", function () {
  $("a").off("click", asyncCB);
  $("a").on("click", asyncCB);
});

setTimeout(() => {
  $("body").trigger("reinitialize");
});

setTimeout(() => {
  $("body").trigger("reinitialize");
}, 2000);

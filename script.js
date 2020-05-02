let background = document.getElementById("background");
let bgBtn = document.getElementById("bg-btn");
let firstIntro = document.getElementById("first-intro");
let firstQuestion = document.getElementById("first-question");
let secondQuestion = document.getElementById("second-question");
let thirdQuestion = document.getElementById("third-question");
let fourthQuestion = document.getElementById("fourth-question");
let fifthQuestion = document.getElementById("fifth-question");
let sixthQuestion = document.getElementById("sixth-question");
let seventhQuestion = document.getElementById("seventh-question");
let eighthQuestion = document.getElementById("eighth-question");
let ninthQuestion = document.getElementById("ninth-question");
let tenthQuestion = document.getElementById("tenth-question");
let results = [];
let resultMappings = {
  "A. 開著": "你是一個任何事都願與別人分享的人",
  "B. 關著": "你是一個任何事都願一個人去做的人",
  "A. 方形":
    "你在交朋友的時候有點挑剔，你只是和那些你認為比較熟悉的朋友有一些來往",
  "B. 圓形": "總有一些朋友陪伴著你，你完全地信任並接受他們",
  "C. 三角形":
    "在對待朋友的問題上，你是一個真正的非常吹毛求疵的人，所以你的生活裡沒有許多朋友",
  "A. 陶瓷花瓶": "在生活裡你是一個脆弱而需要得到照顧的人",
  "B. 金屬花瓶": "你在生活裡是一個強者",
  "A. 空的": "你目前的生活很不滿意",
  "B. 一半": "你的生活只有一半達到你的理想",
  "C. 滿的": "你對目前的生活非常滿意",
  "A. 1把": "生活中你只有一個好朋友",
  "B. 3把": "生活中你有一些好朋友",
  "C. 5把": "生活中你有許多好朋友",
  "A. 木頭箱子": "謙虛的性格",
  "B. 金屬箱子": "謙虛的性格",
  "A. 藤條橋": "周圍沒有很好的朋友",
  "B. 木頭橋": "和朋友有比較緊密的聯繫",
  "C. 金屬橋": "和朋友有非常緊密的聯繫",
  "A. 白色": "你的伴侶在你心目中非常純潔而美好",
  "B. 棕色": "你的伴侶在你心目中非常純潔而美好",
  "C. 黑色": "你的伴侶在你心目中好像根本不怎麽樣，甚至還很壞",
  "A. 安靜地站著": "你的伴侶是一個顧家的，謙虛的人",
  "B. 在附近奔跑": "你的伴侶是一個非常狂野的人",
  "A. 跑過去藏在箱子裡面": "箱子 = 你自己 你無論何時遇到麻煩你都會自己解決",
  "B. 跑過去藏在橋下面":
    "橋 = 你的朋友 無論何時你遇到麻煩你都有將去找你的朋友一起解決",
  "C. 跑過去騎上馬走":
    "馬 = 你的伴侶 你尋找的伴侶是你無論何時遇到麻煩都要和他/她一起去面對"
};
let finalAnswer = document.getElementById("Answers");

let firstQuestionOptionOne = document.getElementById("first-option-one");
let firstQuestionOptionTwo = document.getElementById("first-option-two");
let houseImage = document.getElementById("house-img");

bgBtn.onclick = function () {
  console.log("here");
  firstIntro.style.opacity = 0;
  firstQuestion.style.opacity = 1;
  firstQuestion.style.display = "flex";
  bgBtn.style.pointerEvents = "none";
};

firstQuestionOptionOne.onmouseover = function () {
  console.log("First Hovered");
  houseImage.src = "https://i.imgur.com/yCfbwni.png";
};

firstQuestionOptionOne.onclick = function (e) {
  console.log("First clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  // background.style.backgroundImage = "url('')" /*小屋背景的連結*/
};

firstQuestionOptionTwo.onmouseover = function () {
  console.log("Second Hovered");
  houseImage.src = "https://i.imgur.com/vSPa7a9.png";
};

firstQuestionOptionTwo.onclick = function (e) {
  console.log("Second clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 1;
  secondQuestion.style.display = "flex";
};

let secondQuestionOptionOne = document.getElementById("second-option-one");
let secondQuestionOptionTwo = document.getElementById("second-option-two");
let secondQuestionOptionThree = document.getElementById("second-option-three");
let tableImage = document.getElementById("table-img");
let prevTableImage = document.getElementById("prev-table-img");

secondQuestionOptionOne.onmouseover = function () {
  console.log("First Hovered");
  tableImage.src = "https://i.imgur.com/mA6an2p.jpg";
};

secondQuestionOptionOne.onclick = function (e) {
  console.log("First clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 1;
  thirdQuestion.style.display = "flex";

  prevTableImage.src = "https://i.imgur.com/mA6an2p.jpg";

  console.log(results);
};

secondQuestionOptionTwo.onmouseover = function () {
  console.log("Second Hovered");
  tableImage.src = "https://i.imgur.com/Ekf967P.jpg";
};

secondQuestionOptionTwo.onclick = function (e) {
  console.log("Second clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 1;
  thirdQuestion.style.display = "flex";

  prevTableImage.src = "https://i.imgur.com/Ekf967P.jpg";

  console.log(results);
};

secondQuestionOptionThree.onmouseover = function () {
  console.log("Third Hovered");
  tableImage.src = "https://i.imgur.com/mgSJQv9.png";
};

secondQuestionOptionThree.onclick = function (e) {
  console.log("Third clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 1;
  thirdQuestion.style.display = "flex";

  prevTableImage.src = "https://i.imgur.com/mgSJQv9.png";

  console.log(results);
};

let thirdQuestionOptionOne = document.getElementById("third-option-one");
let thirdQuestionOptionTwo = document.getElementById("third-option-two");
let vaseImage = document.getElementById("vase-img");

thirdQuestionOptionOne.onmouseover = function () {
  console.log("First Hovered");
  vaseImage.src = "https://i.imgur.com/8GOKsV1.jpg";
};

thirdQuestionOptionOne.onclick = function (e) {
  console.log("First clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 1;
  fourthQuestion.style.display = "flex";
};

thirdQuestionOptionTwo.onmouseover = function () {
  console.log("Second Hovered");
  vaseImage.src = "https://i.imgur.com/AfQXYwD.jpg";
};

thirdQuestionOptionTwo.onclick = function (e) {
  console.log("Second clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 1;
  fourthQuestion.style.display = "flex";
};

let fourthQuestionOptionOne = document.getElementById("fourth-option-one");
let fourthQuestionOptionTwo = document.getElementById("fourth-option-two");
let fourthQuestionOptionThree = document.getElementById("fourth-option-three");
let waterImage = document.getElementById("water-img");

fourthQuestionOptionOne.onmouseover = function () {
  console.log("First Hovered");
  waterImage.src = "";
};

fourthQuestionOptionOne.onclick = function (e) {
  console.log("First clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";
  background.style.opacity = 1;

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 1;
  fifthQuestion.style.display = "flex";
};

fourthQuestionOptionTwo.onmouseover = function () {
  console.log("Second Hovered");
  waterImage.src = "";
};

fourthQuestionOptionTwo.onclick = function (e) {
  console.log("Second clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";
  background.style.opacity = 1;

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 1;
  fifthQuestion.style.display = "flex";
};

fourthQuestionOptionThree.onmouseover = function () {
  console.log("Third Hovered");
  waterImage.src = "";
};

fourthQuestionOptionThree.onclick = function (e) {
  console.log("Third clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";
  background.style.opacity = 1;

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 1;
  fifthQuestion.style.display = "flex";
};

let fifthQuestionOptionOne = document.getElementById("fifth-option-one");
let fifthQuestionOptionTwo = document.getElementById("fifth-option-two");
let fifthQuestionOptionThree = document.getElementById("fifth-option-three");
let keyImage = document.getElementById("key-img");

fifthQuestionOptionOne.onmouseover = function () {
  console.log("First Hovered");
  keyImage.src = "https://i.imgur.com/fDd13Zt.png";
};

fifthQuestionOptionOne.onclick = function (e) {
  console.log("First clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 0;
  fifthQuestion.style.display = "none";

  sixthQuestion.style.opacity = 1;
  sixthQuestion.style.display = "flex";
};

fifthQuestionOptionTwo.onmouseover = function () {
  console.log("Second Hovered");
  keyImage.src = "https://i.imgur.com/gFTOX8F.jpg?1";
};

fifthQuestionOptionTwo.onclick = function (e) {
  console.log("Second clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 0;
  fifthQuestion.style.display = "none";

  sixthQuestion.style.opacity = 1;
  sixthQuestion.style.display = "flex";
};

fifthQuestionOptionThree.onmouseover = function () {
  console.log("Third Hovered");
  keyImage.src = "https://i.imgur.com/vTqVYRZ.jpg";
};

fifthQuestionOptionThree.onclick = function (e) {
  console.log("Third clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 0;
  fifthQuestion.style.display = "none";

  sixthQuestion.style.opacity = 1;
  sixthQuestion.style.display = "flex";
};

let sixthQuestionOptionOne = document.getElementById("sixth-option-one");
let sixthQuestionOptionTwo = document.getElementById("sixth-option-two");
let boxImage = document.getElementById("box-img");

sixthQuestionOptionOne.onmouseover = function () {
  console.log("First Hovered");
  boxImage.src = "https://i.imgur.com/dSI9fvk.png";
};

sixthQuestionOptionOne.onclick = function (e) {
  console.log("First clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 0;
  fifthQuestion.style.display = "none";

  sixthQuestion.style.opacity = 0;
  sixthQuestion.style.display = "none";

  seventhQuestion.style.opacity = 1;
  seventhQuestion.style.display = "flex";
};

sixthQuestionOptionTwo.onmouseover = function () {
  console.log("Second Hovered");
  boxImage.src = "https://i.imgur.com/NQVhzMR.png";
};

sixthQuestionOptionTwo.onclick = function (e) {
  console.log("Second clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 0;
  fifthQuestion.style.display = "none";

  sixthQuestion.style.opacity = 0;
  sixthQuestion.style.display = "none";

  seventhQuestion.style.opacity = 1;
  seventhQuestion.style.display = "flex";
};

let seventhQuestionOptionOne = document.getElementById("seventh-option-one");
let seventhQuestionOptionTwo = document.getElementById("seventh-option-two");
let seventhQuestionOptionThree = document.getElementById(
  "seventh-option-three"
);
let bridgeImage = document.getElementById("bridge-img");

seventhQuestionOptionOne.onmouseover = function () {
  console.log("First Hovered");
  bridgeImage.src = "https://i.imgur.com/EUMGC4B.png";
};

seventhQuestionOptionOne.onclick = function (e) {
  console.log("First clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 0;
  fifthQuestion.style.display = "none";

  sixthQuestion.style.opacity = 0;
  sixthQuestion.style.display = "none";

  seventhQuestion.style.opacity = 0;
  seventhQuestion.style.display = "none";

  eighthQuestion.style.opacity = 1;
  eighthQuestion.style.display = "flex";
};

seventhQuestionOptionTwo.onmouseover = function () {
  console.log("Second Hovered");
  bridgeImage.src = "https://i.imgur.com/84lErhO.png";
};

seventhQuestionOptionTwo.onclick = function (e) {
  console.log("Second clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 0;
  fifthQuestion.style.display = "none";

  sixthQuestion.style.opacity = 0;
  sixthQuestion.style.display = "none";

  seventhQuestion.style.opacity = 0;
  seventhQuestion.style.display = "none";

  eighthQuestion.style.opacity = 1;
  eighthQuestion.style.display = "flex";
};

seventhQuestionOptionThree.onmouseover = function () {
  console.log("Third Hovered");
  bridgeImage.src = "https://i.imgur.com/FdU1hXl.png";
};

seventhQuestionOptionThree.onclick = function (e) {
  console.log("Third clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 0;
  fifthQuestion.style.display = "none";

  sixthQuestion.style.opacity = 0;
  sixthQuestion.style.display = "none";

  seventhQuestion.style.opacity = 0;
  seventhQuestion.style.display = "none";

  eighthQuestion.style.opacity = 1;
  eighthQuestion.style.display = "flex";
};

let eighthQuestionOptionOne = document.getElementById("eighth-option-one");
let eighthQuestionOptionTwo = document.getElementById("eighth-option-two");
let eighthQuestionOptionThree = document.getElementById("eighth-option-three");
let horseImage = document.getElementById("horse-img");

eighthQuestionOptionOne.onmouseover = function () {
  console.log("First Hovered");
  horseImage.src = "https://i.imgur.com/XBcidnL.jpg";
};

eighthQuestionOptionOne.onclick = function (e) {
  console.log("First clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 0;
  fifthQuestion.style.display = "none";

  sixthQuestion.style.opacity = 0;
  sixthQuestion.style.display = "none";

  seventhQuestion.style.opacity = 0;
  seventhQuestion.style.display = "none";

  eighthQuestion.style.opacity = 0;
  eighthQuestion.style.display = "none";

  ninthQuestion.style.opacity = 1;
  ninthQuestion.style.display = "flex";
};

eighthQuestionOptionTwo.onmouseover = function () {
  console.log("Second Hovered");
  horseImage.src = "https://i.imgur.com/arut9PB.jpg";
};

eighthQuestionOptionTwo.onclick = function (e) {
  console.log("Second clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 0;
  fifthQuestion.style.display = "none";

  sixthQuestion.style.opacity = 0;
  sixthQuestion.style.display = "none";

  seventhQuestion.style.opacity = 0;
  seventhQuestion.style.display = "none";

  eighthQuestion.style.opacity = 0;
  eighthQuestion.style.display = "none";

  ninthQuestion.style.opacity = 1;
  ninthQuestion.style.display = "flex";
};

eighthQuestionOptionThree.onmouseover = function () {
  console.log("Third Hovered");
  horseImage.src = "https://i.imgur.com/CpCSeHU.jpg";
};

eighthQuestionOptionThree.onclick = function (e) {
  console.log("Third clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 0;
  fifthQuestion.style.display = "none";

  sixthQuestion.style.opacity = 0;
  sixthQuestion.style.display = "none";

  seventhQuestion.style.opacity = 0;
  seventhQuestion.style.display = "none";

  eighthQuestion.style.opacity = 0;
  eighthQuestion.style.display = "none";

  ninthQuestion.style.opacity = 1;
  ninthQuestion.style.display = "flex";
};

let ninthQuestionOptionOne = document.getElementById("ninth-option-one");
let ninthQuestionOptionTwo = document.getElementById("ninth-option-two");
let doingImage = document.getElementById("doing-img");

ninthQuestionOptionOne.onmouseover = function () {
  console.log("First Hovered");
  doingImage.style.width="400px";
  
  if (results[results.length-1].includes("白色")) {
    doingImage.src = "https://i.imgur.com/XBcidnL.jpg";

  } 
  else if (results[results.length-1].includes("棕色")) {
    doingImage.src = "https://i.imgur.com/arut9PB.jpg";
  } 
  else if (results[results.length-1].includes("黑色")) {
    doingImage.src = "https://i.imgur.com/CpCSeHU.jpg";
  }
};

ninthQuestionOptionOne.onclick = function (e) {
  console.log("First clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 0;
  fifthQuestion.style.display = "none";

  sixthQuestion.style.opacity = 0;
  sixthQuestion.style.display = "none";

  seventhQuestion.style.opacity = 0;
  seventhQuestion.style.display = "none";

  eighthQuestion.style.opacity = 0;
  eighthQuestion.style.display = "none";

  ninthQuestion.style.opacity = 0;
  ninthQuestion.style.display = "none";

  tenthQuestion.style.opacity = 1;
  tenthQuestion.style.display = "flex";
};

ninthQuestionOptionTwo.onmouseover = function () {
  console.log("Second Hovered");
   doingImage.style.width="520px";
    if (results[results.length-1].includes("白色")) {
    doingImage.src = "https://i.imgur.com/b2XNwrY.jpg";
     
  } 
  else if (results[results.length-1].includes("棕色")) {
    doingImage.src = "https://i.imgur.com/elWOSRt.jpg";
    } 
  else if (results[results.length-1].includes("黑色")) {
    doingImage.src = "https://i.imgur.com/aemU95p.jpg";
  }
};

ninthQuestionOptionTwo.onclick = function (e) {
  console.log("Second clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 0;
  fifthQuestion.style.display = "none";

  sixthQuestion.style.opacity = 0;
  sixthQuestion.style.display = "none";

  seventhQuestion.style.opacity = 0;
  seventhQuestion.style.display = "none";

  eighthQuestion.style.opacity = 0;
  eighthQuestion.style.display = "none";

  ninthQuestion.style.opacity = 0;
  ninthQuestion.style.display = "none";

  tenthQuestion.style.opacity = 1;
  tenthQuestion.style.display = "flex";
};

let tenthQuestionOptionOne = document.getElementById("tenth-option-one");
let tenthQuestionOptionTwo = document.getElementById("tenth-option-two");
let tenthQuestionOptionThree = document.getElementById("tenth-option-three");
let hidingImage = document.getElementById("hiding-img");

tenthQuestionOptionOne.onmouseover = function () {
  console.log("First Hovered");
  hidingImage.src = "";
};

tenthQuestionOptionOne.onclick = function (e) {
  console.log("First clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 0;
  fifthQuestion.style.display = "none";

  sixthQuestion.style.opacity = 0;
  sixthQuestion.style.display = "none";

  seventhQuestion.style.opacity = 0;
  seventhQuestion.style.display = "none";

  eighthQuestion.style.opacity = 0;
  eighthQuestion.style.display = "none";

  ninthQuestion.style.opacity = 0;
  ninthQuestion.style.display = "none";

  tenthQuestion.style.opacity = 0;
  tenthQuestion.style.display = "none";

  results.forEach(function (val, index) {
    finalAnswer.innerHTML +=
      "題目" +
      (index + 1) +
      " " +
      val +
      "<br/>" +
      resultMappings[val] +
      "<br/><br/>";
  });
};

tenthQuestionOptionTwo.onmouseover = function () {
  console.log("Second Hovered");
  hidingImage.src = "";
};

tenthQuestionOptionTwo.onclick = function (e) {
  console.log("Second clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 0;
  fifthQuestion.style.display = "none";

  sixthQuestion.style.opacity = 0;
  sixthQuestion.style.display = "none";

  seventhQuestion.style.opacity = 0;
  seventhQuestion.style.display = "none";

  eighthQuestion.style.opacity = 0;
  eighthQuestion.style.display = "none";

  ninthQuestion.style.opacity = 0;
  ninthQuestion.style.display = "none";

  tenthQuestion.style.opacity = 0;
  tenthQuestion.style.display = "none";

  results.forEach(function (val, index) {
    finalAnswer.innerHTML +=
      "題目" +
      (index + 1) +
      " " +
      val +
      "<br/>" +
      resultMappings[val] +
      "<br/><br/>";
  });
};

tenthQuestionOptionThree.onmouseover = function () {
  console.log("Third Hovered");
  hidingImage.src = "";
};

tenthQuestionOptionThree.onclick = function (e) {
  console.log("Third clicked");
  results.push(e.target.innerHTML);
  firstQuestion.style.opacity = 0;
  firstQuestion.style.display = "none";

  secondQuestion.style.opacity = 0;
  secondQuestion.style.display = "none";

  thirdQuestion.style.opacity = 0;
  thirdQuestion.style.display = "none";

  fourthQuestion.style.opacity = 0;
  fourthQuestion.style.display = "none";

  fifthQuestion.style.opacity = 0;
  fifthQuestion.style.display = "none";

  sixthQuestion.style.opacity = 0;
  sixthQuestion.style.display = "none";

  seventhQuestion.style.opacity = 0;
  seventhQuestion.style.display = "none";

  eighthQuestion.style.opacity = 0;
  eighthQuestion.style.display = "none";

  ninthQuestion.style.opacity = 0;
  ninthQuestion.style.display = "none";

  tenthQuestion.style.opacity = 0;
  tenthQuestion.style.display = "none";

  results.forEach(function (val, index) {
    finalAnswer.innerHTML +=
      "題目" +
      (index + 1) +
      " " +
      val +
      "<br/>" +
      resultMappings[val] +
      "<br/><br/>";
  });
};
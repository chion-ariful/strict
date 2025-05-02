
// const words = ["your work like a pro. "]; // Word that will be animated
//     let i = 0;
//     let counter;
//     function typeNow() {
//       let word = words[i].split("");
//       var loopTyping = function () {
//         if (word.length > 0) {
//           document.getElementById('typed-text').innerHTML += word.shift(); // inside here id name we wrote at P
//         } else {
//           deleteNow();
//           return false;
//         };
//         counter = setTimeout(loopTyping, 200); // timing of animation one by one word come
//       };
//       loopTyping();
//     };
//     function deleteNow() {
//       let word = words[i].split("");
//       var loopDeleting = function () {
//         if (word.length > 0) {
//           word.pop();
//           document.getElementById('typed-text').innerHTML = word.join("");
//         } else {
//           if (words.length > (i + 1)) {
//             i++;
//           } else {
//             i = 0;
//           };
//           typeNow();
//           return false;
//         };
//         counter = setTimeout(loopDeleting, 200); // timing of animation one by one word delete
//       };
//       loopDeleting();
//     };
//     typeNow();


const txtFull = "your work like a pro. "; //the text goes here
const txtArr = txtFull.split("");

function getRandomTime() {
  return Math.random() * 0.5;
}
function getEle(id) {
  return document.getElementById("typed-text");
}
function ModifyTxt(el, txt) {
  return (el.innerHTML = txt);
}
function writeOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime();
  setTimeout(
    () => {
      const el = getEle("typed-text");
      let elTxt = el.innerHTML;
      elTxt += txtArr[curChar];
      ModifyTxt(el, elTxt);
      //check if next iteration is out of range
      if (curChar + 1 == txtArr.length) {
        return deleteOut(txtArr, txtArr.length);
      }
      return writeOut(txtArr, curChar + 1);
    },

    randomTime * 300
  );
}
function deleteOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime();
  setTimeout(
    () => {
      const el = getEle("text");
      let elTxt = el.innerHTML;
      //remove
      const elTxtArr = elTxt.split("");
      const elTxtArrLen = elTxtArr.length;
      console.log(elTxtArr.length - 1);
      const newElTxt = elTxtArr.splice(0, curChar - 1).join("");
      ModifyTxt(el, newElTxt);
      if (elTxtArrLen == 0) {
        return writeOut(txtArr, 0);
      }
      return deleteOut(txtArr, elTxtArrLen - 1);
    },

    randomTime * 300
  );
  return;
}
writeOut(txtArr);

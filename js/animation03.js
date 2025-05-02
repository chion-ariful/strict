
// const words = ["with us "]; // Word that will be animated
//     let i = 0;
//     let counter;
//     function typeNow() {
//       let word = words[i].split("");
//       var loopTyping = function () {
//         if (word.length > 0) {
//           document.getElementById('type01').innerHTML += word.shift(); // inside here id name we wrote at P
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
//           document.getElementById('type01').innerHTML = word.join("");
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













var _CONTENT = ["with us "];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#type01");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 200);
		}, 400);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 200);
		}, 400);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);
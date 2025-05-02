const words = ["& pure design"]; // Word that will be animated
    let i = 0;
    let counter;
    function typeNow() {
      let word = words[i].split("");
      var loopTyping = function () {
        if (word.length > 0) {
          document.getElementById('text').innerHTML += word.shift(); // inside here id name we wrote at P
        } else {
          deleteNow();
          return false;
        };
        counter = setTimeout(loopTyping, 200); // timing of animation one by one word come
      };
      loopTyping();
    };
    function deleteNow() {
      let word = words[i].split("");
      var loopDeleting = function () {
        if (word.length > 0) {
          word.pop();
          document.getElementById('text').innerHTML = word.join("");
        } else {
          if (words.length > (i + 1)) {
            i++;
          } else {
            i = 0;
          };
          typeNow();
          return false;
        };
        counter = setTimeout(loopDeleting, 200); // timing of animation one by one word delete
      };
      loopDeleting();
    };
    typeNow();



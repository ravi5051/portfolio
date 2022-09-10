const text = document.querySelector(".changing-text");
        let arr = ["Programmer", "Developer", "Quick Learner","Self Learner"];
        let textIndex = 0;
        let charIndex = 0;
        function type() {
          if (charIndex < arr[textIndex].length) {
            text.textContent += arr[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
          } else {
            text.textContent+='.'
            setTimeout(erase, 200);
          }
        }
        function erase() {
          if (charIndex > 0) {
            text.textContent = arr[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
          } else {
            textIndex++;
            if (textIndex >= arr.length) {
              textIndex = 0;
            }
            setTimeout(type, 200);
          }
        }
        document.addEventListener("DOMContentLoaded", function () {
          setTimeout(type, 10);
        });

// used to prevent scroll on realoading the page
      //   $(window).on('beforeunload', function() {
      //     $(window).scrollTop(0);
      // });
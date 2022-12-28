const root = document.querySelector(".root");

setTimeout(function () {
  root.innerText = "10";
  setTimeout(function () {
    root.innerText = "9";
    setTimeout(function () {
      root.innerText = "8";
      setTimeout(function () {
        root.innerText = "7";
        setTimeout(function () {
          root.innerText = "6";
          setTimeout(function () {
            root.innerText = "5";
            setTimeout(function () {
              root.innerText = "4";
              setTimeout(function () {
                root.innerText = "3";
                setTimeout(function () {
                  root.innerText = "2";
                  setTimeout(function () {
                    root.innerText = "1";
                    setTimeout(function () {
                      root.innerText = "🎆 Happy Independence Day 🎆";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

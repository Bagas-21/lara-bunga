window.onload = () => {
    document.body.classList.add("container");
  
    const startButton = document.getElementById("start-button");
    if (startButton) {
      startButton.addEventListener("click", () => {
        document.getElementById("intro-screen").style.display = "none";
        document.getElementById("flower-screen").style.display = "block";
        document.body.classList.remove("container");
      });
    }
  };
  const music = document.getElementById("bg-music");

document.getElementById("start-button").onclick = function () {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("flower-screen").style.display = "block";

    // play musik setelah klik
    music.play();
};

  
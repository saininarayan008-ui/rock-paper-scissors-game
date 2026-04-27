const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const botResult = document.querySelector(".bot_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

const botImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    userResult.src = botImages[index];
    userResult.alt = "User choice";
    gameContainer.classList.add("start");
    result.textContent = "Wait...";
    botResult.src = "images/rock.png";
    botResult.alt = "Bot choice";
    setTimeout(() => {
      gameContainer.classList.remove("start");
      image.classList.remove("active");
      let randomIndex = Math.floor(Math.random() * 3);
      botResult.src = botImages[randomIndex];
      botResult.alt = "Bot choice";
      let userValue = ["R", "P", "S"][index];
      let botValue = ["R", "P", "S"][randomIndex];
      let outcomes = {
        RR: "Match Draw!", RP: "Bot Won!", RS: "You Won!",
        PP: "Match Draw!", PR: "You Won!", PS: "Bot Won!",
        SS: "Match Draw!", SR: "Bot Won!", SP: "You Won!"
      };
      result.textContent = outcomes[userValue + botValue];
    }, 2000);
  });
});

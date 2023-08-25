const btnEl = document.getElementById("btn");
const apiURL =
  "https://emoji-api.com/emojis?access_key=dd42d34e907afc8cdbb8ac419fb1ce6939fc537f";
const emojiNameEl = document.getElementById("emoji-name");
const emoji = [];

async function getEmoji() {
  let response = await fetch(apiURL);
  data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();
console.log(emoji);

btnEl.addEventListener("click", () => {
  try {
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
  } catch (error) {}
});

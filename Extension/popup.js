let emojiList = document.getElementById('list');
document.getElementById('searchbar').focus();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const copy = (className) => {
  const emojiName = className.split(' ')[1];
  const emoji = gitmojis.find((emoji) => emoji.name === emojiName).emoji;
  navigator.clipboard
    .writeText(emoji)
    .then(async() => {
      document.getElementById('image').src = './verifica.svg';
      await sleep(1000);
      document.getElementById('image').src = './popup-icon.png';
    })
    .catch((error) => {
      console.error(error);
    });
};

gitmojis.forEach((gitmoji) => {
  let item = document.createElement('li');
  item.id = gitmoji.name;
  item.className = 'list-item ' + gitmoji.name;
  item.setAttribute('style', `--item-color:${gitmoji.color}`);
  item.addEventListener('click', (click) => copy(click.target.className));

  let emoji = document.createElement('div');
  emoji.className = 'item-emoji ' + gitmoji.name;
  emoji.innerText = gitmoji.emoji;
  item.appendChild(emoji);

  let textWrap = document.createElement('div');
  textWrap.className = 'item-text-wrap ' + gitmoji.name;
  item.appendChild(textWrap);

  let code = document.createElement('div');
  code.className = 'item-code ' + gitmoji.name;
  code.innerText = gitmoji.code;
  textWrap.appendChild(code);

  let description = document.createElement('div');
  description.className = 'item-description ' + gitmoji.name;
  description.innerText = gitmoji.description;
  textWrap.appendChild(description);

  emojiList.appendChild(item);
});

const search = () => {
  const input = document.getElementById('searchbar').value.toLowerCase();
  const emojis = [...document.getElementsByClassName('list-item')];
  emojis.forEach((emoji) => {
    const description = emoji.children[1].children[1].innerText.toLowerCase();
    console.log('description', description);
    if (!emoji.id.includes(input) && !description.includes(input.toLowerCase())) {
      emoji.style.display = 'none';
    } else {
      emoji.style.display = 'flex';
    }
  });
};

document.getElementById('searchbar').addEventListener('keyup', search);

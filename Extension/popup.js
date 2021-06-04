let content = document.getElementById('list');

const copy = (className) => {
  const emojiName = className.split(' ')[1];
  const emoji = gitmojis.find(emoji => emoji.name === emojiName).emoji;
  navigator.clipboard.writeText(emoji)
  .then(() => {
    console.log('Copied!');
  })
  .catch((error) => {
    alert(error);
  });
};

gitmojis.forEach((gitmoji) => {
  let item = document.createElement('div');
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

  content.appendChild(item);
});

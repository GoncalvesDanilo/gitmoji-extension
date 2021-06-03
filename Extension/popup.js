let content = document.getElementById('list');

gitmojis.forEach((gitmoji) => {
  let item = document.createElement('div');
  item.className = 'list-item';
  item.setAttribute('style', `--item-color:${gitmoji.color}`)
  
  let emoji = document.createElement('div');
  emoji.className = 'item-emoji';
  emoji.innerText = gitmoji.emoji;
  item.contentEditable = true;
  item.appendChild(emoji);

  let textWrap = document.createElement('div');
  textWrap.className = 'item-text-wrap';
  item.appendChild(textWrap);

  let code = document.createElement('div');
  code.className = 'item-code';
  code.innerText = gitmoji.code;
  textWrap.appendChild(code);

  let description = document.createElement('div');
  description.className = 'item-description';
  description.innerText = gitmoji.description;
  textWrap.appendChild(description);

  content.appendChild(item);
});

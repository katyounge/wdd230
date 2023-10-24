const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];




button.addEventListener('click', function(){if (input.value != '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
}
});





function displayList(item){
  let li = document.createElement('li');
  const deleteButton = document.createElement('button');
  const highlightButton = document.createElement('button');
  li.textContent = input.value;
  deleteButton.textContent = '❎';
  deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
  highlightButton.textContent = '❤️';
  li.append(highlightButton);
  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener('click', function(){
      list.removeChild(li);
      deleteChapter(li.textContent);
      input.focus();

      highlightButton.addEventListener('click', function(){
        li.classList.toggle('highlight');
      });
  
      
});
};

chaptersArray.forEach(chapter => {
  displayList(chapter);
});
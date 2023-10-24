const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});



button.addEventListener('click', function(){if (input.value != '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
}

    });


 function displayList(item) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  const highlightButton = document.createElement('button');
  li.textContent = item;
  deleteButton.textContent = '❎';
  deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
  highlightButton.textContent = '❤️';
  li.append(highlightButton);
  li.append(deleteButton);
  list.append(li);

  highlightButton.addEventListener('click', function(){
    li.classList.toggle('highlight');
  });

  deleteButton.addEventListener('click', function(){
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();

 });

};
  
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}  

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item != chapter);
  setChapterList();
}
  

  
  
  
  

  
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



button.addEventListener('click', function(){if (input.value != '') {
    const li = document.createElement('li');
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
        input.focus();

    });

    highlightButton.addEventListener('click', function(){
      li.classList.toggle('highlight');
    });



    input.focus();
    input.textContent = '';



  } 
  else {
    document.getElementById('#favchap').focus();
  }});



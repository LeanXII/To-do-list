
let list = document.querySelector("ol")




let btn = document.querySelector('button')






let userInput = document.querySelector('input').value


localStorage.getItem('listItem')
let saveButton = document.getElementById('save-button')


function removeItem () {
  const parentElement = this.parentNode
  parentElement.remove()
  console.log('The delete button is working')

}




function addItem() {
    userInput = document.querySelector('input').value
    let newElement = document.createElement('li');
    list.appendChild(newElement)
    newElement.innerHTML = userInput




    let completeButton = document.createElement('button')
    newElement.appendChild(completeButton)
    completeButton.innerHTML = 'completed'
    completeButton.classList.add('completeButton')
    completeButton.addEventListener('click', addStrikethrough)

    let newRadioButton = document.createElement('button')
    newElement.appendChild(newRadioButton)
    newRadioButton.innerHTML = 'delete'
    newRadioButton.classList.add('deleteButton')
    newRadioButton.addEventListener('click', removeItem)

    localStorage.setItem('newElement', 'li');

    function addStrikethrough () {
        newElement.classList.add('strikethrough')
    }

    function removeItem () {
        localStorage.removeItem('newElement')
        list.removeChild(newElement);
        console.log('The delete button is working')

    }
    // function save() {
    //     const fieldvalue = document.querySelectorAll('li').value;
    //     localStorage.setItem('item', JSON.stringify(newElement.value));
    //   }

    //   function load() {


    //     const storedvalue = JSON.parse(localStorage.getItem(newElement.value));


    //     if (storedvalue) {
    //       document.querySelectorAll('li').value = storedvalue;
    //     }
    //   }

}

function saveList (){
  localStorage.setItem('currentList', list.innerHTML)
  console.log(localStorage['currentList'])
  console.log(Object.keys(localStorage))
}

if(typeof localStorage !== undefined){
  list.innerHTML = localStorage.getItem('currentList')
}

let oldRadioButton = document.querySelectorAll('.deleteButton')
console.log(oldRadioButton)

oldRadioButton.forEach(function(element) {
  element.addEventListener('click', removeItem)
  console.log(oldRadioButton)
})
// function loadList () {
//     JSON.parse(localStorage.getItem('currentList', list.innerHTML))
// }


saveButton.addEventListener("click", saveList)
btn.addEventListener("click",  addItem)




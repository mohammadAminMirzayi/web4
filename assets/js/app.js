// variables

// 
const noteList = document.querySelector('#note-list')



// eventListeners
// form subimions
const form= document.querySelector('.form')
let button = document.createElement('button')
let submit = document.querySelector('#submit')
// const noteList = document.querySelector('#note-list')
button.classList = 'button u-full-width button-primary'
eventlisteners()
function eventlisteners(){
    document.querySelector('#form').addEventListener('submit', newNote)
    document.querySelector('#note-list').addEventListener('click', (e)=>{
       alert('پیام شما با موفقیت حذف شد') 
       if(e.target.classList.contains('remove-note')){
           e.target.parentElement.remove()
       }
    }  )
    document.querySelector('#submit').addEventListener('click', (e)=>{
        if(e.target.classList.contains('button')){
            alert('پیام شما با موفقیت اضافه شد')
        }
    });
    document.querySelector('#submit').addEventListener('click', (e)=>{
        button.appendChild(document.createTextNode('پیام شما ذخیره شد'))
        if(e.target.classList.contains('button')){
            form.replaceChild(button , submit)
            
        }
})     


removeBtn.addEventListener('click', (e) =>{
    const  removeBtn = docuemnt.createElement('a')
    removeBtn.classList = 'remove-note'
    removeBtn.textContent = 'X'
    if(e.target.classList.contains('remove-note')){
         submit.textContent = 'خدایا مرسیی'
         console.log(submit);
     }
 })

}


// functions
// adding new note to the list
function newNote(e){
 e.preventDefault()
 // acses to the note 
 const note = document.querySelector('#note').value
 // create <li> tag 
 const li = document.createElement('li')

 // adding note to the <li> tag 
 li.appendChild(document.createTextNode(note))
 // adding li to the note list
 noteList.appendChild(li)
// create a Element
 const removeBtn = document.createElement('a')
 removeBtn.textContent = 'X'
 removeBtn.classList = 'remove-note'
 // adding remove btn to the <li> tag
 li.appendChild(removeBtn)
 console.log(li);
 

 console.log(li);
}
// function removeNote(e){
//     if(e.target.classList.contains('remove-note')){
//      e.target.parentElement.remove()  
//     }
// }
// add note to the localStorage
function addToLocalStorage(){
    notes = getFromLocalStorage()
}
// check localStorage to the note
function getToLocalStorage(){
    let getFromLs = localStorage.getItem('notes');
    let notes;
    if (getFromLs === null) {
        notes = []
    } else {
        notes = json.parse(getFromLs)
    }
    return notes
}
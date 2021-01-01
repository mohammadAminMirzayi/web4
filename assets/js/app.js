// variabels 
const noteList = document.querySelector('#note-list')


// eventlisteners
eventlisteners()
function eventlisteners(){
    document.querySelector('#form').addEventListener('submit', newNote)

    noteList.addEventListener('click', removeNote)
     
    document.addEventListener('DOMContentLoaded', localStorageLoade)
        
    
}




// function 
function newNote(e){
    // form sobmision
   e.preventDefault() 
   // accses to the input value
   const note = document.querySelector('#note').value
   // create <li> tag
   const li = document.createElement('li')

   li.appendChild(document.createTextNode(note))
    // create removeBtn
   const removeBtn = document.createElement('a')

   removeBtn.textContent = 'X'

   removeBtn.classList = 'remove-note'

   li.appendChild(removeBtn)

   noteList.appendChild(li)
   
   addToLocalStorage(note)

}

function addToLocalStorage(note){

    const notes = getNotesFromLocalStorage()
    notes.push(note)
    console.log(notes);

    localStorage.setItem('notes', JSON.stringify(notes))

    
}

function getNotesFromLocalStorage(){
    let getFromLs = localStorage.getItem('notes') 

    let notes;
   // also LocalStorage === null 
    if(getFromLs === null){
        notes = []
        // if not exist 
    }else{
        notes = JSON.parse(getFromLs)
    }
    return notes
}
function localStorageLoade(){
    const notes = getNotesFromLocalStorage()
   // add Notes To The Local Storage
    notes.forEach(function (note) {
            // create <li> tag
    const li = document.createElement('li')

    li.appendChild(document.createTextNode(note))
        // create removeBtn
    const removeBtn = document.createElement('a')

    removeBtn.textContent = 'X'

    removeBtn.classList = 'remove-note'

    li.appendChild(removeBtn)

    noteList.appendChild(li)
    });
}
// remove Local Storage
function removeFromLocalStorage(noteContent){
      
     const noteDelete = noteContent.substring(0, noteContent.length - 1)

     console.log(noteDelete);

    const notesFromLs = getNotesFromLocalStorage()

    notesFromLs.forEach(function(note, index){
        if(note === noteDelete ){
            notesFromLs.splice(index, 1)
        }
        
    });

    localStorage.setItem('notes', JSON.stringify(notesFromLs))

}
function removeNote(e){
    if(e.target.classList.contains('remove-note')){
        e.target.parentElement.remove()
    }
    removeFromLocalStorage(e.target.parentElement.textContent)
}
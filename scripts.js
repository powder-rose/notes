let textarea = document.querySelector('.textarea')
let notesWindow = document.querySelector('.notes')
let btn = document.querySelector('.btn')

let arr = []
let note = ''
let errors = []

document.addEventListener("DOMContentLoaded", function(event) {
    let localNote = localStorage.getItem('note')
   arr = localNote.split()
    if (localNote != null) {
        for (i = 0; i < arr.length; i++) {
            let notesStyle = document.createElement('div')
            notesStyle.classList.add('notes-style')
            notesStyle.innerHTML = arr
            notesWindow.append(notesStyle)
        }
        
    }
})

const validateNotes = (textarea) => {
    let textareaFormat = /^\p{Lu}.*[\.!\?]$/mu
    if (textarea.value.match(textareaFormat)) {
        return true
    } 
    return notesStyle.innerHTML = "Неверный формат заполнения"

}

resetValue = () => {
    textarea.value = ''
}

const getNote = () => {
    note = textarea.value 
    if (note != '') {
        let notesStyle = document.createElement('div')
        notesStyle.classList.add('notes-style')
        notesStyle.innerHTML = note
        notesWindow.append(notesStyle)
        
        arr.push(note)
        localStorage.setItem('note', arr)
        
        resetValue()
    }

}

btn.addEventListener('click', getNote)
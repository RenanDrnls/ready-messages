let copyBtn = document.querySelector('#copyToClipboard')

copyBtn.addEventListener('click', () => {
    let message = document.querySelector('#messageContentView')
    message.select()
    navigator.clipboard.writeText(message.value.toString())
    alert('Conteúdo copiado')
})

let modal = document.querySelector('.full-modal')
let deleteBtn = document.querySelector('#delMessageBtn')

deleteBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

let cancelDeleteMess = document.querySelector('#negativeDel')

cancelDeleteMess.addEventListener('click', () => {
    modal.style.display = 'none'
})
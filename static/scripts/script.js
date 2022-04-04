// let copyBtn = document.querySelector('#copyToClipboard')

// copyBtn.addEventListener('click', () => {
//     let message = document.querySelector('#messageContentView')
//     message.select()
//     navigator.clipboard.writeText(message.value.toString())
//     alert('Conteúdo copiado')
// })

const modal = document.querySelector('.full-modal')
const deleteBtn = document.querySelector('#delMessageBtn')

// deleteBtn.addEventListener('click', () => {
//     modal.style.display = 'block'
// })

const cancelDeleteMess = document.querySelector('#negativeDel')

// cancelDeleteMess.addEventListener('click', () => {
//     modal.style.display = 'none'
// })

const urlString = window.location.search
const urlParams = new URLSearchParams(urlString)
console.log(urlParams);
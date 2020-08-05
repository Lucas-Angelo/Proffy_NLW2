// Procurar o botão(Select). E quando clicar no botão(Event click), executar uma ação chamanda: cloneField(Que foi criada)
document.querySelector("#add-time").addEventListener('click', cloneField)

// Executar a ação de cirar
function cloneField () {
    // Duplicar o campo selecionado
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos de inputs para limpar
    const fields = newFieldContainer.querySelectorAll('input')
    // Limpar todos os campos
    fields.forEach(function(field) {
        // pegar o field do momento e limpa ele
        field.value = ""
    })

    //Colocar na página, onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}

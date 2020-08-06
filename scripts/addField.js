// Search button
// Procurar o botão
document.querySelector("#add-time")
    // When click
    // Quando clicar no botão
    .addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicate fields
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Get fields
    const fields = newFieldContainer.querySelectorAll('input')

    // Clear all fields
    fields.forEach(function(field){
        //pegar o field do momento
        field.value = ""
    })
    // put on page
    // Colocar na página: onde
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

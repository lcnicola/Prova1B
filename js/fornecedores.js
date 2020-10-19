const formulario = document.querySelector('#formularioFornecedores');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputProduto = document.querySelector('#produto');
const inputTelefone = document.querySelector('#telefone')
const fornecedores = document.querySelector('#fornecedores');
const mensagens = document.querySelector('#mensagens');
const valid_email = []

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (inputNome.value === '' || inputEmail.value === '' || inputProduto.value === '' || inputTelefone.value === '') {
        mensagens.style.display = 'block';
        mensagens.style.background = 'red';
        mensagens.innerHTML = 'Preencha todos os campos!';
    } 

    else if (valid_email.includes(inputEmail.value)==true) {
        alert("Esse email já existe!")
    }

    
    else {
        valid_email.push(inputEmail.value)
        const li = document.createElement('li');
        li.innerHTML = `Nome: ${inputNome.value} <br>Email: ${inputEmail.value} <br>Produto: ${inputProduto.value} <br>Telefone: ${inputTelefone.value}`;
        li.addEventListener('click', (e) => {
            const deletar = confirm('Você realmente gostaria de deletar este fornecedor?');

            if (deletar) {
                e.target.remove();
            }
        })

        fornecedores.appendChild(li);
        mensagens.style.display = 'none';

        inputNome.value = '';
        inputEmail.value = '';
        inputProduto.value = '';
        inputTelefone.value = '';
    }
})
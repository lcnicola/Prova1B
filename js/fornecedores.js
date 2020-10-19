const formulario = document.querySelector('#formularioFornecedores');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputTelefone = document.querySelector('#telefone');
const inputProduto = document.querySelector('#produto');
const fornecedores = document.querySelector('#fornecedores');
const mensagens = document.querySelector('#mensagens');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (inputNome.value === '' || inputEmail.value === '' || inputTelefone.value === '' || inputProduto.value === '') {
        mensagens.style.display = 'block';
        mensagens.style.background = 'red';
        mensagens.innerHTML = 'Preencha todos os campos!';
	    
	} else {
        const li = document.createElement('li');
        li.innerHTML = `Nome: ${inputNome.value} <br>Email: ${inputEmail.value} <br>Telefone: ${inputTelefone.value} <br>Produto: ${inputProduto.value}`;
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
		inputTelefone.value = '';
        inputProduto.value = '';
    }

})


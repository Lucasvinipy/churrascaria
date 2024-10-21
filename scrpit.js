
    document.getElementById('reservaForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que o formulário seja enviado diretamente
        
        // Captura os valores dos campos do formulário
        const nome = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const data = document.getElementById('data').value;
        const hora = document.getElementById('hora').value;
        
        // Validação básica (você pode adicionar mais regras de validação conforme necessário)
        if (nome && email && telefone && data && hora) {
            document.getElementById('mensagem').textContent = `Reserva feita com sucesso para ${nome} no dia ${data} às ${hora}.`;
            document.getElementById('mensagem').style.color = 'green'; // Define a cor da mensagem como verde
        } else {
            document.getElementById('mensagem').textContent = 'Por favor, preencha todos os campos corretamente.';
            document.getElementById('mensagem').style.color = 'red'; // Define a cor da mensagem como vermelha
        }
    });

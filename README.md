# agrinho2026
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agroforte: Futuro Sustentável</title>
    <!-- Ligação correta com o arquivo de estilo no head -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>Agroforte: Futuro Sustentável</h1>
        <p>Inovação, tecnologia e preservação no campo</p>
    </header>

    <main>
        <section id="sobre">
            <h2>Sobre o Projeto</h2>
            <p>O projeto <strong>Agroforte: Futuro Sustentável</strong> busca unir a força da produção agrícola com o respeito ao meio ambiente. Mostramos como a tecnologia e as boas práticas no campo garantem alimentos de qualidade hoje, sem esgotar os recursos de amanhã.</p>
        </section>

        <section id="quiz-container">
            <h2>Quiz da Sustentabilidade</h2>
            <p>Descubra se você conhece as práticas do agro sustentável!</p>
            
            <div id="pergunta-box">
                <p id="texto-pergunta">Carregando pergunta...</p>
                <div id="alternativas"></div>
            </div>
            
            <div id="resultado" class="oculto"></div>
        </section>
    </main>

    <!-- Ligação correta com o JavaScript antes do fechamento do body -->
    <script src="script.js"></script>
</body>
</html>
/* Reset básico de layout */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f1f8f5;
    color: #2c3e50;
    line-height: 1.6;
}

header {
    background: linear-gradient(135deg, #1b5e20, #4caf50);
    color: white;
    text-align: center;
    padding: 3rem 1rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

main {
    max-width: 800px;
    margin: 30px auto;
    padding: 20px;
}

section {
    background: white;
    padding: 25px;
    margin-bottom: 25px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

h2 {
    color: #1b5e20;
    margin-bottom: 15px;
    border-bottom: 2px solid #e8f5e9;
    padding-bottom: 8px;
}

/* Estilização do Quiz */
#alternativas {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
}

.btn-opcao {
    background-color: #e8f5e9;
    border: 1px solid #c8e6c9;
    color: #1b5e20;
    padding: 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    text-align: left;
    transition: 0.2s;
}

.btn-opcao:hover {
    background-color: #c8e6c9;
}

#resultado {
    margin-top: 20px;
    padding: 15px;
    border-radius: 6px;
    font-weight: bold;
    text-align: center;
}

.sucesso { background-color: #d4edda; color: #155724; }
.erro { background-color: #f8d7da; color: #721c24; }
.oculto { display: none; }
document.addEventListener("DOMContentLoaded", function() {
    // Dados da pergunta do Quiz sobre agro sustentável
    const dadosQuiz = {
        pergunta: "Qual das alternativas abaixo é uma prática do Agro Sustentável?",
        alternativas: [
            "Uso excessivo de defensivos químicos.",
            "Rotação de culturas e plantio direto.",
            "Desmatamento para expansão de pastos.",
            "Queima de restos vegetais após a colheita."
        ],
        correta: 1 // Segunda opção é a correta (índice 1)
    };

    const textoPergunta = document.getElementById("texto-pergunta");
    const containerAlternativas = document.getElementById("alternativas");
    const divResultado = document.getElementById("resultado");

    // Mostra o texto da pergunta na tela
    textoPergunta.textContent = dadosQuiz.pergunta;

    // Cria os botões de resposta na tela de forma dinâmica
    dadosQuiz.alternativas.forEach((opcao, indice) => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.classList.add("btn-opcao");
        
        botao.addEventListener("click", () => verificarResposta(indice));
        containerAlternativas.appendChild(botao);
    });

    // Valida se o clique foi na alternativa certa ou errada
    function verificarResposta(indiceSelecionado) {
        divResultado.classList.remove("oculto", "sucesso", "erro");
        
        if (indiceSelecionado === dadosQuiz.correta) {
            divResultado.textContent = "Parabéns! Resposta Correta. A rotação de culturas protege o solo e reduz pragas.";
            divResultado.classList.add("sucesso");
        } else {
            divResultado.textContent = "Resposta errada. Tente novamente! Foque em técnicas de conservação do solo.";
            divResultado.classList.add("erro");
        }
    }
});
# Agroforte: Futuro Sustentável

**Tema do Projeto:** Agricultura Sustentável e Inovação no Campo (Agrinho 2026)

## Sobre
O projeto **Agroforte: Futuro Sustentável** foi desenvolvido para o Concurso Agrinho. O objetivo principal é conscientizar a comunidade escolar sobre a importância de alinhar a produção de alimentos com técnicas de preservação ambiental. Abordamos práticas como o plantio direto, rotação de culturas e o uso inteligente da água.

## Tecnologias Utilizadas
- HTML5 (Estrutura de dados e conteúdo)
- CSS3 (Estilização responsiva e identidade visual verde)
- JavaScript (Quiz interativo sobre sustentabilidade no campo)

## Acesso ao Projeto
Os arquivos deste repositório podem ser baixados e executados localmente abrindo o arquivo `index.html` em qualquer navegador web, ou visualizados diretamente através do GitHub Pages configurado neste repositório.

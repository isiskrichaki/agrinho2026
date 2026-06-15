// Banco de dados com as perguntas do Quiz
const perguntasQuiz = [
    {
        pergunta: "Qual técnica ajuda a economizar água na agricultura?",
        opcoes: ["Irrigação por gotejamento", "Irrigação por inundação", "Regar nas horas mais quentes"],
        correta: 0 // Índice da resposta correta (0 = primeira opção)
    },
    {
        pergunta: "O que o plantio direto ajuda a proteger?",
        opcoes: ["As pragas agrícolas", "O solo contra a erosão", "O uso de agrotóxicos"],
        correta: 1 // 1 = segunda opção
    },
    {
        pergunta: "Qual é uma fonte de energia limpa usada no campo?",
        opcoes: ["Gerador a diesel", "Energia solar", "Queima de lenha"],
        correta: 1
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

// Função para iniciar ou atualizar o Quiz na tela
function carregarPergunta() {
    // Procura os elementos na página HTML onde o quiz vai aparecer
    const containerPergunta = document.getElementById("pergunta-texto");
    const containerOpcoes = document.getElementById("opcoes-container");
    const containerResultado = document.getElementById("resultado-quiz");

    // Limpa as opções anteriores
    containerOpcoes.innerHTML = "";

    // Verifica se o quiz chegou ao fim
    if (perguntaAtual >= perguntasQuiz.length) {
        containerPergunta.innerText = "Quiz Concluído!";
        containerResultado.innerText = `Você acertou ${pontuacao} de ${perguntasQuiz.length} perguntas.`;
        return;
    }

    // Exibe a pergunta atual
    const dadosPergunta = perguntasQuiz[perguntaAtual];
    containerPergunta.innerText = dadosPergunta.pergunta;

    // Cria os botões para cada opção de resposta
    dadosPergunta.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button");
        botao.innerText = opcao;
        botao.classList.add("btn-opcao");
        
        // Adiciona o evento de clique para validar a resposta
        botao.addEventListener("click", () => verificarResposta(indice));
        containerOpcoes.appendChild(botao);
    });
}

// Função que checa se o aluno acertou a resposta
function verificarResposta(indiceSelecionado) {
    const dadosPergunta = perguntasQuiz[perguntaAtual];

    if (indiceSelecionado === dadosPergunta.correta) {
        pontuacao++;
        alert("Resposta correta! 🎉");
    } else {
        alert("Resposta incorreta! ❌");
    }

    // Avança para a próxima pergunta e atualiza a tela
    perguntaAtual++;
    carregarPergunta();
}

// Executa a função assim que a página HTML terminar de carregar
document.addEventListener("DOMContentLoaded", carregarPergunta);

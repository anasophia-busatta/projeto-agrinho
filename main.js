document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("simulator-form");
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const resultScore = document.getElementById("result-score");
    const resultText = document.getElementById("result-text");
    const btnRestart = document.getElementById("btn-restart");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede a página de recarregar

        // Captura os valores selecionados convertendo para números
        const transport = parseInt(document.getElementById("transport").value);
        const meat = parseInt(document.getElementById("meat").value);
        const shower = parseInt(document.getElementById("shower").value);
        const recycle = parseInt(document.getElementById("recycle").value);

        // Soma total dos pontos
        const totalScore = transport + meat + shower + recycle;

        // Esconde o formulário e mostra o resultado
        quizContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");

        // Lógica de feedback baseado na pontuação
        if (totalScore <= 12) {
            resultScore.textContent = `Sua pontuação: ${totalScore} (Baixo Impacto) 🟢`;
            resultScore.style.backgroundColor = "#e8f5e9";
            resultScore.style.color = "#2e7d32";
            resultText.textContent = "Parabéns! Seus hábitos são muito sustentáveis. Você está fazendo a sua parte para proteger o planeta e serve de exemplo para a comunidade do Agrinho!";
        } else if (totalScore <= 26) {
            resultScore.textContent = `Sua pontuação: ${totalScore} (Médio Impacto) 🟡`;
            resultScore.style.backgroundColor = "#fffde7";
            resultScore.style.color = "#f57f17";
            resultText.textContent = "Você tem uma pegada ecológica moderada. Já pratica boas ações, mas ainda pode melhorar reduzindo o tempo no banho, reciclando mais ou diminuindo o consumo de carne.";
        } else {
            resultScore.textContent = `Sua pontuação: ${totalScore} (Alto Impacto) 🔴`;
            resultScore.style.backgroundColor = "#ffebee";
            resultScore.style.color = "#c62828";
            resultText.textContent = "Atenção! Sua pegada ambiental está alta. Pequenas mudanças na sua rotina, como usar menos o carro e separar o lixo, podem fazer uma enorme diferença para o futuro do nosso planeta.";
        }
    });

    // Botão para reiniciar o simulador
    btnRestart.addEventListener("click", () => {
        form.reset(); // Limpa as respostas do formulário
        resultContainer.classList.add("hidden");
        quizContainer.classList.remove("hidden");
    });
});
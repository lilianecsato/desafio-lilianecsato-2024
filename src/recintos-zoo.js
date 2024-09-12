class RecintosZoo {

    analisaRecintos(animal, quantidade) {
        // Lista de animais válidos que o zoológico pode receber
        const animais = ["LEAO", "LEOPARDO", "CROCODILO", "MACACO", "GAZELA", "HIPOPOTAMO"];

        // Validação da quantidade de animais:
        // - A quantidade precisa ser um número inteiro positivo (não pode ser zero ou negativo)
        if (!Number.isInteger(quantidade) || quantidade <= 0) {
            return { erro: "Quantidade inválida" };
        }

        // Verificação se o animal informado é válido
        if (!animais.includes(animal)) {
            return { erro: "Animal inválido" };
        }

        // Criação da lista de recintos viáveis
        const recintosViaveis = [];

        // Regras para cada animal
        switch (animal) {
            case "CROCODILO":
                quantidade *= 3;
                if (quantidade <= 8) { // Recinto 4 (bioma "rio") tem 8 unidades de espaço e está vazio
                    recintosViaveis.push("Recinto 4 (espaço livre: " + (8 - quantidade) + " total: 8)");
                }
                break;

            case "MACACO":
                if (quantidade <= (10 - 3)) { // Recinto 1 (bioma "savana") tem 10 unidades de espaço, 3 ocupadas por macacos
                    recintosViaveis.push("Recinto 1 (espaço livre: " + (10 - 3 - quantidade) + " total: 10)");
                }
                if (quantidade <= 5) { // Recinto 2 (bioma "floresta") está vazio
                    recintosViaveis.push("Recinto 2 (espaço livre: " + (5 - quantidade) + " total: 5)");
                }
                if (quantidade <= (7 - 2)) { // Recinto 3 (bioma "savana e rio") tem 7 unidades de espaço, 2 ocupadas por uma gazela
                    recintosViaveis.push("Recinto 3 (espaço livre: " + (7 - 2 - 1 - quantidade) + " total: 7)");
                }
                break;

            case "LEAO":
                quantidade *= 3;
                if (quantidade <= (9 - 3)) { // Recinto 5 (bioma "savana") tem 9 unidades de espaço, 3 ocupadas por um leão
                    recintosViaveis.push("Recinto 5 (espaço livre: " + (9 - 3 - quantidade) + " total: 9)");
                }
                break;

            case "LEOPARDO":
                // Leopardo não pode ficar em nenhum recinto por causa das regras de convivência
                return { erro: "Não há recinto viável" };

            case "GAZELA":
                quantidade *= 2;
                if (quantidade <= (10 - 3)) { // Recinto 1 (bioma "savana") tem 10 unidades de espaço, 3 ocupadas por macacos
                    recintosViaveis.push("Recinto 1 (espaço livre: " + (10 - 3 - quantidade) + " total: 10)");
                }
                if (quantidade <= (7 - 2)) { // Recinto 3 (bioma "savana e rio") tem 7 unidades de espaço, 2 ocupadas por uma gazela
                    recintosViaveis.push("Recinto 3 (espaço livre: " + (7 - 2 - quantidade) + " total: 7)");
                }
                break;

            case "HIPOPOTAMO":
                quantidade *= 4;
                if (quantidade <= (7 - 2)) { // Recinto 3 (bioma "savana e rio") tem 7 unidades de espaço, 2 ocupadas por uma gazela.
                    recintosViaveis.push("Recinto 3 (espaço livre: " + (7 - 2 - quantidade) + " total: 7)");
                }
                if (quantidade <= 8) { // Recinto 4 (bioma "rio") tem 8 unidades de espaço e está vazio
                    recintosViaveis.push("Recinto 4 (espaço livre: " + (8 - quantidade) + " total: 8)");
                }
                break;

            default:
                return { erro: "Animal inválido" };
        }

        // Se houver recintos viáveis, retorna a lista
        if (recintosViaveis.length > 0) {
            return { recintosViaveis };
        } else {
            return { erro: "Não há recinto viável" };
        }
    }
}

// Exportando a classe para uso externo
export { RecintosZoo as RecintosZoo };

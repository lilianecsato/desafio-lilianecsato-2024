class RecintosZoo {

    analisaRecintos(animal, quantidade) {
    }
    // Lista de animais válidos que o zoológico pode receber
    let animais = ["LEAO", "LEOPARDO", "CROCODILO", "MACACO", "GAZELA", "HIPOPOTAMO"];
            
    // Validação da quantidade de animais:
    // - A quantidade precisa ser um número inteiro positivo (não pode ser zero ou negativo)
    if (!Number.isInteger(quantidade) || quantidade == 0 || Math.sign(quantidade) === -1) {
        return "entrada inválida"; // Retorna mensagem de erro se a quantidade for inválida
    }

    // Verificação se o animal informado é válido
    if (animais.includes(animal) == false) {
        return "animal inválido"; // Retorna erro se o animal não está na lista de animais válidos
    }
   
    // Regras para o animal "CROCODILO"
    
    if (animal === "CROCODILO") {
    quantidade = 3*quantidade 
        if (quantidade <= (8 - 0)) { // Recinto 4 (bioma "rio") tem 8 unidades de espaço e está vazio
            return "Recinto 4 (espaço livre: " + (8 - quantidade) + " total: 8)";
        } else {
            return "não há recinto viável";
        }
    }
    
    // Regras para o animal "MACACO"
    if (animal === "MACACO") {
        if (quantidade <= (10 - 3)) { // Recinto 1 (bioma "savana") tem 10 unidades de espaço, 3 ocupadas por macacos
            if (quantidade <= (7 - 2)) { // Recinto 3 (bioma "savana e rio") tem 7 unidades de espaço, 2 ocupadas por uma gazela
                return "Recinto 1 (espaço livre: " + (10 - 3 - quantidade) + " total: 10" +
                    " Recinto 2 (espaço livre: " + (5 - 0 - quantidade) + " total: 5" +
                    " Recinto 3 (espaço livre: " + (7 - 2 - 1 - quantidade) + " total: 7)";
            }
            if (quantidade <= (5 - 0)) { // Recinto 2 (bioma "floresta") está vazio
                return "Recinto 1 (espaço livre: " + (10 - 3 - quantidade) + " total: 10" +
                    " Recinto 2 (espaço livre: " + (5 - 0 - quantidade) + " total: 5)";
            }
            return "Recinto 1 (espaço livre: " + (10 - 3 - quantidade) + " total: 10)";
        } else {
            return "não há recinto viável";
        }
    }

    // Regras para o animal "LEAO"
    if (animal === "LEAO") {
    quantidade = 3*quantidade
        if (quantidade <= (9 - 3)) { // Recinto 5 (bioma "savana") tem 9 unidades de espaço, 3 ocupadas por um leão
            return "Recinto 5 (espaço livre: " + (9 - 3 - quantidade) + " total: 9)";
        } else {
            return "não há recinto viável";
        }
    }

    // Regras para o animal "LEOPARDO"
    if (animal === "LEOPARDO") {
           return "não há recinto viável"; // O Leopardo só pode ir para a savana. A savana do recinto 1 já tem 3 macacos e a savana do recinto 5 tem 1 leão. O Leopardo, por ser carnívoro e só poder ficar com a mesma espécie, não pode ir para esses recinto 
        
    }

    // Regras para o animal "GAZELA"
    if (animal === "GAZELA") {
   quantidade = 2*quantidade
       if (2*quantidade <= (10 - 3)) { // Recinto 1 (bioma "savana") tem 10 unidades de espaço, 3 ocupadas por macacos
            return "Recinto 1 (espaço livre: " + (10 - 3 - 1 - quantidade) + " total: 10)" + " Recinto 3 (espaço livre: " + (7 - 2 - quantidade) + " total: 7)";
        } else  if (quantidade <= (7 - 2)) { // Recinto 3 (bioma "savana e rio") tem 7 unidades de espaço, 2 ocupadas por uma gazela
            return "Recinto 3 (espaço livre: " + (7 - 2 - quantidade) + " total: 7)";
        } else {
            return "não há recinto viável";
        }
    }

    // Regras para o animal "HIPOPOTAMO"
    if (animal === "HIPOPOTAMO") {
    quantidade = 4*quantidade
    
     if (quantidade <= (7 - 2)) { // Recinto 3 (bioma "savana e rio") tem 7 unidades de espaço, 2 ocupadas por uma gazela.
            return "Recinto 1 (espaço livre: " + (10 - 3 -1- quantidade) + " total: 10 " +" Recinto 3 (espaço livre: " + (7 - 2 - 1 - quantidade) + " total: 7)"+" Recinto 4 (espaço livre: " + (8 - quantidade) + " total: 8)"; } 
            else           
                     if (quantidade <= (8 - 0)) { // Recinto 4 (bioma "rio") tem 8 unidades de espaço e está vazio
            return  " Recinto 4 (espaço livre: " + (8 - quantidade) + " total: 8)";
        } 
       
         else {
            return "não há recinto viável";
        }
    }




export { RecintosZoo as RecintosZoo };

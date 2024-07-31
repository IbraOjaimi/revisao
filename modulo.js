const prompt = require('prompt-sync')();

let estoque = [];

criar = () => {
    let produto = prompt('Digite o nome do produto: ');
    let preco = +prompt('Digite o valor do protudo: ');

    if(produto != '' && preco != '' && !isNaN(preco)){
        estoque.push({produto, preco});
        console.log(`Produto: ${produto}, cadastrado com sucesso!`);
        console.log(`Preco: R$ ${preco}, cadatrando com sucesso!`);
    } else {
        console.log('Digite um produto ou preço correto!');
    }
}


listar = () => {
    estoque.forEach((element, indice) => {
        console.log(`${indice +1}.\nProduto: ${element.produto}\nPreço: ${element.preco}\n `);
    });
}

editar = () => {
    listar()
    let editar = +prompt('Qual lista de produto deseja editar? ');
    if(isNaN(editar) || editar > estoque.length || editar === 0){
        console.log('Lista não encontrada!');
    }else{
        let ambos = prompt('Você deseja editar UM item ou AMBOS? ').toLowerCase();
        if(ambos == 'ambos'){
            let newProduto = prompt('Digite o produto atualizado! ');
            let newPreco = +prompt('Digite o preço atualizado! ');
            estoque[editar-1].produto = newProduto
            estoque[editar-1].preco = newPreco
            listar();
        } else if (ambos == 'um'){
            let qual = prompt('O que você deseja editar? (produto/preço) ');
            if(qual == 'produto'){
                let novoProduto = prompt('Digite o produto atualizado! ')
                console.log('\n')
                estoque[editar-1].produto = novoProduto
                listar()
            } else if (qual == 'preço' || qual == 'preco'){
                let novoPreco = +prompt('Digite o preço atualizado! ');
                console.log('\n')
                estoque[editar-1].preco = novoPreco
                listar()
            } else {
                console.log('Digite uma opção valida!');
                editar();
            }
        }else {
            console.log('Opção invalida!');
        }    
    }
}

remover = () => {
    listar();
    let apagar = +prompt('Qual lista você deseja apagar? ');
    console.log('\n')
    if (isNaN(apagar) || apagar > estoque.length || apagar === 0){
        console.log('Opção invalida!')
    } else {
    estoque.splice(apagar-1, 1);
    listar();
    }
}

module.exports = {
    criar,
    listar,
    editar,
    remover
}
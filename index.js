const prompt = require('prompt-sync')({sigint:true});
let modulo = require('./modulo.js');
modulo = {criar, listar, editar, remover};

while(true){
    console.log(`
    1. Adicionar Item/Preço
    2. Listar
    3. Editar
    4. Remover
    5. Sair
    `)
    let crud = prompt('')

    switch (crud) {
        case '1':
            criar();            
            break;
        case '2':
            listar();            
            break;
        case '3':
            editar();            
            break;
        case '4':
            remover();            
            break;
        case '5':
            console.log('Saindo...');
            process .exit();
    }
}
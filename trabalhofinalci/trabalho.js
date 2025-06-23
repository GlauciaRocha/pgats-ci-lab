function geradorDeTagsDeIdentificacao (nome) { 
  return nome.toUpperCase()      
}

export{
    geradorDeTagsDeIdentificacao
}
  
 function verificarSePodeSerAdotado(idade, porte){
   if (idade == 1 && porte == 'M')              
   return true;       
}

export{
    verificarSePodeSerAdotado
}
  
  function calcularConsumoDeRacao(nome, idade, peso){        
        const gramasPorDia = peso * 300;
        return gramasPorDia;
    }

    export{
        calcularConsumoDeRacao
    }
  
  
  function decidirTipoDeAtividadePorPorte (porte){
        if(porte == 'pequeno')

        return 'brincar dentro de casa';
    }
     export{
        decidirTipoDeAtividadePorPorte
    }
  
 async function buscarDadoAsync (nome){
    return nome = 'Pipoca'
}

(async () => { 
    const resultado = await buscarDadoAsync('Pipoca'); 
            
});


export {
  buscarDadoAsync
}
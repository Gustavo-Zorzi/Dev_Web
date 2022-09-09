$(document).ready(function(){
  renderizaPagina();  
})

function renderizaPagina(){        
    
    const oPagina = {
        oTitulo : $(document).attr('title')
    }
    
    if(oPagina.oTitulo == 'Cadastro'){
        ManutencaoCadastro.processaDadosOnLoad();
        return;
    }
    
    ManutencaoAgenda.processaDadosOnLoad();
}

async function submitFormulario(){

    const oDados = await ManutencaoCadastro.confirmaIncluirRegistro();

    const sHtml = getHtmlTabela(oDados);

    $('#tabela-contatos tbody').append(sHtml);
}

function getHtmlTabela(oDados){
    return `<tr>
            <td>4</td>
            <td>${oDados.sNome}</td>
            <td>${oDados.sTelefone}</td>
            <td>${oDados.sEmail}</td>
            <td>${oDados.sDataNascimento}</td>
            <td>${oDados.sDataNascimento - 2022}</td>
        </tr>`;
}
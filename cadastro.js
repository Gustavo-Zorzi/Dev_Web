class ManutencaoCadastro{
    static oFormulario;
    static oCampos;
    static oBotoes;
    static oDadosContatos;


    static processaDadosOnLoad(){

        this.mapearElementos();

    }

    static mapearElementos(){
        this.mapearCampos();
        this.mapearBotoes();
        this.setAcoes();
    }

    static setAcoes(){
        
        this.oBotoes.click(function(){
            this.confirmaIncluirRegistro();
        });
    }

    static mapearCampos(){
        this.oCampos = {
            oNome           : $('#nome'),
            oTelefone       : $('#telefone'),
            oEmail          : $('#email'),
            oDataNascimento : $('#datanascimento')   
        }
    }

    static mapearBotoes(){
        this.oBotoes = {
            oConfirmar : $('#confirmar')
        }
    }

    static async confirmaIncluirRegistro(){

        const oDadosContatos = this.getObjetoDadosContatos();

        await this.getArrayMensagensValidaRegistros(oDadosContatos);

        return oDadosContatos;

    }

    static async getArrayMensagensValidaRegistros(oDados){

        const aMensagens = []; 

        let oCampoFocus;

        if(!oDados.sNome){
            oCampoFocus = this.oCampos.oNome;
            aMensagens.push('O campo Nome é obrigatório.')
        }
        else if(!oDados.sTelefone){
            oCampoFocus = this.oCampos.oTelefone;
            aMensagens.push('O campo Telefone é obrigatório.');
        }
        else if(!oDados.sEmail){
            oCampoFocus = this.oCampos.oEmail;
            aMensagens.push('O campo Email é obrigatório.');   
        }
        else if(!oDados.sDataNascimento){
            oCampoFocus = this.oCampos.oDataNascimento;
            aMensagens.push('O campo Data de Nascimento é obrigatório.');      
        }

        if(aMensagens.length > 0){
            oCampoFocus.focus();
            alert(aMensagens);
        }

    }

    static getObjetoDadosContatos(){
        this.oDadosContatos = {
            sNome     : this.oCampos.oNome.val().trim(),
            sTelefone : this.oCampos.oNome.val().trim(),
            sEmail    : this.oCampos.oNome.val().trim(),
            sDataNascimento : this.oCampos.oNome.val().trim(),
        }

        return this.oDadosContatos;
    }
}
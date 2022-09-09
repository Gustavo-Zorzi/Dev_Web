class Componentes {

    static oAlerta;
    
    static alerta(sMensagem, sTipo){

        if(sTipo == 'aviso'){
            setTimeout(function(){ 
                return document.body.innerHTML + 
                `<div id="alerta">
                    <div class="alert alert-warning alert-dismissible d-flex align-items-center fade show">
                        <i class="bi-exclamation-triangle-fill"></i>
                        <strong class="mx-2">Alerta</strong>
                        <bdo id="msg">${sMensagem}</bdo>
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                </div>`;
            }, 30000);
        }
    }
}
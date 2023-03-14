//variable que nos imprime toda la estructura principal de la vista home
export let home = `
<div class="container">
        <div class="row">
            <!--caja para imprimir mis viajes en la vista del home
                el id de esta caja será "misviajeshome"-->

            <div class="d-none d-lg-block col-md-4 border py-5" >
            
            <div id="misviajeshome"></div>
            
            </div>

            <!--caja para imprimir los viajes de todos los usuarios en la vista del home
                el id de esta caja será "todosviajeshome"-->

            <div class="col border py-5" id="todosviajeshome"></div>
        </div>
    </div>
`

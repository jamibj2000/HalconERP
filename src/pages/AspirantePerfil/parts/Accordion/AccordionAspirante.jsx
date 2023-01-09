import { useEffect } from "react"

function AccordionAspirante ({aspiracionesList}){

  useEffect(() => {
    console.log("aspiaciones in accordion",aspiracionesList)  
  }, [aspiracionesList])
  


  return (<>
  <div className="aspirante-accordion-container">
  <h3>Listado de aspiraciones de {aspiracionesList[0]?.ApeNombres}</h3>
  <h3>Correo : {aspiracionesList[0]?.Correo}</h3>
  <div className="accordion accordion-flush" id="accordionFlushHalcon">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Curso 1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushHalcon">
      <div className="accordion-body">
      <div className="phases-container">
      <h3>Datos del aspirante</h3>
      <div className="row">
        <div className="col-1">
          <h3>Fases:</h3>
          <ul>
            <li>Fase 1</li>
            <li>Fase 2</li>
            <li>Fase 3</li>
          </ul>
        </div>
        <div className="col-11">form</div>
      </div>
    </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Curso 2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushHalcon">
      <div class="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
 
</div>
  </div>
  </>)

}

export {AccordionAspirante}
import React, { useState } from "react";

import { Select } from "../componentsForm/select";
import { Progress } from "../componentsForm/progress";
import { ButtonsContainer } from "../componentsForm/buttons/buttonsContainer";
import { LeftButtonContainer } from "../componentsForm/buttons/leftButtonContainer";
import { RightButtonContainer } from "../componentsForm/buttons/rightButtonContainer";
import { Checkbox } from "../componentsForm/checkbox";
import { TextArea } from "../componentsForm/textArea";
import { Button } from "../componentsForm/buttons/button"
import '../componentsForm/buttons/button'

const DetalleAspirante = () => {

    const [detalle, setDetalle] = useState("");
    const [aspirante, setAspirante] = useState("");
    const [repositorio, setRepositorio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [estado, setEstado] = useState("");

    const [cargando, setCargando] = useState(false)

    const handleSubmit = e => {
      e.preventDefault()

      setCargando(true)
      //Funciones asincronas
      setCargando(false)
    }

    return (
        <div>
           <div class="form-animado col-md-11 h-75 ">
                <div className="card h-100">
                    <header>
                        <div className="card-header">
                            <Progress percentage="30%" />
                        </div>
                    </header>
                    <main className="card-body">
                        <form onSubmit={handleSubmit}>

                            <Select
                                name="phase"
                                onChange={setDetalle}
                                value={detalle}
                                label="Detalle aspirante"
                                options={["opcion 1", "opcion 2"]}
                            />

                            <Select
                                name="applicant"
                                onChange={setAspirante}
                                value={aspirante}
                                label="Aspirante fase"
                                options={["opcion 1", "opcion 2"]}
                            />

                            <TextArea
                                name="rest"
                                label="Repositorio"
                                value={repositorio}
                                onChange={setRepositorio}
                                cols={30}
                                rows={2}
                            />
                            <TextArea
                                name="description"
                                label="Descriopción"
                                value={descripcion}
                                onChange={setDescripcion}
                                cols={30}
                                rows={2}
                            />

                            <Checkbox
                                id="id_Status"
                                name='status'
                                value={estado}
                                onChange={setEstado}
                            >
                                Obtener valor de la tabla de bases de datos 'Estado' celda
                                'Estado'
                            </Checkbox>
                            
                            <ButtonsContainer>
                                <LeftButtonContainer>
                                    <Button type="back">Atrás</Button>
                                </LeftButtonContainer>
                                <RightButtonContainer>

                                    <Button 
                                        type='send'
                                        loading={ cargando }
                                    >
                                        Enviar
                                    </Button>
                                </RightButtonContainer>
                            </ButtonsContainer>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    );
};

export { DetalleAspirante }
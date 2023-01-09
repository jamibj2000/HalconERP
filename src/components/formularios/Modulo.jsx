import React, { useState } from "react";

import { Select } from "../componentsForm/select";
import { Input } from "../componentsForm/input";
import { Progress } from "../componentsForm/progress";
import { ButtonsContainer } from "../componentsForm/buttons/buttonsContainer";
import { LeftButtonContainer } from "../componentsForm/buttons/leftButtonContainer";
import { RightButtonContainer } from "../componentsForm/buttons/rightButtonContainer";
import { Checkbox } from "../componentsForm/checkbox";
import { Button } from "../componentsForm/buttons/button"
import { TextArea } from "../componentsForm/textArea";
import '../componentsForm/buttons/button'


const Modulo = () => {
    const [modulo, setModulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [dimension, setDimension] = useState("");
    const [orden, setOrden] = useState("");
    const [estado, setEstado] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div class="col-md-11 h-75 mt-3">
                <div className="card h-100">
                    <header>
                        <div className="card-header">
                            <Progress percentage="30%" />
                        </div>
                    </header>
                    <main className="card-body">
                        <form onSubmit={handleSubmit}>

                            <Select
                                name="module"
                                onChange={setModulo}
                                value={modulo}
                                label="Modulo"
                                options={["opcion 1", "opcion 2"]}
                            />

                            <Select
                                name="dimension"
                                onChange={setDimension}
                                value={dimension}
                                label="Dimensión"
                                options={["opcion 1", "opcion 2"]}
                            />


                            <Input
                                label="Orden"
                                type="text"
                                onChange={setOrden}
                                value={orden}
                                required={true}
                            />

                            <TextArea
                                name="description"
                                label="Descripción"
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
                                    <Button type="send">Enviar</Button>
                                </RightButtonContainer>
                            </ButtonsContainer>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    );
};

export { Modulo }

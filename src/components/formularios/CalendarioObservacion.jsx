import React, { useState } from "react";
import { Progress } from './componentsForm/progressBar/progress';
import { Button } from './componentsForm/button/button';
import { Select } from './componentsForm/select/select';
import { TextArea } from './componentsForm/textarea/textarea';
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer';
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer';
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer';
import './componentsForm/button/button.css'

const CalendarioObservacion = () => {
    const [calendario, setCalendario] = useState("");
    const [detalle, setDetalle] = useState("");
    const [usuario, setUsuario] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [cargando, setCargando] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        setCargando(true)
        //Funciones asincronas
        setCargando(false)
    }

    return (
        <div>
            <div className="form-animado col-md-11 h-75 ">
                <div className="card h-100">
                    <header>
                        <div className="card-header">
                            <Progress percentage="30%" />
                        </div>
                    </header>
                    <main className="card-body">
                        <form onSubmit={handleSubmit}>

                            <Select
                                name="Timetable"
                                onChange={setCalendario}
                                value={calendario}
                                label="Calendario Observación"
                                options={["opcion 1", "opcion 2"]}
                            />

                            <Select
                                name="detail"
                                onChange={setDetalle}
                                value={detalle}
                                label="Calendario detalle"
                                options={["opcion 1", "opcion 2"]}
                            />

                            <Select
                                name="user"
                                onChange={setUsuario}
                                value={usuario}
                                label="Usuario"
                                options={["opcion 1", "opcion 2"]}
                            />
                            <TextArea
                                name="descripcion"
                                label="Descripción"
                                value={descripcion}
                                onChange={setDescripcion}
                                cols={30}
                                rows={2}
                            />

                            <ButtonsContainer>
                                <LeftButtonContainer>
                                    <Button type="back">Atrás</Button>
                                </LeftButtonContainer>
                                <RightButtonContainer>

                                    <Button
                                        type='send'
                                        loading={cargando}
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

export { CalendarioObservacion }
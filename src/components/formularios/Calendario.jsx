import React, { useState } from "react";
import { Progress } from './componentsForm/progressBar/progress';
import { Button } from './componentsForm/button/button';
import { Select } from './componentsForm/select/select';
import { TextArea } from './componentsForm/textarea/textarea';
import { Input } from './componentsForm/input/input';
import { Checkbox } from './componentsForm/checkbox/checkbox';
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer';
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer';
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer';
import './componentsForm/button/button.css'

const Calendario = () => {
    const [calendario, setCalendario] = useState("");
    const [observacion, setObservacion] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [fecha, setFecha] = useState(0);
    const [tipo, setTipo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [cargando, setCargando] = useState(false)
    const [estado, setEstado] = useState(false)

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
                                name="Timetable"
                                onChange={setCalendario}
                                value={calendario}
                                label="Calendario"
                                options={["opcion 1", "opcion 2"]}
                            />
                            <Select
                                name="type"
                                onChange={setTipo}
                                value={tipo}
                                label="Tipo calendario"
                                options={["opcion 1", "opcion 2"]}
                            />
                            <Input
                                type="date"
                                onChange={setFecha}
                                value={fecha}
                                label="Fecha"
                                required={true}
                            />
                            

                            <Select
                                name="period"
                                onChange={setPeriodo}
                                value={periodo}
                                label="Período"
                                options={["opcion 1", "opcion 2"]}
                            />
                            <TextArea
                                name="observation"
                                label="Observación"
                                value={observacion}
                                onChange={setObservacion}
                                cols={30}
                                rows={2}
                            />
                            <TextArea
                                name="descripcion"
                                label="Descripción"
                                value={descripcion}
                                onChange={setDescripcion}
                                cols={30}
                                rows={2}
                            />
                            <Checkbox
                                id='id_Status'
                                value={estado}
                                name='status'
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

export { Calendario }
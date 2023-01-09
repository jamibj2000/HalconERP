import React, { useState } from "react";

import { Select } from '../componentsForm/select/Select'
import { TextArea } from '../componentsForm/textarea/textarea'
import { Checkbox } from '../componentsForm/checkbox/checkbox'
import { Input } from '../componentsForm/input/input'
import { Button } from '../componentsForm/button/button'
import { ButtonsContainer } from '../componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from '../componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from '../componentsForm/rightButtonContainer/rightButtonContainer'
import { FormContainer } from "../componentsForm/formContainer/FormContainer";

const Malla = () => {

    const [malla, setMalla] = useState("");
    const [estudio, setEstudio] = useState("");
    const [asignatura, setAsignatura] = useState("");
    const [curso, setCurso] = useState("");
    const [estado, setEstado] = useState(false);
    const [horas, setHoras] = useState("");
    const [cargando, setCargando] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        setCargando(true)
        //Funciones asincronas
        setCargando(false)
    }

    return (
        <FormContainer progress='30'>
            <form onSubmit={handleSubmit}>
                <Select
                    name="malla"
                    onChange={setMalla}
                    value={malla}
                    label="Malla curricular"
                    options={["opcion 1", "opcion 2"]}
                />

                <Select
                    name="student"
                    onChange={setEstudio}
                    value={estudio}
                    label="Plan Estudio"
                    options={["opcion 1", "opcion 2"]}
                />

                <Select
                    name="subject"
                    onChange={setAsignatura}
                    value={asignatura}
                    label="Asignatura"
                    options={["opcion 1", "opcion 2"]}
                />
                <Input
                    type="number"
                    onChange={setHoras}
                    value={horas}
                    label="Horas"
                    required={true}
                />


                <Select
                    name="student"
                    onChange={setEstudio}
                    value={estudio}
                    label="Plan Estudio"
                    options={["opcion 1", "opcion 2"]}
                />

                <Select
                    name="subject"
                    onChange={setAsignatura}
                    value={asignatura}
                    label="Asignatura"
                    options={["opcion 1", "opcion 2"]}
                />
                <Input
                    type="number"
                    onChange={setHoras}
                    value={horas}
                    label="Horas"
                    required={true}
                />

                <TextArea
                    name="curse"
                    label="Divisor curso"
                    value={curso}
                    onChange={setCurso}
                    cols={30}
                    rows={2}
                />

                <Checkbox
                    id="id_Status"
                    name='status'
                    checked={estado}
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
        </FormContainer>
    );
}

export { Malla }
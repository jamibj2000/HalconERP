import React, { useState } from 'react'
import { Select } from '../componentsForm/select/Select';
import { TextArea } from '../componentsForm/textarea/textarea'; 
import { Checkbox } from '../componentsForm/checkbox/checkbox';
import { Button } from '../componentsForm/button/button';
import { ButtonsContainer } from '../componentsForm/buttonsContainer/buttonsContainer';
import { LeftButtonContainer } from '../componentsForm/leftButtonContainer/leftButtonContainer';
import { RightButtonContainer } from '../componentsForm/rightButtonContainer/rightButtonContainer';
import { FormContainer } from '../componentsForm/formContainer/FormContainer';

const TipoPerfil = () => {

    const [profile, setProfile] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        setLoading(true)
        //Funciones asincronas
        setLoading(false)
    }

    return (
        <FormContainer progress='45'>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <Select
                        id="id_profile"
                        name='profile'
                        onChange={setProfile}
                        value={profile}
                        label='Tipo de perfil'
                        options={['IdPerfil', 'Obtener valor de la tabla de bases de datos TipoPerfil celda IdTipoPerfil',]}
                    />
                    <TextArea
                        id="floatingTextarea"
                        label='Descripción'
                        name='description'
                        value={description}
                        onChange={setDescription}
                    />
                    <Checkbox
                        id='id_status'
                        name='status'
                        checked={status}
                        onChange={setStatus}
                    >
                        Obtener valor de la tabla de bases de datos 'Estado' celda
                        'Estado'
                    </Checkbox>

                </div>
                <ButtonsContainer>
                    <LeftButtonContainer>
                        <Button type='back'>
                            Atrás
                        </Button>
                    </LeftButtonContainer>
                    <RightButtonContainer>
                        <Button
                            type='send'
                            loading={loading}
                        >
                            Enviar
                        </Button>
                    </RightButtonContainer>
                </ButtonsContainer>
            </form>
        </FormContainer>
    );
};

export { TipoPerfil }
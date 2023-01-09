import React, { useState } from 'react'

import { Select } from './componentsForm/select/select'
import { TextArea } from './componentsForm/textarea/textarea'
import { Input } from './componentsForm/input/input'
import { Button } from './componentsForm/button/button'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'
import { FormContainer } from './componentsForm/formContainer/FormContainer'

const ActaCompromiso = () => {

  const [commitment, setCommitment] = useState("");
  const [record, setRecord] = useState("");
  const [profile, setProfile] = useState("");
  const [date, setDate] = useState("");
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
      <form onSubmit={ handleSubmit }>
        <div className="row">
          <Select
              id="id_commitment"
              name='commitment'
              onChange={ setCommitment }
              value={ commitment }
              label='Acta compromisos'
              options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos ActaComprimiso celda IdActaCompromisos',] }
          />

          <Select
              id="id_record"
              name='record'
              onChange={ setRecord }
              value={ record }
              label='Acta compromisos'
              options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos ActaComprimiso celda IdActa',] }
          />

          <Select
              id="id_profile"
              name='profile'
              onChange={ setProfile }
              value={ profile }
              label='Persona'
              options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos ActaComprimiso celda Idpersona',] }
          />

          <Input
            label='date'
            type='date'
            onChange={ setDate } 
            value={ date }
            required={ true }
          />

          <Input
            label='Estado gestión'
            type='text'
            onChange={ setStatus } 
            value={ status }
            required={ true }
          />

          <TextArea
            id='id_description'
            label='Descripción'
            value={ description }
            name='description'
            onChange={ setDescription }
          />

          <ButtonsContainer>
              <LeftButtonContainer>
                  <Button type='back'>
                      Atrás
                  </Button>
              </LeftButtonContainer>
              <RightButtonContainer>
                  <Button 
                      type='send'
                      loading={ loading }
                  >
                      Enviar
                  </Button>
              </RightButtonContainer>
          </ButtonsContainer>
        </div>
      </form>
    </FormContainer>
  );
};

export { ActaCompromiso }

import React, { useState } from 'react'

import { Select } from './componentsForm/select/select'
import { TextArea } from './componentsForm/textarea/textarea'
import { Input } from './componentsForm/input/input'
import { Button } from './componentsForm/button/button'
import { ButtonsContainer } from './componentsForm/buttonsContainer/buttonsContainer'
import { LeftButtonContainer } from './componentsForm/leftButtonContainer/leftButtonContainer'
import { RightButtonContainer } from './componentsForm/rightButtonContainer/rightButtonContainer'
import { FormContainer } from './componentsForm/formContainer/FormContainer'

const ActaDetalle = () => {

  const [detail, setDetail] = useState("");
  const [record, setRecord] = useState("");
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
                  id="id_detail"
                  name='detail'
                  onChange={ setDetail }
                  value={ detail }
                  label='Acta Detalle'
                  options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos ActaDetalle celda IdActaDetalle',] }
              />

              <Select
                  id="id_record"
                  name='record'
                  onChange={ setRecord }
                  value={ record }
                  label='Acta'
                  options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos ActaDetalle celda IdActa',] }
              />

              <Input
                  id='id_status'
                  label='status Item'
                  type='text'
                  name='status'
                  onChange={ setStatus }
                  value={ status }
                  required={ true }
              />
            </div>

            <TextArea
                id="floatingTextarea"
                label='Descripción'
                name='description'
                value={ description }
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
          </form>
    </FormContainer>
  );
};

export { ActaDetalle }

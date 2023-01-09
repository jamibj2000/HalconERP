import React, { useState } from 'react'

import { Select } from './componentsForm/select/select'
import { TextArea } from './componentsForm/textarea/textarea'
import { Input } from './componentsForm/input/input'
import { Button } from './componentsForm/button/button'
import { Progress } from './componentsForm/progressBar/progress'

const DerechoPecuniario = () => {

    const [pecuniario, setPecuniario] = useState('')
    const [concepto, setConcepto] = useState('')
    const [uvt, setUvt] = useState('')
    const [codigo, setCodigo] = useState('')
    const [cargando, setCargando] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        setCargando(true)
        //Funciones asincronas
        setCargando(false)
    }

    return (
      <div className="card">
          <header className="card-header">
              <Progress
                  percentage='65%'
              />
          </header>
          <main className="card-body">
              <form onSubmit={ handleSubmit }>
                  <div className="row">
                      <div className="col-md-6">
                          <Select
                              id="id_pecuniario"
                              name='pecuniario'
                              onChange={ setPecuniario }
                              value={ pecuniario }
                              label='Tipo Pecuniario'
                              options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos DerechoPecuniario celda IdTipoDerechoPecuniario',] }
                          />

                          <TextArea
                              id="id_concepto"
                              label='Concepto'
                              name='concepto'
                              value={ concepto }
                              onChange={ setConcepto }
                              rows={ 10 }
                          />
                      </div>

                      <div className="col-md-6">
                          <Input
                              id='id_uvt'
                              label='Uvt'
                              type='number'
                              name='uvt'
                              onChange={ setUvt }
                              value={ uvt }
                              required={ true }
                          />

                          <Input
                              id='id_codigo'
                              label='Código'
                              type='text'
                              name='codigo'
                              onChange={ setCodigo }
                              value={ codigo }
                              required={ true }
                          />
                      </div>

                  </div>

                  <Button type='send' loading={ cargando }>
                      Enviar
                  </Button>
              </form>
          </main>
      </div>
    )
}

export { DerechoPecuniario }
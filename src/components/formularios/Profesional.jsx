import React, { useState } from 'react'

import { Select } from './componentsForm/select/select'
import { Button } from './componentsForm/button/button'
import { Progress } from './componentsForm/progressBar/progress'

const Profesional = () => {

    const [perfil, setPerfil] = useState('')
    const [especialidad, setEspecialidad] = useState('')
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
                    percentage='35%'
                />
            </header>
            <main className="card-body">
                <form onSubmit={ handleSubmit }>
                    <Select
                        id="id_perfil"
                        name='perfil'
                        onChange={ setPerfil }
                        value={ perfil }
                        label='Perfil'
                        options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos Profesional celda IdProceso',] }
                    />
                    <Select
                        id="id_especialidad"
                        name='especialidad'
                        onChange={ setEspecialidad }
                        value={ especialidad }
                        label='Especialidad'
                        options={ ['IdGrupo', 'Obtener valor de la tabla de bases de datos Profesional celda especialidad',] }
                    />
                    <Button type='send' loading={ cargando }>
                        Enviar
                    </Button>
                </form>
            </main>
        </div>
    )
}

export { Profesional }
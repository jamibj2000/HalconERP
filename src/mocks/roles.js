const rolsList = [
    { id: '1', role: 'admin', name: 'Administrador', value: 'administrador' },
    { id: '2', role: 'secretario', name: 'Secretario', value: 'secretario' },
    { id: '3', role: 'docente', name: 'Docente', value: 'docente' },
    { id: '4', role: 'estudiante', name: 'Estudiante', value: 'estudiante' },
    // {
    //     id: '4',
    //     role: 'Estudiantes',
    //     name: 'Estudiantexx',
    //     value: 'estudiantexx',
    // },
    // {
    //     id: '4',
    //     role: 'Estudiantes',
    //     name: 'Estudiantexx',
    //     value: 'estudiantexx',
    // },
    // {
    //     id: '4',
    //     role: 'Estudiantes',
    //     name: 'Estudiantexx',
    //     value: 'estudiantexx',
    // },
    // {
    //     id: '4',
    //     role: 'Estudiantes',
    //     name: 'Estudiantexx',
    //     value: 'estudiantexx',
    // },
];

export const getRoles = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(rolsList);
        }, 1400);
    });
};

export default rolsList;

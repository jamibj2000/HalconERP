import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from '../routes/Dashboard';
import { Link, useNavigate } from 'react-router-dom';
import { validacionVacios, validarUserArray, validarUsuario } from '../helpers/validaciones';
import { alerta } from '../helpers/alertas';


const Login = () => {
    const navigate = useNavigate();
    const users = [{name: 'admin',password: 'admin'},{name: 'user',password: 'user',},{name: 'test',password: 'test',},];
    
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [dimension, setDimension] = React.useState('');
    const [rol, setRol] = React.useState('');
 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validacionVacios(username, password)){
            alerta('Todos los campos son obligatorios', 'error');
            return
        }
        if (dimension === "") {
            alerta('Seleccione una dimension', 'info');
            return
        }
        if (dimension !== 'cea') {
            alerta('Dimension en construccion', 'info');
            return
        }
        const userFinded = validarUserArray(users, username)
        
        if (!validarUsuario(userFinded, password)) {
            return
        }
        alerta('Bienvenido', 'success');
        
        setTimeout(() => {
            navigate('/dashboard');
        }, 2000);
    }
    
    return (
        <>
            <div className="module">
                <div className="module-inside animacion">
                    <div className="bg-form">
                        <form className="form p-4" id="form" onSubmit={handleSubmit}>
                            <div className="d-flex justify-content-around pb-4">
                                <img
                                    className="img1-form"
                                    src="./img/halcon_30-04-2022.jpeg"
                                    alt="logo-halcon"
                                />
                                <img
                                    className="img2-form"
                                    src="./img/descarga_30-04-2022.png"
                                    alt="logo-cea"
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="username"></label>
                                <select 
                                    value={dimension} 
                                    onChange={(e) => setDimension(e.target.value)}
                                    className="select-login form-control input-selector">
                                    <option value="" disabled>Dimension</option>
                                    <option value="cea">CEA</option>
                                    <option value="ies">IES</option>
                                    <option value="cia">CIA</option>
                                    <option value="train">Trainair Plus</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <select
                                    value={rol} 
                                    onChange={(e) => setRol(e.target.value)}
                                    id="rol"
                                    className="select-login form-control input-selector">
                                    <option value="" disabled>
                                        Seleccione Rol
                                    </option>
                                    <option value="administrador">
                                        Admin
                                    </option>
                                    <option value="secretario">
                                        Secretario
                                    </option>
                                    <option value="docente">
                                        Docente
                                    </option>
                                    <option value="estudiante">
                                        Estudiante
                                    </option>
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <label htmlFor="username">
                                    <div className="input-group-prepend">
                                        <span
                                            className="input-group-text"
                                            id="basic-addon1">
                                            <i className="bi bi-person-fill" />
                                        </span>
                                    </div>
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    className="form-control input-selector"
                                    placeholder="Usuario"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <label htmlFor="password">
                                    <div className="input-group-prepend">
                                        <span
                                            className="input-group-text"
                                            id="basic-addon1"
                                        >
                                            <i className="bi bi-key-fill" />
                                        </span>
                                    </div>
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="form-control input-selector"
                                    placeholder="Contraseña"
                                    aria-label="Password"
                                    aria-describedby="basic-addon1"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-login">
                                Ingresar
                            </button>
                        </form>
                    </div>
                    <div className="btn-moodle-login rounded module-inside d-flex justify-content-center form-group mt-3 col-md-12">
                        <Link className="p-2 rounded w-100 d-flex justify-content-center" style={{ textDecoration: 'none' }} target="blank" to={"https://campusvirtual.orgcolfuturo.com/login/index.php"}> Ingresar a Moodle
                        </Link >
                    </div>
                </div>
            </div>
        </>
    );
};

export { Login }
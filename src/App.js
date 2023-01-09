import React, { lazy, Suspense, useEffect } from 'react';
/* import logo from './logo.svg'; */
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Login } from './pages/Login/Login';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
/* import { RequireAuth } from './pages/Login/RequireAuth'; */
import { Dashboard } from './pages/Dashboard/Dashboard';
/* import { LocalStorage } from './services'; */
import { DashboardHome } from './components/DashboardHome/DashboardHome';
import { Convocatoria } from './components/formularios/convocatoria/Convocatoria';
import { Area } from './components/formularios/area/Area';
import { Aspirante } from './components/formularios/aspirantes/Aspirantes';
import { ActividadesAcademicasContainer } from './components/formularios/actividadesAcademicas/ActividadesAcademicasContainer';
import { Estudiante } from './components/formularios/estudiante/Estudiante'
import { PlanEstudioContainer } from './components/formularios/planEstudio/PlanEstudioContainer';
import { Asignatura } from './components/formularios/asignatura/Asignatura'
import { Malla } from './components/formularios/malla/Malla'
import { Universidades } from './components/formularios/universidad/Universidades';
import { Sucursal } from './components/formularios/sucursal/Sucursal';
import { DimensionesContainer } from './components/formularios/dimensiones/DimensionesContainer';
import { TipoCuenta } from './components/formularios/tipoCuenta/TipoCuenta';
import { TipoDeDerechoPecunario } from './components/formularios/tipoDeDerechoPecunario/TipoDeDerechoPecunario';
import { MetodoDePago } from './components/formularios/metodoDePago/MetodoDePago';
import { Perfil } from './components/formularios/perfil/Perfil';
import { Paises } from './components/formularios/paises/Paises';
import { EstadoCivil } from './components/formularios/estadoCivil/EstadoCivil';
import { Estrato } from './components/formularios/estrato/Estrato';
import { TipoIdentidad } from './components/formularios/tipoIdentidad/TipoIdentidad';
import { ModoEstudioContainer } from './components/formularios/modoEstudio/ModoEstudioContainer';
import { Genero } from './components/formularios/genero/Genero';
import { Grupo} from './components/formularios/grupo/Grupo';
import { TipoEstadoCursoContainer } from './components/formularios/tipoEstadoCurso/TipoEstadoCursoContainer';
import { DocumentoPecunario} from './components/formularios/documentoPecunario/DocumentoPecunario';
import { TipoPerfil } from './components/formularios/tipoPerfil/TipoPerfil';
import { SexoBiologicoContainer } from './components/formularios/sexoBiologico/SexoBiologicoContainer';
import { CiudadContainer } from './components/formularios/ciudad/CiudadContainer';
import { CursoContainer } from './components/formularios/curso/CursoContainer';
import { ProcesosContainer } from './components/formularios/procesos/ProcesosContainer';
import { TipoMecanismoContainer } from './components/formularios/tipoMecanismo/TipoMecanismoContainer';
import { AspiranteFaseContainer } from './components/formularios/aspiranteFase/AspiranteFaseContainer';
import { ConvocatoriaFaseContainer } from './components/formularios/convocatoriaFase/ConvocatoriaFaseContainer';
import { PlanEstudioDetalleContainer } from './components/formularios/planEstudioDetalle/PlanEstudioDetalleContainer';
import { ConvenioContainer } from './components/formularios/convenio/ConvenioContainer';
import Ventanas from './components/formularios/Ventanas';
import Roles from './components/formularios/Roles';
import Usuarios from './components/formularios/Usuarios';
import Aeropuerto from './components/formularios/Aeropuerto';
import {TiposTercero} from './components/formularios/tiposTercero/TiposTecero';
import { Departamento } from './components/formularios/Departamento/Departamento';
import {TiposTerceroPersona} from './components/formularios/tiposTerceroPersona/TiposTeceroPersona';
import {Persona} from './components/formularios/persona/Persona';
import { Inicio } from './pages/inicio/Inicio';
import { Cursos } from './pages/Cursos/Cursos';
import { AspirantePerfil } from './pages/AspirantePerfil/AspirantePerfil';
import { NavbarHome } from './components/NavbarHome/NavbarHome';
import { InscripcionAspirante } from './pages/InscripcionAspirante/InscripcionAspirante';
/* import { TipoArea } from './components/formularios/tipoArea/TipoArea';
import { TipoConvenio } from './components/formularios/tipoDeConvenio/TipoDeConvenio';
import { ClaseConvenios } from './components/formularios/claseConvenios/ClaseConvenio';
import { TipoAdmisionMatricula } from './components/formularios/TipoAdmisionMatricula/TipoAdmisionMatricula';
import { TiposDiscapacidad } from './components/formularios/tiposDiscapacidad/TiposDiscapacidad'; */

// const {Paises} = React.lazy(async() => await import( "./components/formularios/paises/Paises"));

// const {Universidades} = lazy(() => import('./components/formularios/Universidades'));
// const Universidades = lazy( async () => (await import('./components/formularios/Universidades').Universidades  ))

function App()  {

  /* const isAuth =  useSelector((state) => state.user.isAuthenticated); */
 
  const token =  localStorage.getItem('access_token')
  // const usuario = localStorage.getAsJsonItem('usuario')
  // const dimensiones = localStorage.getAsJsonItem('dimensiones')
  /* const navigate = useNavigate() */
  
  // const dimension =  useSelector((state) => state.user.dimension);
  // console.log("isauth",isAuth)
  // console.log("localstoragee",token,usuario,dimensiones)
  // console.log("is:::",token === '')
  useEffect(() => {
    // if(token === ''){navigate({to:'dashboard',replace:true})}
  

  }, [])
  
  if(!token){
    // if(false){
      
      return <>   
      
          

           <div className='wrapper'>
        <Suspense fallback={<p> Cargando...</p>}>

        <Routes>
          <Route path="/" element={<Navigate to="/inicio" replace />}/>
          <Route path="/inicio" element={<Inicio /> } replace /> 
          <Route path="/cursos" element={<Cursos></Cursos>} replace />     
          <Route path="/login" element={<Login />} />      
          <Route path="perfil-aspirante" element={<AspirantePerfil></AspirantePerfil>} />     
          <Route path="inscripcion-aspirante" element={<InscripcionAspirante></InscripcionAspirante>} />      
          <Route path="*"  element={<Navigate to="/inicio" replace />}  />
        </Routes>     
            </Suspense>
      </div>
    </>
  }
  // if(!dimension && isAuth){
  //   return <>
{/* <Dimension /> */}
  //   </>
  // }

  return (
      <div className='wrapper'>
        <Suspense fallback={<p> Cargando...</p>}>

        <Routes>
          <Route path="/" element={<Navigate to="/inicio" replace />}/>
          <Route path="/inicio" element={<Inicio /> } replace /> 
          <Route path="/cursos" element={<Cursos></Cursos>} replace />     
          <Route path="/login" element={<Login />} />      
          <Route path="/perfil-aspirante" element={<AspirantePerfil></AspirantePerfil>} />     
          <Route path="inscripcion-aspirante" element={<InscripcionAspirante></InscripcionAspirante>} />     
          <Route path="/dashboard/*" element={
            <div className='dashboard'>
              <Dashboard></Dashboard>
            </div>
          } >

            {/* generalidades */}
            <Route exact path="inicio" element={<DashboardHome />} />
            <Route exact path="generalidades/Universidad" element={<Universidades />} />
            <Route exact path="generalidades/dimension" element={<DimensionesContainer />} />
            <Route exact path="generalidades/sucursal" element={<Sucursal />} />
            <Route exact path="generalidades/aeropuerto" element={<Aeropuerto />} />

            {/* cursos */}
            <Route exact path="programas_y_actividades_academicas/area" element={<Area />} />
            <Route exact path="programas_y_actividades_academicas/grupo" element={<Grupo />} />
            <Route exact path="programas_y_actividades_academicas/actividades_o_programas" element={<ActividadesAcademicasContainer />} />
            {/* <Route exact path="programas_y_actividades_academicas/estados_de_curso" element={} /> */}
            <Route exact path="programas_y_actividades_academicas/modo_de_estudiante" element={<ModoEstudioContainer />} />
            {/* <Route exact path="programas_y_actividades_academicas/mecanismos" element={<TipoMecanismoContainer />} /> */}

            {/* ADMISIONES */}
            <Route exact path="admisiones/convocatoria" element={<Convocatoria />} />
            <Route exact path="admisiones/convenio" element={<ConvenioContainer />} />
            {/* <Route exact path="admisiones/convenio" element={<TipoConvenio />} />  */}
            {/* <Route exact path="admisiones/convenio" element={<ClaseConvenios />} />  */}
            {/* <Route exact path="admisiones/convenio" element={<TipoAdmisionMatricula />} />  */}
            {/* <Route exact path="admisiones/convenio" element={<TiposDiscapacidad />} />  */}

            <Route exact path="admisiones/aspirantes" element={<Aspirante />} />

            {/* MATRICULA */}
            <Route exact path="matricula/estudiante" element={<Estudiante />} />
            
            {/* PLAN DE ESTUDIO Y ASIGNATURA */}
            <Route exact path="plan_de_estudio_y_asignaturas/procesos" element={<ProcesosContainer />} />
            <Route exact path="plan_de_estudio_y_asignaturas/asignatura" element={<Asignatura />} />
            <Route exact path="plan_de_estudio_y_asignaturas/malla" element={<Malla />} /> 
            <Route exact path="plan_de_estudio_y_asignaturas/plan_de_estudio" element={<PlanEstudioContainer />} />
            <Route exact path="plan_de_estudio_y_asignaturas/curso" element={<CursoContainer />} />
            <Route exact path="plan_de_estudio_y_asignaturas/tipos_de_mecanismos" element={<TipoMecanismoContainer />} />
            <Route exact path="plan_de_estudio_y_asignaturas/tipos_de_estado_de_cursos" element={<TipoEstadoCursoContainer />} />
            
            {/* TESORERIA */}
            <Route exact path="tesoreria/tipo_derecho_pecuniario" element={<TipoDeDerechoPecunario/>} />
            <Route exact path="tesoreria/documento_pecuniario" element={<DocumentoPecunario />} />  
            <Route exact path="tesoreria/tipo_de_cuenta" element={<TipoCuenta />} /> 
            <Route exact path="tesoreria/medio_pago" element={<MetodoDePago />} /> 
            
            
            {/* PERFILES */}
            <Route  path="perfiles/tipo_de_perfil" element = {<TipoPerfil/>}></Route>
            <Route  path="perfiles/tipo_de_identidad" element = {<TipoIdentidad />}></Route>
            {/* <Route  path="perfiles/genero" element = {<Genero />}></Route> */}
            <Route  path="perfiles/sexo" element = {<SexoBiologicoContainer />}></Route>
            <Route  path="perfiles/ciudad" element = {<CiudadContainer />}></Route>
            {/* <Route  path="perfiles/genero" element = {<TiposTercero />}></Route> */  } 
            <Route  path="perfiles/tipos_tercero" element = {<TiposTercero />}></Route>  
            <Route  path="perfiles/tipos_tercero_de_personas" element = {<TiposTerceroPersona />}></Route>  
            <Route  path="perfiles/genero" element = {<TipoIdentidad />}></Route>
            
            <Route  path="perfiles/persona" element = {<Persona />}></Route>
            <Route  path="perfiles/sexo" element = {<Genero />}></Route>
            <Route  path="perfiles/extracto" element = {<Estrato/>}></Route>
            <Route  path="perfiles/departamentos" element = {<Departamento />}></Route>
            <Route  path="perfiles/estado_civil" element = {<EstadoCivil />}></Route>
            <Route  path="perfiles/pais" element = {<Paises />}></Route>
            <Route  path="perfiles/perfil" element = {<Perfil />}></Route>

            {/* <Route exact path="matricula/estudiante" element={<Estudiante></Estudiante>} /> */}
            {/* <Route exact path="plan-estudio/plan-estudio" element={<PlanEstudio></PlanEstudio>} />
            */}

            {/* seguridad */}
            <Route  path="seguridad_y_permisos/ventanas" element = {<Ventanas/>}></Route>
            <Route  path="seguridad_y_permisos/roles" element = {<Roles/>}></Route>
            <Route  path="seguridad_y_permisos/usuarios" element = {<Usuarios/>}></Route>
            {/* <Route  path="perfiles/ventanas" element = {<Perfil />}></Route> */}

           
            <Route exact path="not-found" element={<NotFound404 />} />
            
          </Route>   
          <Route path="*"  element={<Navigate to="/inicio" replace />}  />
        </Routes>     
            </Suspense>
      </div>
  );
}

// const ProtectedRoute = ({ user, children }) => {
//   if (!user) {
//     return <Navigate to="/landing" replace />;
//   }

//   return children;
// };



const NotFound404 =()=><>
<NavbarHome></NavbarHome>
hi not found component_</>

export default App;
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Dimensiones.css'
export function Dimensiones(){
  const dimensionState =  useSelector((state) => state.user.dimension);
  const dispatch = useDispatch();
  const [dimension,setDimension] = useState(null);
const isAuth =  useSelector((state) => state.user.isAuthenticated);
  return<>
  <div className="dimensiones-container">
  <div className='dimensiones-content'>
    <h1>Dimensiones</h1>

  </div>
  </div>
  </>
}
import React, { useState } from 'react'
import { users } from '../data/db'
import Alert from './Alert';
import { formatDate, formatTime } from '../helpers';
import { addHorario } from '../services/api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function RegisterDay() {

  const [nombre, setNombre]  = useState('');
  const [access, setAccess] = useState('');
  const [alert, setAlert] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (nombre === '' || access === '') {
      setAlert('*Todos los campos son obligatorios');
      setTimeout(() => {
        setAlert('')
      }, 2000);
      return;
    }

    const data = {nombre, access, fecha: formatDate(Date.now()), hora: formatTime(Date.now())};

    const resultado = await Swal.fire({
      title: "¿Está seguro?",
      text: `¡Se registrara: ${access}!`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#55e6a5",
      cancelButtonColor: "#dc2626",
      confirmButtonText: "¡Si, enviar!",
      cancelButtonText: "¡No, cancelar!",
      preConfirm: async() => {

        try {
          const result = await addHorario(data);; 
          if (Object.keys(result)[0] === 'error') {
              throw new Error('No se enviaron los datos');
          } else {
              return result;
          }
            
        } catch (error) {
          Swal.showValidationMessage(`
              Request failed: ${error}
          `);
        }
      }          
  });
  if (resultado.isConfirmed) {            
      const alertSuccess = Swal.fire({
          title: "Enviado!",
          text: "Se enviaron los datos correctamente.",
          icon: "success",
          confirmButtonText: 'Ok'
      });

      if ((await alertSuccess).isConfirmed || (await alertSuccess).dismiss) {
        navigate('/');
      }
  }
  }

  return (
    <form onSubmit={handleSubmit} className='formulario'>
      <legend className='formulario__legend'>Registro de entrada y salida</legend>
      <div>
        <label className='formulario__heading' htmlFor="nombre">Digita tu nombre</label>
        <select name="nombre" id="nombre" className='formulario__select' value={nombre} onChange={e => setNombre(e.target.value)}>
          <option value='' disabled hidden>-- Elige tu nombre --</option>
          { users.map( (user, i) => 
            <option value={user.name} key={i}>{user.name}</option>
          )}
        </select>
      </div>

      <div>
        <label className='formulario__heading' htmlFor="pago">Registra entrada/salida</label>
        <select name="pago" id="pago" className='formulario__select' value={access} onChange={e => setAccess(e.target.value)}>
          <option value='' disabled hidden>-- Selecciona --</option>
          <option value='Entrada'>Entrada</option>
          <option value='Salida'>Salida</option>
        </select>
      </div>

      {alert && <Alert>{alert}</Alert>}
      
      <div className="formulario__botones">
        <input type="submit" className='formulario__btn formulario__btn--submit'/>
      </div>
    </form>
  )
}

export default RegisterDay
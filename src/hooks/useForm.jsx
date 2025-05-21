import { useState } from "react";
import Swal from 'sweetalert2'
import { formatDate, formatTime } from "../helpers";
import { addSale } from "../services/api";
import { productos, servicios } from "../data/db";


export default function useForm() {

    const [cells, setCells] = useState(true);
    const [venta, setVenta] = useState('');
    const [changeDisplay, setChangeDisplay] = useState(false);
    const [nombre, setNombre] = useState('');
    const [pago, setPago] = useState('');

    const [alert, setAlert] = useState('');


    const handleCells = (boolean) => {
        setCells(boolean);
        setVenta('')
    }

    const guardarVenta = (nombre)=> {
        setVenta(nombre);
    }

    const sigPag = (e) => {
        e.preventDefault();
        if (venta === '') {
            crearAlerta('*Elige un campo');
            return;
        } 

        setChangeDisplay(true);
    }

    const guardarNombre = (e)=> {
        setNombre(e.target.value);
    }

    const guardarPago = (e) => {
        setPago(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (nombre === '') {
            crearAlerta('*El campo nombre es obligatorio');
            return;
        }

        if( pago === '' && venta !== 'C-G') {
            crearAlerta('*El campo pago es obligatorio');
            return;
        }

        const isService = servicios.some( servicio => servicio.sale === venta);
        let data;

        if (isService) {
            const servicioObj = servicios.filter( service => service.sale === venta)[0];
            data = {...servicioObj};
        } else {
            const productoObj = productos.filter( producto => producto.sale === venta)[0];
            data = {...productoObj}
        }

        data = {
            ...data, 
            fecha: formatDate(Date.now()), 
            hora: formatTime(Date.now()), 
            nombre,
            pago,
        }

        const resultado = await Swal.fire({
            title: "¿Está seguro?",
            // text: `¡Se registrara: ${venta} - ${nombre}!`,
            html: `
                <div class='modal'>
                    <p>Se registrara la siguiente informacion:</p>
                    <img src='/${data.img}.png'/> 
                    <p>${venta} ${pago ? `- ${pago}` : ''} - ${nombre}</p>
                </div>
            `,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#55e6a5",
            cancelButtonColor: "#dc2626",
            confirmButtonText: "¡Si, enviar!",
            cancelButtonText: "¡No, cancelar!",
            preConfirm: async() => {

                try {
                    const result = await addSale(data); 
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
                location.reload();
            }

        }
    }

    const crearAlerta = (mensaje) => {
        setAlert(mensaje);
        setTimeout(() => {
            setAlert('')
        }, 2000);
    }
    
    const handleChangeDisplay = () => {
        location.reload();
    }

    return {
        nombre,
        pago,
        cells,
        changeDisplay,
        alert,
        handleCells,
        venta,
        guardarVenta,
        sigPag,
        guardarNombre,
        guardarPago,
        handleSubmit,
        handleChangeDisplay,
    }

}
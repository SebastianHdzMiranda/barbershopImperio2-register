import React, { useEffect, useState } from 'react'
import { readSale } from '../services/api';
import { formatDate } from '../helpers';
import { users } from '../data/db';

function DailyTotal() {

    const [data, setData] = useState([]);

    // const usersOnly = [
    //     { name: 'BarberoA'},
    //     { name: 'BarberoB'},
    //     { name: 'BarberoC'},
    //     { name: 'BarberoD'},
    // ]
    useEffect(() => {
        consultarApi();
        async function consultarApi() {
            const data = await readSale();
    
            // Almacenar datos del dia
            const dataNow = data.filter( registro => registro.Fecha === formatDate(Date.now()));
            setData(dataNow);

            // console.log(dataNow);

            // setData(dataNow.filter( barbero => 
            //     ["BarberoA", "BarberoB", "BarberoC", "BarberoD"].includes(barbero.Nombre)
            // ))
        }
    }, []);

    const showTotals = (user = 'all') => {
        if (user === 'all') {
            const total = data.reduce( (total, user) => total + +user.Precio , 0);
            return total;
        }
        const dataUser = data.filter( registro => registro.Nombre === user);
        const total = dataUser.reduce( (total, user) => total + +user.Precio , 0);

        return total;
    }
    
    return (
        <div className='dailyTotal'>
            <h2 className='dailytotal__heading'>Total del dia {formatDate(Date.now())}</h2>

            {users.map( (user, i) => 
                <div className="dailyTotal__user" key={i}>
                    <p>{user.name}</p>
                    <p>Total: <span className='dailyTotal__price'>${showTotals(user.name)}</span>
                    </p>
                </div>
            )}
            <div className="dailyTotal__total">
                <p>Global: <span className='dailyTotal__price'>${showTotals()}</span>
                </p>
            </div>
            

        </div>
    )
}

export default DailyTotal;
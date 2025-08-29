import { v4 as uuidv4 } from 'uuid';

export const servicios = [
    {id:uuidv4(), img: 'adulto', sale:'Corte Adulto', price: 120}, 
    {id:uuidv4(), img: 'adulto', sale:'$100 (1x1)', price: 100}, 
    {id:uuidv4(), img: 'niho', sale:'Corte Niño', price: 100},
    {id:uuidv4(), img: 'barba', sale:'Barba', price: 70},
    {id:uuidv4(), img: 'bigote', sale:'Bigote', price: 50},
    {id:uuidv4(), img: 'adultoCD', sale:'Corte Adulto C/D', price: 160},
    {id:uuidv4(), img: 'nihoCD', sale:'Corte Niño C/D', price: 140},
    {id:uuidv4(), img: 'cejas', sale:'Arreglo de Cejas', price: 50},
    {id:uuidv4(), img: 'adultoConBarba', sale:'Adulto Con Afeitado', price: 170},
    {id:uuidv4(), img: 'adultoConBarba', sale:'Corte y arreglo de barba', price: 190},
    {id:uuidv4(), img: 'corteBarbaDisenho', sale:'Corte Barba C/D', price: 210},
    // {id:uuidv4(), img: 'ritualBarba', sale:'Ritual Barba', price: 120},
    // {id:uuidv4(), img: 'servicioVip', sale:'Servicio Vip', price: 300},
    {id:uuidv4(), img: 'c-1', sale:'C-1', price: 60}, 
    {id:uuidv4(), img: 'c-1', sale:'C-2', price: 50},
    {id:uuidv4(), img: 'c-1', sale:'C-G', price: 0},
    {id:uuidv4(), img: 'corteBarbaToalla', sale:'Corte Barba y Toalla', price: 210},
    {id:uuidv4(), img: 'corteCDPigmentado', sale:'Corte C/D Pigmentado', price: 180},
    {id:uuidv4(), img: 'corteBarbaToallaPigmentado', sale:'Corte / Barba / Toalla / Pig', price: 220},
    {id:uuidv4(), img: 'discap', sale:'Corte Discap', price: 100},
    {id:uuidv4(), img: 'discap', sale:'Corte Discap Niño', price: 80},
    {id:uuidv4(), img: 'complemento', sale:'Complemento 1', price: 10},
    {id:uuidv4(), img: 'complemento', sale:'Complemento 2', price: 20},
    {id:uuidv4(), img: 'complemento', sale:'Complemento 3', price: 30},
    {id:uuidv4(), img: 'complemento', sale:'Complemento 4', price: 50},
    {id:uuidv4(), img: 'complemento', sale:'Complemento 5', price: 80},
    {id:uuidv4(), img: 'club', sale:'Club (prim)', price: 80},
    {id:uuidv4(), img: 'club', sale:'Club (sec)', price: 100},

];

export const productos = [
    {id:uuidv4(), img: 'nishman', sale: 'Nishman', price: 210},
    {id:uuidv4(), img: 'FixMe', sale: 'FixMe', price: 120},
    {id:uuidv4(), img: 'baregk', sale: 'Baregk', price: 100},
    {id:uuidv4(), img: 'barbiux', sale: 'Barbiux', price: 190},
    {id:uuidv4(), img: 'nishmanP0', sale: 'Nishman p0', price: 240},
]

export const users = [
    { name: 'BarberoA'},
    { name: 'BarberoB'},
    { name: 'BarberoC'},
    { name: 'BarberoD'},
    { name: 'BarberoE'},
    { name: 'BarberoF'},
    { name: 'BarberoG'},
    { name: 'BarberoH'},
]

export const pagos = [
    { name: 'Targeta'},
    { name: 'Transferecia'},
    { name: 'Efectivo'},
]
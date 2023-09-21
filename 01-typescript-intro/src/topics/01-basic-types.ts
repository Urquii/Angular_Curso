const name: string = 'Strider';
let hpPoints: number | 'FULL'= 95;
const isAlive: boolean = true;

/* Este parametro no lo coge porque en la variable esta declarado
que solo acepte numeros o la cadena FULL
hpPoints = 'Hola mundo'
*/
hpPoints = 'FULL'

console.log({
    name, hpPoints, isAlive
})


export {};
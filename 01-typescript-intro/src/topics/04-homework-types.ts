/*
    ===== Código de TypeScript =====
*/
interface SuperHero {
    name:string;
    age:number;
    address : Address;
    showAddress : () => string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}

interface Address {
    calle: string;
    pais: string;
    ciudad: string;
}

const address = superHeroe.showAddress();
console.log( address );




export {};
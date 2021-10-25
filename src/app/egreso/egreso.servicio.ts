import { Egreso } from "./egreso.model";

export class EgresoServicio
{
    egresos: Egreso[]=[
        new Egreso('Compra television', 2000),
        new Egreso('Alimentos', 250)
    ];

    eliminar(egreso: Egreso)
    {
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1); //Eliminara el elemento del indice unicamente
    }
}
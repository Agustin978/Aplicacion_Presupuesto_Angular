import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.servicio';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ingresos: Ingreso[]=[];
  egresos: Egreso[]=[];

  constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio){
    this.ingresos = ingresoServicio.ingresos;
    this.egresos= egresoServicio.egresos;
  }

  getIngresoTotal()
  {
    let ingresoTotal:number=0;

    this.ingresos.forEach( ingreso =>{
      ingresoTotal += ingreso.valor; 
    })
    return ingresoTotal;
  }

  getEgresoTotal()
  {
    let egresoTotal:number=0;

    this.egresos.forEach( egreso => {
      egresoTotal += egreso.valor;
    })

    return egresoTotal;
  }

  getPresupuesto()
  {
    let ingresos = this.getIngresoTotal();
    let egresos = this.getEgresoTotal();

    let presupuesto = ingresos - egresos;
    return presupuesto;
  }

  
  getPorcentaje()
  {
  
    let valor:number = this.getEgresoTotal()/this.getIngresoTotal();

    return valor.toLocaleString('es-AR', {style:'percent', maximumFractionDigits:1});
    //Con esto le daba un formato a los numeros de porcentaje, sin embargo lo hago usando currency pipes
    //return valor;
  }
}

import { Component } from '@angular/core';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';
import { VentasDiaComponent } from './ventas-dia/ventas-dia.component';
import { CapturaPedidoComponent } from './captura-pedido/captura-pedido.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports:[DetallePedidoComponent, VentasDiaComponent, CapturaPedidoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizzeria';
}

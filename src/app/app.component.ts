import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'operacao';
  data: Array<any>;

  constructor(){
    this.data = [
        { ticket: '132456789', placa: 'HHH000', cliente: 'Maúricio', entrada: '08/09/2021'},
        { ticket: '546945987', placa: 'HHH001', cliente: 'Marcelo', entrada: '08/09/2021'},
        { ticket: '577558546', placa: 'HHH002', cliente: 'Willian', entrada: '08/09/2021'},
        { ticket: '987522488', placa: 'HHH003', cliente: 'Fábio', entrada: '08/09/2021'},
        { ticket: '132456789', placa: 'HHH004', cliente: 'Gabriel', entrada: '08/09/2021'},
        { ticket: '546785987', placa: 'HHH005', cliente: '', entrada: '09/09/2021'},
        { ticket: '564558546', placa: 'HHH006', cliente: 'Vinicius', entrada: '09/09/2021'},
        { ticket: '924522488', placa: 'HHH007', cliente: '', entrada: '09/09/2021'},
        { ticket: '134456789', placa: 'HHH008', cliente: 'Daian', entrada: '09/09/2021'},
        { ticket: '546923487', placa: 'HHH009', cliente: 'Pedro', entrada: '09/09/2021'},
        { ticket: '575583246', placa: 'HHH010', cliente: '', entrada: '09/09/2021'},
        { ticket: '987523388', placa: 'HHH011', cliente: 'Henrique', entrada: '09/09/2021'},
    ];
  }
}


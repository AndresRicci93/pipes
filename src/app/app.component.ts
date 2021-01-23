import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   

        name: string = 'Capitan America';
  
        array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        characters: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki','Groot'];
        PI: number = Math.PI;
        porcentaje: number = 0.234;
        salary: number = 1234.5;
        NewDate: Date = new Date();
        valuePromise = new Promise<string>((resolve) => {

         setTimeout(() => {
           resolve('data has arrived')
         }, 4500)
         
          
       })

    hero= {
          name: 'Logan',
          key: 'Wolverine',
          age: 500,
          address: {
            street: 'First Av',
            home: 25
          }
        }
}
  
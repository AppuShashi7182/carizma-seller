import { Component } from '@angular/core';
export interface ITestimonials {
  body: string,
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}
  testimonials: ITestimonials[] = [{ body: 'Smooth Experiance with Carizma with a satisfactory Deal', name: 'Jon Doe sold car ' }, { body: 'Smooth Experiance with Carizma with a satisfactory Deal', name: 'Jon Doe sold car ' }, { body: 'Smooth Experiance with Carizma with a satisfactory Deal', name: 'Jon Doe sold car ' }];
  ngOnInit(): void {}

  public executeSelectedChange = (event: any) => {
    console.log(event);
  };
}

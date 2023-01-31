import { NgForm, NgModel } from '@angular/forms';
import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  log(x:NgModel){
    console.log(x);
  }
  onSubmit(f:NgForm){
    console.log(f);
  }
}

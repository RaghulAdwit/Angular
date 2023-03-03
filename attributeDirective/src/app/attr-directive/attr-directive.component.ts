import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-directive',
  templateUrl: './attr-directive.component.html',
  styleUrls: ['./attr-directive.component.scss']
})
export class AttrDirectiveComponent {
  name: string = "";
  name1: string = "";
  name2: string = "";
  modelChange: string = "demo";
  getvalue(event: Event): string {
    return (event.target as HTMLInputElement).value
  }
  getname(firstname: string) {
    this.name1 = firstname;
  }
  change() {
    alert(this.modelChange);
  }
}

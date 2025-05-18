import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { single } from 'rxjs';

@Component({
  selector: 'app-check',
  imports: [FormsModule, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, RouterOutlet],
  templateUrl: './check.component.html',
  styleUrl: './check.component.css'
})
export class CheckComponent {
count = signal(10);
x = signal(100);
y = signal(29);
z = computed(()=> this.x()+this.y());
display = true;
name :string = "";
gender= signal("");
isCheck = signal(false);
color="red";
user : WritableSignal<string| number> = signal<string|number>(11);
updateValue()
  {
  this.x.set(this.x()+1);
  }

  constructor()
  {
    effect(()=>{
      console.log(this.z());
      console.log(this.isCheck());
      console.log(this.gender());
    })
  }
}

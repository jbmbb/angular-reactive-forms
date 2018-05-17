import { states, Address, Hero } from '../data-model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnChanges {
  registerForm: FormGroup;
  states = states;
  @Input() hero: Hero;


  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group(new Address()),
      power: '',
      sidekick: ''
    });
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  // 自定义重置form
  rebuildForm() {
    this.registerForm.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }


}

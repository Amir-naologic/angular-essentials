import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, Validators, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  favouriteColorControl = new FormControl('');
  name = new FormControl('');

  private formBuilder = inject(FormBuilder);

  updateName(){
    this.name.setValue('Jamal');
  }

  profileForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.maxLength(50)]],
    lastName: ['', Validators.required],
    address: this.formBuilder.group({
      street: '',
      city: '',
      state: '',
      zip: ''
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')])
  })

  onSubmit(){
    console.log(this.profileForm.value);
  }

  updateProfile(){
    this.profileForm.patchValue({
      firstName: 'Bugja',
      address: {
        street: 'lil mac'
      }
    })
  }

  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(){
    this.aliases.push(this.formBuilder.control(''));
  }

  removeAlias(index: number){
    this.aliases.removeAt(index);
  }

}

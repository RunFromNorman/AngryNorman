import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  playerForm!: FormGroup;

  imageSrc = '';

  imageButtons = [
    {
      src: 'assets/cartoon1.jpg',
    },
    {
      src: 'assets/cartoon2.jpg',
    },
    {
      src: 'assets/cartoon3.jpg',
    },
    {
      src: 'assets/cartoon4.jpg',
    },
    {
      src: 'assets/cartoon5.jpg',
    },
    {
      src: 'assets/cartoonlast.jpg',
    },
  ]



  constructor(private router: Router) {

  }

  // form for entering username to play.
  ngOnInit(): void {
    this.imageSrc = 'assets/cartoon1.jpg';
    this.playerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  // action of the play form.
  onEnter() {
    if (this.playerForm.valid) {
      // redirected to the different route and passing username as data.
      this.router.navigate(['game', { user: this.playerForm.get('username')?.value }]);
    }
  }
  onClick(imageNameObject: { src: string; }) {
    this.imageSrc = imageNameObject.src;
  }
}

import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, RouterLink],
  template: `
    <!--
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     This is a starter component and can be deleted.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     Delete this file and get started with your project!
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     -->
    <style></style>
    <div>
      <ul>
<!--        <li><a routerLink="home">Home</a></li>-->
<!--        <li><a routerLink="about">About</a></li>-->
<!--        <li><a routerLink="contact">Contact</a></li>-->
<!--        <li><a routerLink="navbar">Nav Bar</a></li>-->
        <!-- Add other menu items and links -->
      </ul>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}

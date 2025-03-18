import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../../week2/highlight.directive';
import { DraggableDirectiveDirective } from '../../../week2/DraggableDirective.directive';

@Component({
  selector: 'app-about',
  imports: [CommonModule, HighlightDirective, DraggableDirectiveDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  color = '';
}

import { Component } from '@angular/core';
import { NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-nav-bar-component',
  styleUrl: './nav-bar-component.css',
  templateUrl: './nav-bar-component.html',
  standalone: true
})

export class NavBarComponent {
};

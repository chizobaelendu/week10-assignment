import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [NgClass, RouterLink, RouterOutlet],
  selector: 'app-opportunities',
  styleUrl: './opportunities.css',
  templateUrl: './opportunities.html',
})

export class Opportunities {
  anyUnsavedChanges:boolean = true;
};

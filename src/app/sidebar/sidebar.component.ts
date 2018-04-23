import { Component, OnInit } from '@angular/core';
import { ThirukuralService } from '../thirukural.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private thirukuralSections: Array<String>;
  constructor(private thirukuralService: ThirukuralService) { 
    this.thirukuralSections = this.thirukuralService.getSections();
    console.log(this.thirukuralSections);
  }

  ngOnInit() {
  }

}

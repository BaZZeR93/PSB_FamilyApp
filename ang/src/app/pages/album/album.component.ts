import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  constructor(private userService : UserService, private router: Router) { }

  expandImg: HTMLImageElement;

  ngOnInit(): void {
  }

  myFunction(img: string) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    // expandImg.src = imgs.src;
    (<HTMLImageElement>document.getElementById("expandedImg")).src = (<HTMLImageElement>document.getElementById(img)).src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    // imgText.innerHTML = imgs.alt;
    (<HTMLElement>document.getElementById("expandedImg")).innerHTML = (<HTMLImageElement>document.getElementById(img)).alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }
}

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
  slideIndex: number;

  ngOnInit(): void {
    this.slideIndex = 1;
    this.showSlides(this.slideIndex);
  }

  // Next/previous controls
  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    var i;
    // var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("demo");
    var slides = Array.from(document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>)
    var dots = Array.from(document.getElementsByClassName('demo') as HTMLCollectionOf<HTMLElement>)
    var captionText = document.getElementById("caption");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
    captionText.innerHTML = dots[this.slideIndex-1].id;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Content } from 'src/app/models/contentEnum';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  user: any;
  users: User[];
  expandImg: HTMLImageElement;
  slideIndex: number;

  public ContentEnum = Content;
  public selectedContent: Content = Content.Wall;
  public moneyToAdd: number = 0;

  constructor(
    private router: Router,
    private userService: UserService)
  {}

  ngOnInit() {
    this.slideIndex = 1;
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  switchTab(tab: Content) {
    this.selectedContent = tab;

    if (tab === Content.Budget) {
      this.getUsers();
    }
    if (tab == Content.ToAlbum) {
      this.slideIndex = 1;
    }
  }

  logoutUser() {
    this.router.navigate(['/login']);
  }

  getUsers() {
    this.userService.listUser().subscribe((data: any) => {
        this.users = data;
    });
  }

  addMoney() {
    this.userService.addMoney(this.user.id, this.moneyToAdd).subscribe(() => {
      this.user.budget += this.moneyToAdd;
    });
  }

  tapHomeButton() {
    this.switchTab(Content.Wall);
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

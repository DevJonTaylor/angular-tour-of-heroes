import { Component, OnInit } from '@angular/core';
import { Link } from '../links'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links: Array<Link> = [
    { url: 'heroes', text: 'Heroes' },
    { url: 'dash', text: 'Dashboard' }
  ]

  ngOnInit(): void {}

}

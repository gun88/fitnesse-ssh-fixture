import {AfterViewInit, Component} from '@angular/core';
import Glide from 'src/assets/glide/glide.min.js';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  projects: Project[] = [
    {
      name: 'fitnesse-bootstrap-4',
      img: 'https://gun88.github.io/fitnesse-bootstrap-4/assets/images/splash-table.png',
      href: 'https://gun88.github.io/fitnesse-bootstrap-4',
    },
    {
      name: 'fitnesse-ssh-fixture',
      img: 'https://gun88.github.io/fitnesse-ssh-fixture/assets/images/splash-table.png',
      href: 'https://gun88.github.io/fitnesse-ssh-fixture',
    },
    {
      name: 'fitnesse-radius-fixture',
      img: 'https://gun88.github.io/fitnesse-radius-fixture/assets/images/splash-table.png',
      href: 'https://gun88.github.io/fitnesse-radius-fixture',
    }
  ]
  ;

  constructor() {
  }

  ngAfterViewInit() {
    new Glide('.glide', {
      type: 'carousel',
      autoplay: 4000,
      animationDuration: 800,
      animationTimingFunc: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
      perView: 3,
      hoverpause: true
    }).mount();
  }


}

interface Project {
  name: string;
  img: string;
  href: string;
}

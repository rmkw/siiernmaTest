import { Component } from '@angular/core';


@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {


scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

}

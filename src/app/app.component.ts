import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';
  title = 'ng4-complete-guide';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  title = 'ActivityHub Home';
  subtitle = 'Organize tasks and schedules effortlessly.';
  imageUrl = 'assets/welcome-image.png'; // Reemplazar con la ruta de tu imagen
  buttonText = 'Get started';
}

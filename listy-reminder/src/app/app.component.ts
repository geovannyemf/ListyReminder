import { Component } from '@angular/core';

const sharedClasses = {
  button: 'text-left w-full py-2',
  hoverBg: 'hover:bg-muted',
  textMuted: 'text-muted-foreground',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listy-reminder';
}


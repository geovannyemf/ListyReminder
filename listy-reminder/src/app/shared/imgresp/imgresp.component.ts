import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imgresp',
  templateUrl: './imgresp.component.html',
  styleUrls: ['./imgresp.component.css']
})
export class ImgrespComponent {
  @Input() src?: string;
  @Input() alt?: string;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  @Input() collapsed_Body = false;
  @Input() screenWidth_Body = 0;
  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed_Body && this.screenWidth_Body > 768) {
      styleClass = 'body-trimmed';
    } else if (
      this.collapsed_Body &&
      this.screenWidth_Body <= 768 &&
      this.screenWidth_Body > 0
    ) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}

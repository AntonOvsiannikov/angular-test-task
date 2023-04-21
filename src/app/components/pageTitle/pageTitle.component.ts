import {Component, Input} from '@angular/core';

@Component ({
  selector:'app-page-title',
  templateUrl: './pageTitle.component.html',
  styleUrls: ['./pageTitle.component.scss']
})
export class PageTitleComponent {
  @Input() title:string
}
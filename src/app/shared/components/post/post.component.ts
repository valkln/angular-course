import {Component, Input, OnInit} from '@angular/core';
import {PostI} from "../../interfaces";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: PostI
  constructor() { }

  ngOnInit() {
  }

}

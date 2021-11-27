import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from "../../shared/posts.service";
import {PostI} from "../../shared/interfaces";
import {Subscription} from "rxjs";
import {AlertService} from "../shared/services/alert.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  posts: PostI[] = []
  postsSubscription: Subscription
  deleteSubscription: Subscription
  search = ''
  constructor(
    private postsService: PostsService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts
    })
  }

  ngOnDestroy() {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe()
    }
    if (this.deleteSubscription) {
      this.deleteSubscription.unsubscribe()
    }
  }

  remove(id: string) {
    this.postsService.deletePost(id).subscribe(()=> {
      this.posts = this.posts.filter(post => post.id !== id)
      this.alert.warning('Post is deleted')
    })
  }
}

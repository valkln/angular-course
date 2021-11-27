import {Pipe, PipeTransform} from "@angular/core";
import {PostI} from "../../shared/interfaces";

@Pipe({name: 'postSearch'})
export class PostSearchPipe implements PipeTransform {
  transform(posts: PostI[], search= ''): PostI[] {
    if (!search.trim()) {
      return posts
    }
    return posts.filter(post => {
      return post.title.toLowerCase().includes(search.toLowerCase())
    })
  }
}

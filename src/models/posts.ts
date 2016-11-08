/**
 * Created by joseph on 11/6/16.
 */
export interface Post {
  id: number;
  url: string;
  title: string;
  image: string;
  color: string;
  excerpt: string;
  children: Post[];
}

export interface PostContent {
  id: number;
  modified: string;
  link: string;
  title: RenderedItem;
  content: RenderedItem;
  excerpt: RenderedItem;
  better_featured_image: Media;
}

export interface RenderedItem {
  rendered: string;
  fixed: string;
}

export interface Media {
  id: number;
  source_url: string;
}

/**
 * Created by joseph on 11/6/16.
 */
export interface Post {
  id: number;
  date: string;
  link: string;
  title: RenderedItem;
  content: RenderedItem;
  excerpt: RenderedItem;
  better_featured_image: Media;
}

export interface RenderedItem {
  rendered: String;
}

export interface Media {
  id: number;
  source_url: string;
}

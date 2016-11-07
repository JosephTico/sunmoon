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

export interface RenderedItem {
  rendered: String;
}

export interface Media {
  id: number;
  source_url: string;
}

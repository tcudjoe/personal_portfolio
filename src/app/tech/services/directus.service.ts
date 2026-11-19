import {Injectable} from '@angular/core';
import {createDirectus, readItems, rest} from "@directus/sdk";
import {Schema} from "../models/schema";
import {environment} from "../../../environments/environment.development";
import {from, map, Observable} from "rxjs";
import {Blog} from "../models/blog";

@Injectable({
  providedIn: 'root'
})
export class DirectusService {

  private readonly directus = createDirectus<Schema>(environment.api_url).with(rest());

  constructor() {
  }

  getAllBlogs(): Observable<Blog[]> {
    return from(
      this.directus.request(readItems('blog', {
        filter: {
          status: { _eq: 'published' }
        },
        fields: [
          'id',
          'slug',
          'title',
          'excerpt',
          'status',
          'date_created',
          'date_updated',
          'archived',
          'featured_image',
          {
            sections: [
              'collection',
              {
                item: {
                  block_text: ['id', 'body_text'],
                  block_image: ['id', 'image', 'caption'],
                  block_code: ['id', 'code_block', 'language', 'date_created', 'date_updated']
                }
              }
            ],
            author: ['id', 'name', 'description','image', 'date_created', 'date_updated', 'archived'],
            category: ['id', 'name', 'description', 'archived', 'date_created', 'date_updated'],
            tags: ['id', 'name', 'archived', 'date_created', 'date_updated']
          },
        ]
      }))
    ).pipe(
      map(blogs => blogs.map(blog => ({
        ...blog,
        readingTime: this.calculateReadingTime(blog.sections)
      })))
    );
  }

  private calculateReadingTime(sections: Blog['sections']): number {
    const text = (sections ?? [])
      .map(section => section.collection === 'block_text' ? section.item.body_text ?? '' : '')
      .join(' ')
      .replace(/<[^>]*>/g, ' ')
      .replace(/&nbsp;|&#160;/g, ' ');

    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(wordCount / 200));
  }
}

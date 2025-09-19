import BlogCard from './BlogCard.jsx'; 
import { BLOGCARD } from '../data/blog_data.js';

export default function Blog() {
  return <>
    <section className="bg-black text-white">
      <div>
        <h2 className="">Blog Posts</h2>
        <p>This is what I've learned through self-study</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {BLOGCARD.map( (blogItem) => (
            <BlogCard key={blogItem.title} {...blogItem}/>
          ))}
        </div>
      </div>
    </section>
  </>
}
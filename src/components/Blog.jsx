import BlogCard from './BlogCard.jsx'; 
import { BLOGCARD } from '../data/blog_data.js';

export default function Blog() {
  return <>
    <section className="py-10 px-6 bg-black text-white">
      <div className="flex flex-col justify-center items-center space-y-6">
        <h2 className="text-3xl font-bold">Blog Posts</h2>
        <p className="text-xl text-gray-300">This is what I've learned through self-study</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {BLOGCARD.map( (blogItem) => (
            <BlogCard key={blogItem.title} {...blogItem}/>
          ))}
        </div>
      </div>
    </section>
  </>
}
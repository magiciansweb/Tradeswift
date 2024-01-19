
import Blogs from '@/components/Blogs';
import React from 'react';

export const metadata = {
  title: "Tradeswift - Blogs page",
  description: "Generated by Tradeswift - Blogs page",
};
const BlogPage = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-2'>
        <div className="hero max-h-[600px] mb-8 rounded-lg" style={{backgroundImage: 'url(https://i.postimg.cc/pXkNhjQg/image.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md px-20 py-40">
      <h1 className="mb-5 text-5xl font-bold">Blogs</h1>
    </div>
  </div>
</div>
      
      <Blogs></Blogs>
    </div>
  );
};

export default BlogPage;
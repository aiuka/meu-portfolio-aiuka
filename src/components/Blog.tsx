
import React from 'react';
import BlogCard from './BlogCard';

const blogPosts = [
  {
    image: '/lovable-uploads/27ce0b8e-6158-49d9-b2d5-3a50673457fe.png',
    category: 'Security',
    date: 'Apr 4, 2025',
    title: 'How to Secure a Huawei Router in 5 Practical Steps',
    excerpt: 'Your Huawei router ships vulnerable. I\'ve secured dozens with HCNA and HCNP know-how. First, ditch the default admin password—mix letters, numbers, and symbols. Second, turn off remote management to stop external hacks. Third, grab the latest firmware from Huawei\'s site to fix weak spots. Fourth, create VLANs to split traffic—I did this for Angola Telecom\'s northern rollout. Last, switch on basic firewall rules to block inbound junk. Ping it from outside to test. Locked down yet?'
  },
  {
    image: 'https://i.postimg.cc/QC7qFDMs/blog-2.jpg',
    category: 'Design',
    date: 'Jan 29, 2024',
    title: 'Best fonts every designer',
    excerpt: 'When it comes to typography, choosing the right font is essential for effective design. In this article, I\'ll bring a brief overview of some of the best fonts that every designer should consider incorporating into their toolkit.'
  },
  {
    image: 'https://i.postimg.cc/W1T71QcL/blog-3.jpg',
    category: 'Design',
    date: 'Dec 20, 2023',
    title: 'Design digest #80',
    excerpt: 'Hello, my friends. In this Design Digest, I\'ll show you a curated collection of the latest trends, insights, and innovations in the design world. This edition highlights key themes and discussions that are shaping the future of design.'
  },
  {
    image: 'https://i.postimg.cc/2S0n8yxh/blog-4.jpg',
    category: 'Design',
    date: 'Nov 29, 2023',
    title: '2023 UI interactions',
    excerpt: 'As we move into 2024, 2023 was marked by the rapidly evolution of the landscape of UI interactions, driven by advancements in technology and user expectations. Dive with me in this text to see the main areas changed in this year.'
  },
  {
    image: 'https://i.postimg.cc/YCCmVkw9/blog-5.jpg',
    category: 'Design',
    date: 'Nov 12, 2023',
    title: 'The forgotten art of spacing',
    excerpt: 'In the realm of design, spacing is often an overlooked yet crucial element that can significantly impact the overall aesthetic and functionality of a composition. This post will emphasize the importance of white space, margins, and padding in creating visually appealing and effective designs.'
  },
  {
    image: 'https://i.postimg.cc/zBCBvP16/blog-6.jpg',
    category: 'Design',
    date: 'Oct 20, 2023',
    title: 'Design digest #79',
    excerpt: 'Hi, my friends. In this Design Digest I\'ll focus in the tools and resources that we use daily in our projects. Also, I\'ll include examples of software recommendations, online courses, and design communities that foster collaboration and learning.'
  }
];

const Blog = () => {
  return (
    <div className="space-y-12">
      <header>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Blog</h2>
      </header>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={index}
              image={post.image}
              category={post.category}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;

import React from 'react'
import Image from 'next/image'

const page = () => {
  const blogs = [
    {
      slug: 'first-blog',
      author: 'John Doe',
      description: 'This is the first blog post.',
      tags: ['React', 'JavaScript'],
      publishedDate: '2023-10-01',
      imageUrl: '/images/first-blog.jpg'
    },
    {
      slug: 'second-blog',
      author: 'Jane Smith',
      description: 'This is the second blog post.',
      tags: ['CSS', 'HTML'],
      publishedDate: '2023-10-02',
      imageUrl: '/images/second-blog.jpg'
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Blog Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="blog p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <Image src={blog.imageUrl} alt={blog.slug} width={500} height={300} className="rounded-t-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{blog.slug}</h2>
            <p className="mb-1 text-gray-600"><strong>Author:</strong> {blog.author}</p>
            <p className="mb-1 text-gray-600"><strong>Description:</strong> {blog.description}</p>
            <p className="mb-1 text-gray-600"><strong>Tags:</strong> {blog.tags.join(', ')}</p>
            <p className="mb-1 text-gray-600"><strong>Published Date:</strong> {blog.publishedDate}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
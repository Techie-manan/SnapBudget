import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'Understanding Bitcoin and Blockchain Basics',
    excerpt: 'Learn how Bitcoin works and why blockchain technology is revolutionary...',
    date: 'April 25, 2025',
    author: 'Satoshi Learner'
  },
  {
    id: 2,
    title: 'Top 5 Altcoins to Watch in 2025',
    excerpt: 'Explore the most promising altcoins that could outperform Bitcoin this year...',
    date: 'April 20, 2025',
    author: 'Crypto Guru'
  },
  {
    id: 3,
    title: 'How to Keep Your Crypto Wallet Secure',
    excerpt: 'Protect your digital assets with these essential security practices...',
    date: 'April 15, 2025',
    author: 'Blockchain Expert'
  }
];

const tips = [
  "Always enable two-factor authentication on exchanges.",
  "Never share your private keys with anyone.",
  "Use hardware wallets for storing large amounts of crypto.",
  "Beware of phishing scams and fake airdrops.",
  "Keep track of your investments and stay updated on crypto news."
];

const CryptoBlogPage = () => {
  return (
    <div className="min-h-screen ml-[22vw] w-[70vw] text-white px-8 py-10">
      <header className="text-center mb-12 mt-22">
        <h1 className="text-5xl font-bold mb-4 text-amber-400">Crypto Insights</h1>
        <p className="text-gray-400 text-lg">Stay updated with the latest crypto blogs and pro tips!</p>
      </header>

      <section className="mb-16 p-5 text-center">
        <h2 className="text-3xl font-bold mb-6 text-amber-300">Latest Blogs</h2>
        <div className="flex flex-col items-center gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-gray-800 w-[90%] h-fit p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold my-2">{blog.title}</h3>
              <p className="text-gray-400 mb-4">{blog.excerpt}</p>
              <div className="flex justify-between text-sm m-3 text-gray-500">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='text-center'>
        <h2 className="text-3xl font-bold mb-6 text-amber-300">Crypto Tips</h2>
        <ul className="list-none pl-5 space-y-4">
          {tips.map((tip, index) => (
            <li key={index} className="text-gray-300">{tip}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CryptoBlogPage;

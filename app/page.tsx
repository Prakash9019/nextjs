import Link from 'next/link';

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-10">Welcome to Next.js App</h1>
      <p className="text-lg text-center mt-4">This is a simple homepage for a Next.js application.</p>
      <div className="flex justify-center mt-8">
        <Link href="/about">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            About
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;

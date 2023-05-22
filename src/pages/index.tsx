import { Button } from '@/components/atoms/Button/Button';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-400">
        Hello world!
      </h1>
      <Button>Hello</Button>
    </>
  );
};

export default Home;

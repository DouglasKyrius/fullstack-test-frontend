import React from 'react';
import { Hero } from '@/sections/hero';
import { Todo } from '@/sections/todo';
import { Header } from '@/sections/Header';
import { GoodThings } from '@/sections/good-things';

export const Home = () => (
  <>
    <div className="px-6 max-w-screen-sm lg:px-10 lg:max-w-screen-2xl m-auto">
      <Header />
      <Hero />
    </div>
    <Todo />
    <div className="mt-20" />
    <div className="px-4 lg:px-10 max-w-screen-xl m-auto">
      <GoodThings />
    </div>
    <div className="mt-20" />
  </>
);

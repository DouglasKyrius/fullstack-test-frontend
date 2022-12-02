import React from 'react';
import { Hero } from '@/sections/Hero';
import { Todo } from '@/sections/todo';
import { Header } from '@/sections/Header';

export const Home = () => (
  <>
    <div className="px-10 max-w-screen-2xl m-auto">
      <Header />
      <Hero />
    </div>
    <Todo />
  </>
);

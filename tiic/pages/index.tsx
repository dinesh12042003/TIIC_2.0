import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Programs from '../components/sections/Programs';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>TIIC - Technology Innovation & Incubation Center</title>
        <meta name="description" content="Leading technology innovation and incubation center fostering entrepreneurship and digital innovation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <Hero />
        <About />
        <Programs />
        {/* Add more sections here as needed */}
      </main>

      <Footer />
    </div>
  );
}
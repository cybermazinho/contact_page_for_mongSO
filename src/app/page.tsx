'use client'

import Header from "./components/Header";
import Chat from "./components/Chat";

import Image from 'next/image';

import React, { useState } from 'react';

export default function Home() {

  const [modal, setModal] = useState(false);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-row justify-evenly items-flex-start p-24">
          <div className="info-contact animate-fade-in">
            <h1 className="text-3xl font-semibold leading-6 text-gray-900  mb-4 lg:mb-0 lg:mr-4 ">How can I contact support?</h1>
            <p className="text-sm text-gray-700 max-w-[500px]">If you have a general question or need immediate assistance, our Artificial Intelligence is ready to help. Click the button next to you to start an interactive conversation and get instant answers.</p>
            <button onClick={()=>setModal(true)} className="chat-button text-white text-sm font-semibold py-2 px-4 rounded">Start Chat</button>
          </div>
          <Image
          src="/undraw_contact_us_re_4qqt.svg" 
          alt="Descrição da imagem"
          width={500}
          height={500}
          className="img-resize animate-fade-in"
        />
      { modal && <Chat/> }
      </main>
    </>
  );
}
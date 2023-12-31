import Header from "./components/Header";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-row justify-around items-center p-24">
          <div className="info-contact">
            <h1 className="text-2xl font-semibold leading-6 text-gray-900  mb-4 lg:mb-0 lg:mr-4 ">How can I contact support?</h1>
            <p className="text-sm font-semibold leading-6 text-gray-900  mb-4 lg:mb-0 lg:mr-4 max-w-[500px]">If you have a general question or need immediate assistance, our Artificial Intelligence is ready to help. Click the button next to you to start an interactive conversation and get instant answers.</p>
            <button className="chat-button text-white font-bold py-2 px-4 rounded">Start Chat</button>
          </div>
          <Image
          src="/undraw_things_to_say_re_jpcg.svg" 
          alt="Descrição da imagem"
          width={350}
          height={250}
        />
      </main>
    </>
  );
}
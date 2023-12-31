const Chat = () => {
    return (
      <div className="fixed bottom-4 right-4 bg-white p-4 shadow-md rounded-md animate-fade-in">
        <div className="flex items-center">
          <div>
            <p className="text-sm font-semibold text-gray-700">Support aritificial intelligence (GPT 3.5)</p>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>
        <div className="mt-2">
          {/* Aqui você pode adicionar o conteúdo da conversa */}
          <p className="text-sm text-gray-800">Hello! How can I help you?</p>
        </div>
        <div className="mt-4">
          {/* Campo de texto */}
          <textarea
            className="w-full h-16 p-2 border border-gray-300 rounded-md"
            placeholder="Enter your message..."
          ></textarea>
          {/* Botão de envio (opcional) */}
          <button className="chat-button mt-2 text-white py-2 px-4 rounded-md">
            Send
          </button>
        </div>
      </div>
    );
  };
  
  export default Chat;
import { useRef, useState } from 'react';
import axios from 'axios';

import TypingIndicator from './TypingIndicator';
import ChatMessages, { type Message } from './ChatMessages';
import ChatInput, { type ChatFormData } from './ChatInput';

type chatResponse = {
  message: string;
};

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [error, setError] = useState('');
  const conversationId = useRef(crypto.randomUUID());

  const onSubmit = async ({ prompt }: ChatFormData) => {
    try {
      setMessages((prev) => [...prev, { content: prompt, role: 'user' }]);
      setIsBotTyping(true);
      setError('');
      const { data } = await axios.post<chatResponse>(
        'http://localhost:3000/api/chat',
        {
          prompt,
          conversationId: conversationId.current,
        }
      );
      setMessages((prev) => [...prev, { content: data.message, role: 'bot' }]);
    } catch (error) {
      console.log(error);
      setError('Something went wrong, try again!');
    } finally {
      setIsBotTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col flex-1 gap-3 mb-10 overflow-y-auto">
        <ChatMessages messages={messages} />
        {isBotTyping && <TypingIndicator />}
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <ChatInput onSubmit={onSubmit} />
    </div>
  );
};
export default ChatBox;

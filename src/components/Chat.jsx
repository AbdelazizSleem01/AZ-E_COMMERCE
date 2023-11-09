// import React, { useState } from 'react';
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
// import { debounce } from 'lodash';
// import logo from './img/kobe.png'
// import '../style/Chatbot.scss';

//     const API_KEY = "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";
//     const systemMessage = {
//     role: "system",
//     content: "Explain things like you're talking to a software with 2 years of experience.",
//     };

//     const Chat = () => {
//         const [isChatVisible, setIsChatVisible] = useState(false);
//         const [messages, setMessages] = useState([
//             {
//             message: "Hello, I'm AZ Chatbot! Ask me anything!",
//             sentTime: "just now",
//             sender: "ChatGPT",
//             }
//         ]);
        
//         const toggleChatVisibility = () => {
//             setIsChatVisible(!isChatVisible);
//         };
//     const [isTyping, setIsTyping] = useState(false);


//     const debouncedProcessMessageToChatGPT = debounce(processMessageToChatGPT, 100); 
//     const handleSend = async (message) => {
//         const newMessage = {
//         message,
//         direction: 'outgoing',
//         sender: "user",
//         };
//         const newMessages = [...messages, newMessage];
//         setMessages(newMessages);
//         setIsTyping(true);
//         await debouncedProcessMessageToChatGPT(newMessages);
    
//         if (message === 'What is your name?') {
//         const answer = 'My name is AZ Chatbot!';
//         setMessages([
//             ...newMessages,
//             {
//             message: answer,
//             sender: "ChatGPT",
//             sentTime: "just now",
//             },
//         ])
//     }}
    
//     async function processMessageToChatGPT(chatMessages) {
//         let apiMessages = chatMessages.map((messageObject) => {
//         let role = "";
//         if (messageObject.sender === "ChatGPT") {
//             role = "assistant";
//         } else {
//             role = "user";
//         }
//         return { role: role, content: messageObject.message };
//         });

//         const apiRequestBody = {
//         model: "gpt-3.5-turbo-16k",
//         messages: [
//             systemMessage,
//             ...apiMessages,
//         ],
//         };

//         await fetch("https://api.openai.com/v1/chat/completions", {
//         method: "POST",
//         headers: {
//             Authorization: "Bearer " + API_KEY,
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(apiRequestBody),
//         })
//         .then((data) => data.json())
//         .then((data) => {
//         setMessages([...chatMessages, {
//             message: data.choices[0].message.content,
//             sender: "ChatGPT",
//         }]);
//         setIsTyping(false);
//         })
//         .catch((error) => {
//         console.log(error);
//         setIsTyping(false);
//         });
//     }

//     return (
//         <>
//             <div className="chat">
//                 <button className='button_chat' onClick={toggleChatVisibility}>
//                     <i class="fa-regular fa-comments"></i>            
//                 </button>        
//                 <div className='mx-auto conver'>
//                 {isChatVisible && (
//                     <MainContainer className='ChatContainer animate__animated  animate__fadeIn animate__delay-.3s'>
//                         <ChatContainer className='d-flex'>
//                             <MessageList
//                                 className='MessageList'
//                                 isTyping={isTyping}
//                                 scrollBehavior="smooth"
//                                 typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" className='MessageInput'/> : null}
//                                 >
//                                 <div className='header'>
//                                     <img src={logo} alt='chatlogo' className='img-fluid'/> <p>AZ Chatbot</p>
//                                 </div>
//                                 {messages.map((message, i) => (
//                                     <>
//                                         <Message key={i} model={message}/>
//                                     </>
//                                     ))}
//                             </MessageList>
//                             <MessageInput
//                                 placeholder="Type message here"
//                                 onSend={handleSend}
//                             />
//                         </ChatContainer>
//                     </MainContainer>
//                     )}
//                 </div>
//             </div>
//             </>
//     );
//     };

// export default Chat;
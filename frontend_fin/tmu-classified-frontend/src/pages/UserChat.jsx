import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import { Link } from 'react-router-dom';
import './UserChat.css'; 
import Header from '../components/Header/Header'
import ChatFeed from './chat_components/ChatFeed';
import LoginForm from './chat_components/LoginForm';
import logo from '../assets/TMU-rgb.png';


const Chat = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
  
    return (

        <div>
            <Header />

            <ChatEngine
                height="100vh"
                projectID='c329160d-ee95-4a9f-bfcd-a7f4f3d93eac'
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            />


        </div>

    
    );
  };
  

  
  export default Chat;


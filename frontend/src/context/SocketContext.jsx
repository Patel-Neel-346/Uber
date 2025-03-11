
import React, { createContext, useEffect } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

const socket = io(`https://uber-backend-omega.vercel.app`); // Replace with your server URL

const SocketProvider = ({ children }) => {
    useEffect(() => {
        // Basic connection logic
        socket.on('connect', () => {
            if(localStorage.getItem('token') || localStorage.getItem('token1')){
                
                console.log('Connected to server');
            }else{
                socket.on('disconnect', () => {
                    console.log('Disconnected from server');
                });
            }
        });

        

    }, []);



    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
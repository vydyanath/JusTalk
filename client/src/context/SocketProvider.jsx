import React,{createContext, useContext,useMemo} from "react";
const SocketContext = createContext(null);
import {io} from "socket.io-client"
export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
}
export const SocketProvider = (props) => {
    const socket = io('localhost:8000');
    return (
    <SocketContext.Provider value = {socket}>
        {props.children}
    </SocketContext.Provider>
    )
}  
import React from "react";
import useChat from '../hooks/useChat';
import Video from './Video';
import './Room.css';
// import GridLayout from 'react-grid-layout';
// import 'react-grid-layout/css/styles.css' 
// import 'react-resizable/css/styles.css'

const Room = (props) => {

    const { peers, userVideo } = useChat(props)

    return (
        <div className="container">
            {/* // <GridLayout className="layout container" cols={12} rowHeight={30} width={1200}> */}
            <video className="styled-video" muted ref={userVideo} autoPlay playsInline />
            {peers.map((peer, index) => {
                return (
                    <Video key={index} peer={peer} data-grid={{x: 4, y: 0, w: 1, h: 2}}/>
                );
            })}
            {/* </GridLayout> */}
        </div>
    );
};

export default Room;

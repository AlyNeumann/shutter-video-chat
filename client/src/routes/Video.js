import React, { useEffect, useRef } from "react";
import './Room.css';

const Video = (props) => {
    const ref = useRef();

    useEffect(() => {
        props.peer.on("stream", stream => {
            ref.current.srcObject = stream;
        })
    }, []);

    return (
        <video id="video" className="styled-video" playsInline autoPlay ref={ref} />
    );
}

export default Video;
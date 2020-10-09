import { useState, useRef } from "react";
import { v1 as uuid } from "uuid";

const useCreateRoom = (props) => {
    console.log(props)

    const [roomId, setRoomId] = useState(null);
    const [copy, setCopy] = useState(false);
    const textAreaRef = useRef(null);
  
    function create() {
      const id = uuid();
      setRoomId(`/room/${id}`);
      console.log("clicked");
    }
    function copyUrl(e) {
      textAreaRef.current.select();
      document.execCommand("copy");
      e.target.focus();
      setCopy(true);
    }
    function open() {
      props.history.push(roomId);
    }
  
    return {copy, roomId, textAreaRef, create, copyUrl, open}

}

export default useCreateRoom;
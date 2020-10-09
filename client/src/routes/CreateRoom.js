import React from "react";
import Tooltips from "../reusable-components/ToolTip";
import GridCentered from "../reusable-components/Grid";
import useCreateRoom from "../hooks/useCreateRoom";
import cinema from "../assets/cinema-white.png";
import featherPen from "../assets/feather-pen-white.png";
import vintageCamera from "../assets/videoCameraWhite.png";
import "./Room.css";

const CreateRoom = (props) => {
  const { copy, roomId, textAreaRef, create, copyUrl, open } = useCreateRoom(
    props
  );

  return (
    <div className="background">
      {/* <GridCentered> */}
        <div className="icon-container">
          <Tooltips title="Create Meeting">
            <button className="icon-button" onClick={create}>
              <img className="icon" src={vintageCamera} />
            </button>
          </Tooltips>
        {/* </div> */}
        {roomId && (
            <>
          <div className="icon-container">
            <Tooltips title="Start Meeting">
              <button className="icon-button" onClick={open}>
                <img className="icon" src={cinema} />
              </button>
            </Tooltips>
            </div>
            <div className="icon-container">
            <Tooltips title="Copy Url">
              <button className="icon-button" onClick={copyUrl}>
                <img className="icon" src={featherPen} />
              </button>
            </Tooltips>
          </div>
          </>
        )}
    <div className="text-container">
        {roomId && (
          <form>
            <textarea
              className="text"
              ref={textAreaRef}
              defaultValue={`http://localhost:3000${roomId}`}
            />
          </form>
        )}
        </div>
    <div className="text-container">
          {copy && <p>Copied :)</p>}
          </div>
          {/* </GridCentered> */}
          </div>
    </div>
  );
};

export default CreateRoom;

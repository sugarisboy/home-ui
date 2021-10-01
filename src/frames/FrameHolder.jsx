import React from "react";
import {MainFrame} from "./MainFrame/MainFrame";

export const FrameHolder = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <MainFrame/>
      {/*<MusicFrame/>*/}
    </div>
  )
}

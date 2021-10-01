import React from "react";
import {Frame} from "../Frame";
import {MicroFrame} from "../MicroFrame";
import {useStore} from "effector-react";
import {$station} from "../../stores/StationStore";
import {parseAvatarUrl} from "../../services/station";
import {ProgressBar} from "../../components/Utils/ProgressBar";
import {MusicCover} from "../../components/Music/MusicCover";

export const MusicFrame = () => {
  const station = useStore($station)

  const player = station && station.playerState
  const title = player && player.title
  const subTitle = player && player.subtitle

  const progress = player && player.progress
  const duration = player && player.duration

  const imgUrl = parseAvatarUrl(station)

  return (
    <Frame>
      <MicroFrame>
        <span>MICRO FRAME 1</span>
      </MicroFrame>
      <MicroFrame>

        <ProgressBar/>

        {/*<ProgressBar progress={progress / duration}>
          <MusicCover src={imgUrl}/>
        </ProgressBar>*/}



      </MicroFrame>
      <MicroFrame>
        <span>MICRO FRAME 2</span>
      </MicroFrame>
    </Frame>
  )
}

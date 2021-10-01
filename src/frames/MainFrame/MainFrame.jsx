import {Frame} from "../Frame";
import './style.css'
import React from "react";
import {BackgroundContainer} from "../../components/BackgroundContainer/BackgroundContainer";
import {MusicCover} from "../../components/Music/MusicCover";
import {MusicTitle} from "../../components/Music/MusicTitle";
import {useStore} from "effector-react";
import {$station} from "../../stores/StationStore";
import {parseAvatarUrl} from "../../services/station";
import {ProgressBar} from "../../components/Utils/ProgressBar";
import {MicroFrame} from "../MicroFrame";

export const MainFrame = () => {
  const station = useStore($station)

  const player = station && station.playerState
  const title = player && player.title
  const subTitle = player && player.subtitle

  const progress = player && player.progress
  const duration = player && player.duration

  const imgUrl = parseAvatarUrl(station)

  return (
    <Frame>
      <MicroFrame fullWidth={true}>
        <BackgroundContainer src={imgUrl}>

          <ProgressBar progress={progress / duration}>
            <MusicCover src={imgUrl}/>
          </ProgressBar>

          <MusicTitle title={title} subTitle={subTitle}/>

        </BackgroundContainer>
      </MicroFrame>
    </Frame>
  )
}

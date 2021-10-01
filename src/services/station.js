import axios from "axios";
import {updateStation} from "../stores/StationStore";

const HOST = 'http://127.0.0.1:8080'

export const loadStation = () => {
  axios
    .get(HOST + '/extract/state/STATION')
    .then(r => updateStation(r.data))
}

export const parseAvatarUrl = (station) => {
    const standart = 'https://images8.alphacoders.com/458/thumb-1920-458203.jpg'
    const coverUri = station?.playerState?.extra?.coverURI || standart
    return (`http://${coverUri.replace('%%', '')}1000x1000`)
}

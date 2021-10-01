import {createStore, createEvent} from 'effector'

export const $station = createStore(null)

export const updateStation = createEvent()

const updateStationStore = (state, data) => {
  return {...data}
}

$station.on(updateStation, updateStationStore)

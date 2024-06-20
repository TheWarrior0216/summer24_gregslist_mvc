import { AppState } from "../AppState.js"
import { House } from "../models/House.js"

class HouseService {
  destroyHome(homeID) {

    const homes = AppState.houses
    const foundHome = homes.findIndex((house) => house.id == homeID)
    homes.splice(foundHome, 1)
  }
  createHouse(houseData) {
    debugger
    const home = AppState.houses
    const newHome = new House(houseData)

    home.push(newHome)
  }


}
export const houseService = new HouseService
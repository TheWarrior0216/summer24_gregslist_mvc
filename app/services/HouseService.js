import { AppState } from "../AppState.js"
import { House } from "../models/House.js"

class HouseService {
  createHouse(houseData) {
    debugger
    const home = AppState.houses
    const newHome = new House(houseData)

    home.push(newHome)
  }


}
export const houseService = new HouseService
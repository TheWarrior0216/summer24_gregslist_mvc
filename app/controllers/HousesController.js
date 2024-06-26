import { AppState } from "../AppState.js"
import { Forming } from "../models/Form.js"
import { houseService } from "../services/HouseService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"

export class HousesController {

  constructor() {
    AppState.on('houses', this.drawHouse)
    this.drawHouse()
    this.drawForm()
  }
  drawForm() {
    setHTML('form', Forming.someFormTemplate)
  }
  drawHouse() {
    let houses = ''
    AppState.houses.forEach((house) => houses += house.houseHTMLTemplate)
    setHTML('House', houses)
  }
  createHome() {
    event.preventDefault()
    const form = event.target
    const houseData = getFormData(form)
    debugger
    houseService.createHouse(houseData)

    // @ts-ignore
    form.reset()
  }
  destroyHome(ID) {
    houseService.destroyHome(ID)
  }
}
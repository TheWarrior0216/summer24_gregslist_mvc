export class House {
  /**
   * @param {{ name: string; model: string; year: Date; imgUrl: string; price: number; sqft: number; description: string; bathrooms: number; bedrooms: number; }} data
   */
  constructor(data) {
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }
  get houseHTMLTemplate() {
    return `
<div class="col-12">
      <div class="row m-5 house-card">
        <div class="col-6 px-0 house-card">
          <img src="${this.imgUrl}" alt="House">
        </div>
        <div class="col-6 px-0 text-start">
          <div class="p-4">
            <h2 class ="pb-2" >${this.description}</h2>
            <h3 class ="pb-2">${this.year}</h3>
            <h3 class ="pb-2">$${this.price}</h3>
            <h4 class ="pb-2"> ${this.sqft} sqft</h4>
            <h4 class ="pb-2"> ${this.bedrooms} bedroom ${this.bathrooms} bath</h4>
            <div class= "text-end pt-5">
            <button class = "btn btn-outline-info"> Remove Listing </button>
            </div>
          </div>
        </div>
      </div>
    </div>`
  }
}
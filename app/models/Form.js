class Form {
  get someFormTemplate() {
    return `
    <form onsubmit="app.HousesController.createHome()" class=" justify-content-center row ">
          <div class="col-8">
            <div class="row border shadow border-outline-black">
              <div class="col-md-6 mt-3">
                <label for="Bedroom" class="form-label">Bedrooms</label>
                <input name="bedrooms" type="number" class="form-control" id="Bedroom">
              </div>
              <div class="col-md-6 mt-3">
                <label for="Bathroom" class="form-label">Bathroom</label>
                <input name="bathrooms" type="number" class="form-control" id="Bathroom" step="0.5">
              </div>
              <div class="col-md-6">
                <label for="Sqft" class="form-label">Sqft</label>
                <input name="sqft" type="number" class="form-control" id="Sqft">
              </div>
              <div class="col-md-6">
                <label for="Year" class="form-label">Year</label>
                <input name="year" type="date" class="form-control" id="Year" placeholder="1900">
              </div>
              <div class="col-md-6">
                <label for="Price" class="form-label">Price</label>
                <input name="price" type="number" class="form-control" id="Price">
              </div>
              <div class="col-md-6">
                <label for="ImgUrl" class="form-label">ImgUrl</label>
                <input name="imgUrl" type="text" class="form-control" id="ImgUrl">
              </div>
              <div class="col-12">
                <label for="Description" class="form-label">Add a Description</label>
                <input name="description" type="text" class="form-control" id="Description">
                <button class="btn btn-rounded btn-outline-info my-3" type="submit"> Submit </button>
              </div>
            </div>
          </div>
        </form>`
  }
}
export const Forming = new Form()
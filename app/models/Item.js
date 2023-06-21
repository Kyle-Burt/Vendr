export class item {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.img = data.imageUrl
    }

    get itemTemplate() {
        return /*HTML*/`
        <div class="col-3">
          <div class="d-flex flex-column">
            <img class="vending-img rounded mt-2"
              src=${this.img}
              alt=${this.name}>
            <div class="fs-4">
              <p class="m-0">${this.name}</p>
              <p class="m-0">$${this.price}</p>
            </div>
            <button onclick="app.MoneysController.buyItem()" class="btn btn-dark my-2">Buy</button>
          </div>
        </div>
        `
    }
}
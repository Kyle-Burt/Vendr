import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

function _drawItems() {
    const items = AppState.items

    let template = ''

    items.forEach(item => template += item.itemTemplate)

    setHTML("itemsCatalog", template)
}

export class ItemsController {
    constructor() {
        console.log('vending machine items', AppState.items);
        _drawItems()
    }


}
import { AppState } from "../AppState.js"
import { moneyServices } from "../services/MoneysService.js"



export class MoneysController {
    constructor() {
        console.log('Working Constructor')
    }

    addMoney() {
        console.log('Button Clicked')
        moneyServices.addMoney()
    }

    buyItem() {
        console.log('button works')
        moneyServices.buyItem()
    }
}
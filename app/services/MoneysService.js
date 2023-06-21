import { AppState } from "../AppState.js"
import { item } from "../models/Item.js"
import { Pop } from "../utils/Pop.js"
import { setText } from "../utils/Writer.js"


class MoneysService {
    addMoney() {
        AppState.money += .25
        console.log(AppState.money)
        setText("totalMoney", AppState.money)
    }

    buyItem() {

        if (AppState.money < item.price) {
            Pop.error('Not enough money')
            return
        }

        AppState.money -= item.price
        setText("totalMoney", AppState.money)
    }
}

export const moneyServices = new MoneysService()
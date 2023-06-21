import { item } from "./models/Item.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"




class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  money = 0

  items = [
    new item({ name: 'Mountain Dew', price: 1.75, imageUrl: 'https://images.unsplash.com/photo-1632161927166-0aea13d8f7e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=349&q=80' }),
    new item({ name: 'Sprite', price: 1.75, imageUrl: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' }),
    new item({ name: 'Gatorade', price: 2.50, imageUrl: 'https://images.unsplash.com/photo-1545334894-9c7a7ccefaf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvdHRsZWQlMjB3YXRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' }),
    new item({ name: 'Shrimp Ramen', price: 6.50, imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFtZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' }),
    new item({ name: 'Veggie Ramen', price: 5.75, imageUrl: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' }),
    new item({ name: 'Spring Rolls', price: 6.00, imageUrl: 'https://plus.unsplash.com/premium_photo-1663850685055-fd8b1a823948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nJTIwcm9sbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' })
  ]

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

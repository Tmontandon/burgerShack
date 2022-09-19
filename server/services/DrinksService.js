import { DbMenu } from "../db/DbMenu.js"

class DrinksService {
  getDrinks() {
    const res = DbMenu
    return res.drinks
  }



}

export const drinksService = new DrinksService
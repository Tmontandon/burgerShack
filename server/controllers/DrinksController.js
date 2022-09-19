import { drinksService } from "../services/DrinksService.js";
import BaseController from "../utils/BaseController.js";



export class DrinksController extends BaseController {

  constructor() {
    super('/api/drinks')
    this.router
      .get('', this.getAllDrinks)
  }

  async getAllDrinks(req, res, next) {
    try {
      const drinks = await drinksService.getDrinks()
      res.send(drinks)
    } catch (error) {
      next(error)
    }
  }


}
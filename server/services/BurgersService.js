import { DbMenu } from "../db/DbMenu.js"


class BurgersService {
  getBurgers() {
    const res = DbMenu
    return res.burgers
  }


}

export const burgersService = new BurgersService
import { makeObservable, action, observable } from "mobx";

class BasketStore {

    constructor() {
        makeObservable(this, {
            basketList: observable,
            setBasketList: action,
        })
    }


    basketList = []

    setBasketList = (list) => {
        this.basketList = list;
    }
}

export const basketStore = new BasketStore();
class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.mid = 0;

    }

    setRange(min, max) {
        // let arr = []
        // for (let i = min; i <= max; i++) {
        //     arr.push(i)
        // }
        // console.log(arr)
        // return arr
        this.min = min;
        this.max = max;


    }

    guess() {
        let low = this.min
        let high = this.max
        let mid = Math.round((low + high) / 2)
        this.mid = mid
        return mid

    }

    lower() {
        this.max = this.mid

    }

    greater() {
        this.min = this.mid

    }
}

module.exports = GuessingGame;

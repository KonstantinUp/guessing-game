class GuessingGame {
    constructor() {
        this.max=null;
        this.max = null;
    }

    setRange(min, max) {
    this.min=min;
    this.max= max;
    this.middle;
    }

    guess() {
        this.middle =Math.round((this.min+this.max)/2);
        return this.middle;
    }

    lower() {
         this.max = this.middle;
    }

    greater() {
       this.min =this.middle;
    }
}

module.exports = GuessingGame;

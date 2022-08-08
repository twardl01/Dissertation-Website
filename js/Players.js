class Player {

    //saves id/bool representing if they can move
    constructor(id) {
        this.id = id;
        this.myTurn = false;
    }

    //used for sequencing; makes sure that only the person who's moving can move
    playerChanged(id) {
        if (id == this.id) {
            this.myTurn = true;
        } else {
            this.myTurn = false;
        }
    }

    //disables the player
    disable() {
        this.myTurn = false;
    }
}
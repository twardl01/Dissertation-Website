class HumanPlayer extends Player {
    constructor(id, engine) {
        //
        document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', (clickedCellEvent) => this.handleCellClick(clickedCellEvent)));
        super(id);

        this.engine = engine;
    }

    //
    handleCellClick(clickedCellEvent) {
        const clickedCell = clickedCellEvent.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));   
        if (!this.engine.active) {
            return;
        }

        if (!this.engine.isEmpty(clickedCellIndex)) {
            return;
        }

        if (!this.myTurn) {
            return;
        }

        //if nothing's wrong, make the move.
        this.engine.makeMove(this.id, clickedCellIndex);
    }
}
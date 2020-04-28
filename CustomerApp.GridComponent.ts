import {Component, 
            Input,
            Output,
            EventEmitter} from"@angular/core"
@Component({
    selector : "grid-ui",
    templateUrl : "./CustomerApp.Grid.html"
})            
export class GridComponent{
    //for the column names
    gridColumns: Array<Object>= new Array<Object>();
    //for the grid data
    gridData: Array<Object>= new Array<Object>();

    @Input("grid_columns")
    set setGridColumns(_gridColumns:Array<Object>)
        {
        this.gridColumns = _gridColumns;
    }
    @Input("grid_Data")
    set setGridData(_gridData:Array<Object>)
        {
        this.gridData = _gridData;
    }
    @Output("grid-selected")
    eventEmitter: EventEmitter<Object> = 
    new EventEmitter<Object>();

    SelectGrid(_selected:Object){
        this.eventEmitter.emit(_selected);
    }

}
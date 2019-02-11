import { Component, Input, Output, OnChanges, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-demochild',
  templateUrl: './demochild.component.html',
  styleUrls: ['./demochild.component.css']
})
export class DemochildComponent implements OnChanges {

  @Input() stock: number;
    @Input() productId: number;
    @Output() stockValueChange = new EventEmitter();
    color = '';
    updatedstockvalue: number;
    stockValueChanged() {
        this.stockValueChange.emit({ id: this.productId, stockvalue: this.updatedstockvalue });
        this.updatedstockvalue = null;
    }


  ngOnChanges() {
    if (this.stock > 10) {
      this.color = 'green'
    } else {
      this.color = 'red';
    }
  }






}

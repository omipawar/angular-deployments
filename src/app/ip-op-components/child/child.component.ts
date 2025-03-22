import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  imports: [],
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnChanges{
  @Input() name: any = '';
  @Output() emitToParent: EventEmitter<any> = new EventEmitter();

  updateParent() {
    let data = {
      name: 'child',
      roll: 20,
      message: 'hi',
    };
    this.emitToParent.emit(data);
  }

  ngOnChanges(){
    console.log("child onChange");
    
  }

  ngAfterContentInit(){
    console.log('child ngAfterContentInit');
    
  }

  ngAfterContentChecked(){
    console.log('child ngAfterContentChecked');
    
  }
}

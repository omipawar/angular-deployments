import { afterNextRender, afterRender, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  imports: [ChildComponent, JsonPipe],
})
export class ParentComponent implements OnInit{
  data={}
  value:number=0;
  @ViewChild('childInfo') ChildComponent:any;
  content="sample"

  constructor(){
    console.log("constructor");
    
    afterRender(()=>{
      console.log("afterRender",this.ChildComponent.name);
    })
    afterNextRender(()=>{
      console.log("afterNextRender",this.ChildComponent.name);
    })
  }

  onmessagefromchild(event:any){
    console.log(event)
    this.data = event;
  }

  callChildEvent(childInfo:any){
    console.log(childInfo.updateParent())
  }

  changeValue(){
    this.value++
  }

  ngOnInit(){
    console.log("oninit");
    
  }

  ngOnChanges(){
    console.log("Parent onChange");
    
  }

  ngDoCheck(){
    console.log('docheck');
    
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
    
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
    
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
    
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
    
  }

  changeContent(){
    this.content = "test123"
  }
}

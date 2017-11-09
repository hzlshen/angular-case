import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-keyup",
  templateUrl: "./keyup.component.html",
  styleUrls: ["./keyup.component.scss"]
})

export class KeyupComponent implements OnInit {

  constructor() {

  }

  values ="";
  onKey(event:any){
    this.values+= event.target.value+'|';
  }

  ngOnInit() {

  }
}

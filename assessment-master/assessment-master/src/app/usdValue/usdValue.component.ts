import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "usd-value",
  templateUrl: "./usdValue.component.html",
  styleUrls: ["./usdValue.component.scss"]
})
export class UsdValue implements OnInit {
  @Output() onUsdValueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() usdValue: string;

  constructor() {
  }

  ngOnInit() {
  }
  onUpdate(event: Event){
    this.onUsdValueChange.emit(this.usdValue);
  }
}

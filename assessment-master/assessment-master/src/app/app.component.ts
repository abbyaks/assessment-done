import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Currency Converter";

  yenValue: number = null;
  usdValue: number = null;

  onUsdValueChange(value) {
    if(value == null || value == 0){
      this.yenValue=null;
    }else{
      this.yenValue = value/0.009;
    }

  }

  onYenValueChange(value) {
    if(value == null || value == 0){
      this.usdValue=null;
    }else{
      this.usdValue = value*110;
    }

  }
}

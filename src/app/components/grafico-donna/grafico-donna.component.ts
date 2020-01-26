import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label } from "ng2-charts";
import { ChartType } from "chart.js";

@Component({
  selector: "app-grafico-donna",
  templateUrl: "./grafico-donna.component.html",
  styleUrls: ["./grafico-donna.component.css"]
})
export class GraficoDonnaComponent implements OnInit {
  @Input() data: MultiDataSet[] = [];
  @Input() labels: Label[] = [];
  @Input() type: ChartType = null;
  @Input() leyenda: string = "";

  constructor() {}

  ngOnInit() {
    console.log('Data: ', this.data);
    console.log("labels: ", this.labels);
    console.log("ChartType: ", this.type);
    console.log("leyenda: ", this.leyenda);

  }
}

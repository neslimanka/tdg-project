import { Component, OnInit } from '@angular/core';
import { Sensor } from '../model/sensor';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-ivmeBir',
  templateUrl: './ivmeBir.component.html',
  styleUrls: ['./ivmeBir.component.css']
})
export class IvmeBirComponent implements OnInit {

  sensorValue1!: Sensor[]; //
  
  public chartType: any = "line";
  public chartLabel: string[]=[] ;
  barChartData: any[]=new Array<any>();
  sensorArray!:Date;
  items: number[]=[];
  date!:Date;
  constructor(
    private service:ServiceService,
  ) { }

  ngOnInit() {
    this.service.getIvme().subscribe((data)=>{
      this.sensorValue1=data;
      
        var time =new Date(this.sensorValue1[1].waveform.timestamp).getTime(); 
        console.log(time)
        this.sensorValue1[1].waveform.wf_values.map((item, i) => {
            this.date = new Date(time + (item * i));
            this.items.push(item)
            this.chartFilled(this.date,this.items);
        })
  
      
    
      
    })
  }
  chartFilled(date:Date,items:number[]) {

    this.chartLabel.push('date');

    this.barChartData = [
      { data: items, label: 'Bod_Y' }
    ];

  }
 
  z = {
    tooltips: {
      display: true,
      backgroundColor: '#3333cc',
      titleFontSize: 14,
      titleFontColor: 'chocolate',
      bodyFontColor: '#3333cc',
      bodyFontSize: 12,
      displayColors: false,
    },

    animation: {
      duration: 1000,
      easing: "easeInOutQuad"
    },
    responsive: true,
    legend: {
      display: true,
      position: 'top',
      cornerRadius: 10,
      titleSpacing: 4,
      footerFontStyle: 'bold',
      multiKeyBackground: '#3333cc'
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Data',
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Data Value"
        },
      }]
    }
  }
  }



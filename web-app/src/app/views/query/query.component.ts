import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent {

  title = 'web-app';
  result = undefined;


  /**
   *
   */
  constructor(private http: HttpClient, private router: Router) {

  }

  features = [
    new Feature('assets/CoolTemp.svg', "temp", 'cool', 0),
    new Feature('assets/MildTemp.svg', 'temp', 'mild', 1),
    new Feature('assets/HotTemp.svg', 'temp', 'hot', 2),
    new Feature('assets/OvercastOutlook.svg', "outlook", 'overcast', 0),
    new Feature('assets/RainOutlook.svg', "outlook", 'rain', 1),
    new Feature('assets/SunnyOutlook.svg', "outlook", 'sunny', 2),
    new Feature('assets/HighHumidity.svg', "humidity", 'high', 0),
    new Feature('assets/MildHumidity.svg', "humidity", 'mild', 1),
    new Feature('assets/NormalHumidity.svg', "humidity", 'normal', 2),
    new Feature('assets/StrongWind.svg', "wind", 'strong', 0),
    new Feature('assets/WeakWind.svg', "wind", 'weak', 1),
  ];


  selectedFeatures = [
  ];

  isDisabled(item) {
    let v = this.selectedFeatures.find(x => { if (x.groupName == item.groupName) return true })
    return v
  }

  drop(event: CdkDragDrop<string[]>) {


    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  submit() {
    let data = JSON.stringify({
      'vector': [
        this.selectedFeatures.filter(x => x.groupName == 'outlook')[0].encoding,
        this.selectedFeatures.filter(x => x.groupName == 'temp')[0].encoding,
        this.selectedFeatures.filter(x => x.groupName == 'humidity')[0].encoding,
        this.selectedFeatures.filter(x => x.groupName == 'wind')[0].encoding,
      ]
    })
    let headers = { headers: { 'Content-Type': 'application/json' } }

    this.http.post('http://localhost:5000/api/play-tennis', data, headers
    ).subscribe(data => {
      this.result = data['classification']
      if (this.result == 0) {
        this.router.navigate(['/dont-play'])
      } else if (this.result == 1) {
        this.router.navigate(['/play'])
      }
    });
  }
}

class Feature {

  /**
   *
   */
  constructor(
    public imgPath: string,
    public groupName: string,
    public description: string,
    public encoding: Number
  ) { }
}

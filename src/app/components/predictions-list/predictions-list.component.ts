import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prediction } from '../../models/prediction/prediction';
import { PredictionService } from '../../services/prediction/prediction.service';


@Component({
  selector: 'app-predictions-list',
  templateUrl: './predictions-list.component.html',
  styleUrls: ['./predictions-list.component.css']
})
export class PredictionsListComponent implements OnInit {

  predictions: Prediction[];
  id = 0;

  constructor(private predictionService: PredictionService) {
  }

  ngOnInit(): void {
    this.retornarPredictions();
    this.id = setInterval(() => {
      this.retornarPredictions();
    }, 30000);
  }


  retornarPredictions() {
    this.predictionService.findAll().subscribe(item => {
      this.predictions = item;
      console.log('Call Function Every Five Seconds.');
    });
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }


}



import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  leaders: Leader[];

  constructor(private _leaderservice: LeaderService) { }

  ngOnInit() {
    this._leaderservice.getLeaders().then(leaders => this.leaders = leaders);
  }

}

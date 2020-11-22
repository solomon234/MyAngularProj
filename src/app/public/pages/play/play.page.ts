import { Component, OnInit } from '@angular/core';
import { Path } from '@app/@core/enums';

@Component({
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  path = Path;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html'
})
export class TimelineComponent {
  @Input('endIcon') endIcon = 'ionic';
  // tslint:disable-next-line:no-empty
  constructor() {}

}

@Component({
  selector: 'timeline-item',
  template: '<ng-content></ng-content>'
})
export class TimelineItemComponent{
  // tslint:disable-next-line:no-empty
  constructor() {}
}

@Component({
  selector:'timeline-time',
  template: '<span>{{time.subtitle}}</span> <span>{{time.title}}</span>'
})
export class TimelineTimeComponent{
  @Input('time') time = {};
  // tslint:disable-next-line:no-empty
  constructor() {}
}

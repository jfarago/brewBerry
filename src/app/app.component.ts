import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  beers = [{
    name: 'Pale Ale',
    style: 'American Pale Ale',
    abv: 6.2,
    remaining: 78,
    description: 'Pale Ale began as a home brewer’s dream, grew into an icon, and inspired countless brewers to follow a passion of their own. Its unique piney and grapefruit aromas from the use of whole-cone American hops have fascinated beer drinkers for decades and made this beer a classic, yet it remains new, complex and surprising to thousands of beer drinkers every day. It is—as it always has been—all natural, bottle conditioned and refreshingly bold.'
  }, {
    name: 'Blue Moon',
    style: 'Belgium Wheat',
    abv: 5.4,
    remaining: 42,
    description: 'Brewed with oats for creaminess and spiced with the perfect combination of orange peel and coriander. An unfiltered wheat ale spiced in the Belgian tradition for an uncommonly smooth taste.'
  }, {
    name: 'FortNight Coffee Amber',
    style: 'Dark Amber',
    abv: 5.9,
    remaining: 90,
    description: 'Our Coffee Amber brings two of our favorite flavors together. Smooth coffee notes from amber malts and a rich back bone from UK grains join up for a rich unique drinking experience. Hints of plums in the background. Pairs well with red meats, pork and any breakfast item imaginable.'
  }];
}

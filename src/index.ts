import { clientCode } from './design-patterns/creational-patterns/prototype.pattern';

clientCode();

//example of enum
var directions;
(function (directions) {
  directions[(directions['Up'] = 2)] = 'Up';
  directions[(directions['Down'] = 74)] = 'Down';
  directions[(directions['Left'] = 4)] = 'Left';
  directions[(directions['Right'] = 5)] = 'Right';
})(directions || (directions = {}));

console.log(directions);

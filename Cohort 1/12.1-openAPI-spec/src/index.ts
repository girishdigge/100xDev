import { measure, once } from 'helpful-decorators';
class DateClass {
  private timeZone: string;
  constructor(timeZone: string) {
    this.timeZone = timeZone;
  }
  @measure
  getTime() {
    let d = new Date();
    console.log('hello from the other side.');

    return d.getTime();
  }
}

const dateObject = new DateClass('IND');

dateObject.getTime();
dateObject.getTime();
dateObject.getTime();
dateObject.getTime();

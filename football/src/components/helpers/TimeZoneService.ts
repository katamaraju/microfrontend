import { TimeZone } from '../../types/master-data';

const DefaultValues = {
  horseRacingId: 29,
  defaultStrategy: 0,
  messageDuration: 5000,
  defaultTimeZOne: 'GMT',
  minDividend: 1,
  maxDividend: 1000,
  maxAllowedDividend: 1000000
};

class TimeZoneConstants {
  static timeZones = [
    { id: 0, name: 'GMT' },
    { id: 1, name: 'BST' }
  ];
}

export class TimeZoneService {
  defaultTimeZone: string = DefaultValues.defaultTimeZOne;
  constructor() {}

  public getTimeZones(): TimeZone[] {
    return TimeZoneConstants.timeZones;
  }

  public getClientCurrentDate(): Date {
    return new Date();
  }

  public getrequestDateByTimeZone(reqDate: Date): Date {
    const timezoneoffsetInHours =
      this.getTimezoneOffsetInMilliseconds(this.defaultTimeZone) / (60 * 60 * 1000);
    const requestedDate = new Date(reqDate);
    requestedDate.setHours(requestedDate.getHours() - timezoneoffsetInHours);
    return requestedDate;
  }

  public getTimezoneOffsetInMilliseconds(timeZone: string): number {
    const currentDate = new Date(Date.now());
    currentDate.setMilliseconds(0);
    const localOffsetinHours = (currentDate.getTimezoneOffset() / 60) * -1;
    const timezoneDate = new Date(currentDate.toLocaleString('en-US', { timeZone: timeZone }));
    const diffHrs = (timezoneDate.getTime() - currentDate.getTime()) / 1000 / 60 / 60;
    return (localOffsetinHours + diffHrs) * 60 * 60 * 1000;
  }

  public getFormattedDateTime(date: Date) : string {
    return `${
      date.getDate().toString().padStart(2, '0')}/${
      (date.getMonth()+1).toString().padStart(2, '0')}/${
      date.getFullYear().toString().padStart(4, '0')} ${
      date.getHours().toString().padStart(2, '0')}:${
      date.getMinutes().toString().padStart(2, '0')}:${
      date.getSeconds().toString().padStart(2, '0')}`;
  }
}

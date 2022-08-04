import { Region, Meeting, Group } from "./master-data";

export class Fixture {
  id: number;
  name: string;
  region: Region;
  meeting: Meeting;
  fixtureGroup?: Group;
  cutOffDate: Date;
  startDate: Date;
  type: number;
  sport: number;
  status: number;
}

import { ParticipantResultStatus } from "./ParticipantResultStatus";

export interface CoreEntity {
  id: number;
  name: string;
}
export interface Sport extends CoreEntity {}

export interface Meeting extends CoreEntity {}

export interface Region extends CoreEntity {
  isCountry?: boolean;
}

export interface Group extends CoreEntity {}

export interface Horse extends CoreEntity {
  participantId: number;
  participantType: number;
  isFavourite: boolean;
  favouriteId?: number;
  favouriteCreateOrder?: number;
}

export interface HorseFixtureParticipant extends Horse {
  raceCardNumber: number;
  status: ParticipantResultStatus;
}


export interface FixtureStatus {
  id: number;
  name: string;
}

export interface FixtureType {
  id: number;
  name: string;
}

export interface TimeZone {
  id: number;
  name: string;
}

export class DefaultListItemConfig {
  id: number;
  name: string;
}
export class PriceFormatConfig {
  id: string;
  name: string;
}
export class FavouriteParticipant {
  id: number;
  name: string;
  isChecked: boolean;
  createOrder: number;
  constructor(data?: Partial<FavouriteParticipant>) {
    Object.assign(this, data);
  }
}

export enum EntityType {
  Sport,
  Region,
  Competition,
  Meeting,
  Horse,
  Owner,
  Team,
  Player,
  FixtureGroup,
  Favourite,
  Stage,
  Group,
  Trap,
  Country,
  Trainer,
  Jockey
}

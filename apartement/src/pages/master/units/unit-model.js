import { nanoid } from "nanoid";

export const ApartmentStatus = {
  AVAILABLE: "available",
  RENTED: "rented",
  SOLD: "sold",
  UNAVAILABLE: "unavailable",
};

export const ApartmentDirection = {
  NORTH: 1,
  NORTHEAST: 2,
  EAST: 3,
  SOUTHEAST: 4,
  SOUTH: 5,
  SOUTHWEST: 6,
  WEST: 7,
  NORTHWEST: 8,
};

export const ApartmentRentSchema = {
  DAILY: "daily",
  WEEKLY: "weekly",
  MONTHLY: "monthly",
};

export class ApartmentUnit {
  constructor(
    id,
    unitCode,
    floor,
    rooms,
    direction,
    status,
    balcony,
    furnished,
    rentPrice,
    rentSchema,
    sellPrice
  ) {
    this.id = nanoid();
    this.unitCode = "";
    this.floor = 0;
    this.rooms = 1;
    this.direction = "" || ApartmentDirection;
    this.status = "" || ApartmentStatus;
    this.balcony = true;
    this.furnished = true;
    this.rentPrice = 0;
    this.rentSchema = "" || ApartmentRentSchema;
    this.sellPrice = 0;
  }
}

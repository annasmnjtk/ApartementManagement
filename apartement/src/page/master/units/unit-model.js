export const UNIT_PAGE = {
  LIST: "list",
  FORM: "form",
};

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
    this.id = id;
    this.unitCode = unitCode || "";
    this.floor = floor || 0;
    this.rooms = rooms || 1;
    this.direction = direction || "" || ApartmentDirection;
    this.status = status || "" || ApartmentStatus;
    this.balcony = balcony || true;
    this.furnished = furnished || true;
    this.rentPrice = rentPrice || 0;
    this.rentSchema = rentSchema || "" || ApartmentRentSchema;
    this.sellPrice = sellPrice || 0;
  }
}

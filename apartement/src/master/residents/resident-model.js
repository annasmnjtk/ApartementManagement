import { nanoid } from "@reduxjs/toolkit";

export const RESIDENT_PAGE = {
  LIST: "list",
  FORM: "form",
};

export const MaritalStatus = {
  SINGLE: "single",
  TAKEN: "taken",
  MARRIED: "married",
  DIVORCED: "divorced",
  JONES: "jones",
};

export class Resident {
  constructor(
    id,
    fullname,
    email,
    phone,
    maritalStatus,
    dependents,
    birthDate
  ) {
    this.id = id;
    this.fullname = fullname || "";
    this.email = email || "";
    this.phone = phone || "";
    this.maritalStatus = maritalStatus || "";
    this.dependents = dependents || 0;
    this.birthDate = birthDate || new Date();
  }
}

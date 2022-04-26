import { ChangeName, ToggleProfile } from "./types";

export const TOFFLE_PROFILE = 'PROFILE::TOGGLE_PROFILE';
export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';

export const toggleProfile = (): ToggleProfile => ({
  type: TOFFLE_PROFILE,
});

export const changeName = (name: string): ChangeName => ({
  type: CHANGE_NAME,
  name,
});
import { CHANGE_NAME, TOFFLE_PROFILE } from "./actions";

export type ProfileActions = ToggleProfile | ChangeName;


export interface ToggleProfile {
  type: typeof TOFFLE_PROFILE;
}


export interface ChangeName {
  type: typeof CHANGE_NAME;
  name: string;
}




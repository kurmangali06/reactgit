import React, { FC } from "react";
import { connect } from "react-redux";
import ButtonU from '@mui/material/Button';
import { StoreState } from "../store";
import { toggleProfile } from "../store/profile/slice";
import { Dispatch } from "redux";

interface AboutProprs {
  visible: boolean,
  toggle: () => void;
}


export const About: FC<AboutProprs> = (props) => {
  return (
    <>
      <h2>About</h2>
      <input type="checkbox" checked={props.visible} />
      <ButtonU onClick={() => props.toggle()} > change visible</ButtonU>
    </>
  );
}

const mapStateToProps = (state: StoreState) => ({
  visible: state.profile.visible,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggle: () => dispatch(toggleProfile())
})

export const AboutWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
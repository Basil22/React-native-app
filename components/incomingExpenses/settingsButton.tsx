import CustomIconButton from "@/@overrides/CustomButton";
import React from "react";

export default function SettingsButton({ ...props }) {
  return (
    <CustomIconButton
      {...props}
      buttonIcon="menu"
      buttonSize={40}
      iconSize={25}
    />
  );
}

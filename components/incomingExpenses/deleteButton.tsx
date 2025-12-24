import CustomIconButton from "@/@overrides/CustomButton";

export default function DeleteButton({ ...props }) {
  return (
    <CustomIconButton
      {...props}
      buttonIcon="trash-can-outline"
      buttonSize={40}
      iconSize={25}
    />
  );
}

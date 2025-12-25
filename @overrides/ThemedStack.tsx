import { Stack } from "expo-router";
import { ReactNode } from "react";

type ThemedStackProps = {
  children: ReactNode;
};

export default function ThemedStack({ children, ...props }: ThemedStackProps) {
  return (
    <Stack
      {...props}
      screenOptions={{
        headerShown: false,
      }}
    >
      {children}
    </Stack>
  );
}

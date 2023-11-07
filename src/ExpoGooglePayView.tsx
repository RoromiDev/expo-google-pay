import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";

import { ExpoGooglePayViewProps } from "./ExpoGooglePay.types";

const NativeView: React.ComponentType<ExpoGooglePayViewProps> =
  requireNativeViewManager("ExpoGooglePay");

export default function ExpoGooglePayView(props: ExpoGooglePayViewProps) {
  return <NativeView {...props} />;
}

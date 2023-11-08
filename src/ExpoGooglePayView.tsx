import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";

const NativeView = requireNativeViewManager("ExpoGooglePay");

const ExpoGooglePay = React.forwardRef((props, ref) => {
  return <NativeView {...props} ref={ref} />;
});

export default ExpoGooglePay;

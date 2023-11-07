import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoGooglePay.web.ts
// and on native platforms to ExpoGooglePay.ts
import ExpoGooglePayModule from './ExpoGooglePayModule';
import ExpoGooglePayView from './ExpoGooglePayView';
import { ChangeEventPayload, ExpoGooglePayViewProps } from './ExpoGooglePay.types';

// Get the native constant value.
export const PI = ExpoGooglePayModule.PI;

export function requestGooglePayPayment(): string {
  return ExpoGooglePayModule.requestGooglePayPayment();
}

export async function setValueAsync(value: string) {
  return await ExpoGooglePayModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoGooglePayModule ?? NativeModulesProxy.ExpoGooglePay);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoGooglePayView, ExpoGooglePayViewProps, ChangeEventPayload };

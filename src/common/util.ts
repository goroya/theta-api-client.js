function isNode(): boolean {
  return (
    typeof process !== 'undefined' &&
    process.versions != null &&
    process.versions.node != null
  );
}

function isBrowser(): boolean {
  // @ts-ignore
  return window !== 'undefined' && typeof window.document !== 'undefined';
}

function isReactNative(): boolean {
  return (
    typeof navigator !== 'undefined' && navigator.product === 'ReactNative'
  );
}

function getExecEnvStr() {
  if (isReactNative()) {
    return 'ReactNative';
  }
  if (isBrowser()) {
    return 'Browser';
  }
  if (isNode()) {
    return 'Node';
  }
  return 'Unknown';
}

export default {
  isNode,
  isBrowser,
  isReactNative,
  getExecEnvStr
};

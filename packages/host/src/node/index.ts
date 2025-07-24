export { determineLibraryBasename, prettyPath } from "./path-utils.js";

export {
  createAndroidLibsDirectory,
  determineAndroidLibsFilename,
} from "./prebuilds/android.js";

export {
  createAppleFramework,
  createUniversalAppleLibrary,
  createXCframework,
  determineXCFrameworkFilename,
} from "./prebuilds/apple.js";
export {
  ANDROID_TRIPLETS,
  type AndroidTriplet,
  APPLE_TRIPLETS,
  type AppleTriplet,
  isAndroidTriplet,
  isAppleTriplet,
  isSupportedTriplet,
  SUPPORTED_TRIPLETS,
  type SupportedTriplet,
} from "./prebuilds/triplets.js";

export { weakNodeApiPath } from "./weak-node-api.js";

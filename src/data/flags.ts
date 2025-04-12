import countryNameMap from "./countryNameMap";
import { imagesByResolution } from "./imagePathResolver";

// Combine all resolutions into the `flags` array
export const flags = Object.keys(imagesByResolution.w2560).map((id) => ({
  id, // Two-letter country code
  country: countryNameMap[id] || id, // Full country name (fallback to id if not found)
  image: {
    w2560: imagesByResolution.w2560[id],
    w1280: imagesByResolution.w1280[id],
    w640: imagesByResolution.w640[id],
    w320: imagesByResolution.w320[id],
    w160: imagesByResolution.w160[id],
    w80: imagesByResolution.w80[id],
    w40: imagesByResolution.w40[id],
    w20: imagesByResolution.w20[id],
  },
}));

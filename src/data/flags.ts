import countryData from "./country";
import { images } from "./imagePathResolver";

// Combine all resolutions into the `flags` array
export const flags = Object.keys(countryData).map((id) => ({
  id, // Two-letter country code
  name: countryData[id].name, // Full country name
  aliases: countryData[id].aliases || [], // Optional aliases for the country
  emoji: countryData[id].emoji || "", // Optional emoji for the country
  image: {
    icon: images.icon[id],
    svg: images.svg[id],
  },
}));

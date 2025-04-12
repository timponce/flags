import countryNameMap from "./countryNameMap";

// Helper function to process image paths and create a dictionary
const processImages = (folder: string) => {
  // Dynamically get all country codes from countryNameMap
  const countryCodes = Object.keys(countryNameMap);

  return countryCodes.reduce(
    (acc, code) => {
      acc[code] = `/flags/${folder}/${code}.webp`; // Construct the URL
      return acc;
    },
    {} as Record<string, string>
  );
};

// Process images for each resolution
export const imagesByResolution = {
  w2560: processImages("w2560-webp"),
  w1280: processImages("w1280-webp"),
  w640: processImages("w640-webp"),
  w320: processImages("w320-webp"),
  w160: processImages("w160-webp"),
  w80: processImages("w80-webp"),
  w40: processImages("w40-webp"),
  w20: processImages("w20-webp"),
};

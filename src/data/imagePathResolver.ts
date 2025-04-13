import countryNameMap from "./countryNameMap";

// Helper function to process image paths and create a dictionary
const processImages = (folder: string, extension: string) => {
  // Dynamically get all country codes from countryNameMap
  const countryCodes = Object.keys(countryNameMap);

  return countryCodes.reduce(
    (acc, code) => {
      acc[code] = `/flags/${folder}/${code}.${extension}`; // Construct the URL
      return acc;
    },
    {} as Record<string, string>
  );
};

// Process images for each resolution and format
export const images = {
  icon: processImages("256x192-webp", "webp"),
  svg: processImages("svg", "svg"),
};

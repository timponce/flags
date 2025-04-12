# **Flag App**

A simple web app where users are shown a random flag and must guess the corresponding country. The app dynamically loads flag images and supports multiple resolutions. It is designed to eventually integrate with AWS for hosting flag images via a CDN.

---

## **Features**

- Displays a random flag for the user to guess.
- Dynamically loads flag images based on ISO 3166-1 alpha-2 country codes.
- Supports multiple image resolutions for flexibility.
- Modularized code for scalability and maintainability.
- Ready for integration with AWS S3 and CloudFront for image hosting.

---

## **Technologies Used**

- **React** (with TypeScript)
- **Vite** (for fast development and build)
- **CSS** (for styling)
- **ISO 3166-1 alpha-2** country codes for mapping flags to countries.

---

## **Getting Started**

### **Prerequisites**

- Node.js (v16 or higher recommended)
- npm or yarn installed on your machine

---

### **Installation Instructions**

1. **Clone the Repository**

   ```
   git clone https://github.com/<your-username>/guess-the-flag.git
   cd guess-the-flag
   ```

2. **Install Dependencies**

   ```
   npm install
   ```

   Or, if you use Yarn:

   ```
   yarn dev
   ```

3. **Open the App in Your Browser**
   - The app will be available at http://localhost:5173 (default Vite port).

---

### Directory Structure

```
src/
  components/ # Reusable React components
  data/ # Data files (country mappings, image resolvers, etc.)
    countryNameMap.ts # Maps ISO 3166-1 alpha-2 codes to country names
    imagePathResolver.ts # Dynamically resolves image paths
    flags.ts # Combines country data and image paths
  styles/ # Component-specific and global styles
  App.tsx # Main app entry point
  main.tsx # React entry point
public/
  flags/ # Static flag images (organized by resolution)
    w2560-webp/ # Flags at 2560px width
    w1280-webp/ # Flags at 1280px width
    ...
```

---

### Future Plans

**AWS Integration:**

- Host flag images on AWS S3.
- Serve images via AWS CloudFront for faster delivery.
  **Additional Features:**
- Add a scoring system.
- Implement difficulty levels (e.g., common vs. rare flags).
- Add a leaderboard using a backend (e.g., AWS Lambda + DynamoDB).
  **Responsive Design:**
- Optimize the app for mobile and tablet devices.

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

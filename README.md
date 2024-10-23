# Design Compass

Welcome to Design Compass, an open-source project born during Hacktoberfest 2024. Our mission is to create a comprehensive resource for UI/UX designers and developers to explore, analyze, and draw inspiration from mobile app design patterns.

## Project Vision

Design Compass aspires to be the go-to platform for navigating the ever-evolving landscape of mobile app design. Drawing inspiration from established resources like pttrns.com and mobbin.com, we're creating a user-friendly, searchable database of design patterns. Our platform will serve as a compass for designers and developers, guiding them through current trends, successful UI/UX implementations, and best practices in mobile app design.

## Project Structure

```
Design Compass/
├── .github/workflows/   # GitHub Actions workflows
├── _data/                # Unprocessed data folder
├── app/                 # Application code (Next.js)
├── json-generator/      # JSON data generator (Submodule)
├── worker/              # Cloudflare Worker to upload data to R2
├── .gitmodules          # Submodule configuration
├── CODE_OF_CONDUCT.md
├── LICENSE
└── README.md
```

The `app` folder contains all the Next.js code for the Design Compass platform. The `_data` folder is dedicated to storing unprocessed data, making it easier for non-technical contributors to add valuable content to the project. The `json-generator` submodule is a tool for generating JSON data easily, so that non-technical contributors can add data to the project. The `worker` folder contains the code for a Cloudflare Worker that uploads data to R2.


## Getting Started for Non-Technical Contributors

1. Navigate to the [**JSON Generator**](http://json.dc.inovuslabs.org/) tool to upload images and data for mobile app screens.
2. Fill in the required fields and generate JSON data. Hit the "**Generate JSON**" button to preview the JSON data and **Copy to Clipboard**.
2. Navigate to the `_data` folder in this repository and create a subfolder for the app you're adding data for with the app's name. (e.g., `instagram`).
3. Create a new JSON file (file with `.json` extension) in the app's folder with the name of the screen you're adding data for. (e.g., `login.json`).
4. Paste the JSON data you generated into the new file and save it.
5. Submit a pull request with your changes to the repository.

### Special Note for Non-Technical Contributors

- To create a new folder and a file in the same commit, hit create new file and type `foldername/filename.json`. (e.g., `instagram/login.json`)
- You can contribute multiple screens for the same app by creating new JSON files in the same app folder.
---
- Please ensure that the JSON data you generate is accurate and complete.
- If you're unsure about any step, feel free to reach out to the project maintainers for help.

## ~~Getting Started with Code Contributions~~

1. ~~Ensure you have Node.js and npm installed~~
2. ~~Clone the repository: `git clone https://github.com/yourusername/design-compass.git`~~
3. ~~Navigate to the project directory: `cd design-compass/app`~~
4. ~~Install dependencies: `npm install`~~
5. ~~Set up environment variables (see `.env.example`)~~
6. ~~Run the development server: `npm run dev`~~

## Tech Stack Overview

Design Compass is built on a modern, scalable tech stack:
- Frontend & Backend: Next.js (React (TypeScript))
- Database: Not decided yet
- Image Storage: Not decided yet

## License and Acknowledgments

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

We're grateful to the platforms that inspired us, all our passionate contributors, and the Hacktoberfest team for fostering open-source development.

Join us in charting the course of design innovation! Whether you're coding, designing, writing, researching, or community building, your contributions will help shape the future of Design Compass. Let's set sail on this exciting journey together!

Happy designing and coding! 🧭🎨💻

# Design Compass

Welcome to Design Compass, an open-source project born during Hacktoberfest 2024. Our mission is to create a comprehensive resource for UI/UX designers and developers to explore, analyze, and draw inspiration from mobile app design patterns.

## Project Vision

Design Compass aspires to be the go-to platform for navigating the ever-evolving landscape of mobile app design. Drawing inspiration from established resources like pttrns.com and mobbin.com, we're creating a user-friendly, searchable database of design patterns. Our platform will serve as a compass for designers and developers, guiding them through current trends, successful UI/UX implementations, and best practices in mobile app design.

## Project Structure

```
Design Compass/
├── .github/workflows/   # GitHub Actions workflows
├── app/                 # Application code (Next.js)
├── data/                # Unprocessed data folder
├── json-generator/      # JSON data generator (Submodule)
├── worker/              # Cloudflare Worker to upload data to R2
├── .gitmodules          # Submodule configuration
├── CODE_OF_CONDUCT.md
├── LICENSE
└── README.md
```

The `app` folder contains all the Next.js code for the Design Compass platform. The `data` folder is dedicated to storing unprocessed data, making it easier for non-technical contributors to add valuable content to the project. The `json-generator` submodule is a tool for generating JSON data easily, so that non-technical contributors can add data to the project. The `worker` folder contains the code for a Cloudflare Worker that uploads data to R2.

## How to Contribute

We welcome contributions from people of all skill levels and backgrounds. Your unique perspective and skills can help shape Design Compass into an invaluable resource for the design community. Here's how you can make a difference:

### For Non-Technical Contributors
- Submit screenshots of interesting mobile app designs to the `data` folder
- Categorize and tag design patterns you find in apps
- Write brief descriptions of design trends you observe
- Suggest new features or improvements based on user needs

### For Developers
- Work on our Next.js-based frontend
- Implement new features or improve existing ones
- Optimize performance and responsiveness

### Getting Started with Contributions

1. Fork the repository
2. Clone your fork: `git clone https://github.com/inovus-labs/design-compass.git`
3. Create a new branch for your contribution
4. Make your changes and commit them
5. Push to your fork and submit a pull request

For more detailed guidelines, please refer to our CONTRIBUTING.md file.

## Tech Stack

Design Compass is built on a modern, scalable tech stack:
- Frontend & Backend: Next.js (React (TypeScript))
- Database: Not decided yet
- Image Storage: Not decided yet

## Getting Started for Developers

1. Ensure you have Node.js and npm installed
2. Clone the repository: `git clone https://github.com/yourusername/design-compass.git`
3. Navigate to the project directory: `cd design-compass`
4. Install dependencies: `npm install`
5. Set up environment variables (see `.env.example`)
6. Run the development server: `npm run dev`

## License and Acknowledgments

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

We're grateful to the platforms that inspired us, all our passionate contributors, and the Hacktoberfest team for fostering open-source development.

Join us in charting the course of design innovation! Whether you're coding, designing, writing, researching, or community building, your contributions will help shape the future of Design Compass. Let's set sail on this exciting journey together!

Happy designing and coding! 🧭🎨💻
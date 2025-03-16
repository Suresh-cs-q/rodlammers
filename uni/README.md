# University Lab Website

A modern, responsive website for a university research laboratory built with React and Vite. This project features a clean, minimalist design with a focus on usability and aesthetics.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimalist interface with intuitive navigation
- **Component-Based Architecture**: Built with React components for maintainability and reusability
- **Fast Performance**: Optimized for speed using Vite as the build tool
- **Content Sections**: Dedicated pages for Home, Research, Publications, Teaching, People, Opportunities, and Resources

## Pages

- **Home**: Overview of the lab with research highlights and invitation to join
- **Research**: Detailed information about research areas and projects
- **Publications**: Searchable and filterable list of academic publications
- **Teaching**: Information about courses taught by lab members
- **People**: Profiles of faculty, research team members, and alumni
- **Opportunities**: Information about open positions and how to join the lab
- **Resources**: Collection of useful resources and tools

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Vite**: Next-generation frontend tooling for faster development
- **CSS3**: Custom styling with responsive design principles
- **React Router**: For navigation between different pages

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Suresh-cs-q/rodlammers.git
   cd rodlammers
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure build settings (Vite should be auto-detected)
4. Deploy

## Project Structure

```
uni/
├── public/            # Static assets
├── src/               # Source files
│   ├── assets/        # Images and other assets
│   ├── components/    # React components
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Research.jsx
│   │   ├── Publications.jsx
│   │   ├── Teaching.jsx
│   │   ├── People.jsx
│   │   ├── Opportunities.jsx
│   │   └── Resources.jsx
│   ├── styles/        # CSS files
│   ├── App.jsx        # Main App component
│   └── main.jsx       # Entry point
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
└── vite.config.js     # Vite configuration
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern academic websites
- Built with a focus on accessibility and user experience

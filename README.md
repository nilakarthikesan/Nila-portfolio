# Nila Karthikesan — Portfolio Evolution

A unique portfolio website that evolved from a traditional Next.js application into an immersive retro TV desk setup experience.

## Current Version: Retro TV Desk Setup

The portfolio now features a complete desk environment with:
- Bigger 3D Pink Retro TV (800x600px)
- White Desk with realistic shadows
- Functional Remote Control for channel navigation
- Pink Bulletin Board with clickable social media sticky notes
- Office Environment with pink wall background

### Interactive Features
- Remote Control: Click buttons to change channels (0-4)
- Channel Menu: Full guide with project descriptions
- Social Links: Click sticky notes for Resume, LinkedIn, Instagram, GitHub
- Power Button: Turn TV on/off
- Retro TV Sounds: Channel change audio effects

### Projects Showcased
1. RAG‑Enhanced Moderation Dashboard - Content moderation with explainable AI
2. LLM Evaluation Agent for SEO Answer Auditing - Automated evaluation of AI search engines
3. FitnessPal + AI Agent for Personalized Meal Planning - AI-powered meal planning assistant
4. About Nila - Skills, experience, and philosophy

## How to View the Portfolio

### Option 1: Direct View (Recommended)
Simply open the `index.html` file in any web browser:
- Download the `index.html` file from this repository
- Double-click to open in your browser
- Or drag and drop into any browser window

### Option 2: GitHub Pages (Coming Soon)
The portfolio will be available at: https://nilakarthikesan.github.io/Nila-portfolio/

### Option 3: Local Server
```bash
# Clone the repository
git clone https://github.com/nilakarthikesan/Nila-portfolio.git
cd Nila-portfolio

# Open in browser
open index.html
```

## Quick Start

### Option 1: Standalone HTML (Recommended)
```bash
# Simply open the HTML file in your browser
open index.html
```

### Option 2: Python HTTP Server
```bash
# Serve with Python's built-in server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Option 3: Next.js Version (Advanced)
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
Nila's Portfolio/
├── index.html              # Main standalone version (current)
├── package.json            # Next.js dependencies
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
├── src/                    # Next.js source files
│   ├── app/
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Main page component
│   ├── components/         # React components
│   │   ├── Hero.tsx        # Hero section
│   │   └── ProjectCard.tsx # Project card component
│   └── lib/
│       └── data.ts         # Project data
└── README.md              # This file
```

## Design Evolution

### Phase 1: Traditional Next.js Portfolio
- Started with Next.js + TypeScript + Tailwind CSS
- Modular component architecture
- Responsive design with project cards
- Inspired by rog.ie design aesthetic

### Phase 2: TV Interface Concept
- Wrapped content in TV-like elements
- Added static overlay and channel display
- Implemented channel switching with audio
- Green color scheme with emojis

### Phase 3: Pink Retro Refinement
- Changed to pink color scheme
- Removed emojis for cleaner look
- Added sparkly audio effects
- Fixed TV dimensions and eliminated scrolling

### Phase 4: 3D Retro TV with Menu
- Added 3D CSS transforms for realistic TV
- Implemented channel menu popup
- Updated to retro TV channel change sounds
- Enhanced visual depth and realism

### Phase 5: Complete Desk Setup (Current)
- Bigger TV: Increased to 800x600px
- White Desk: Professional desk environment
- Remote Control: Functional remote with digital display
- Bulletin Board: Pink sticky notes for social links
- Office Scene: Complete immersive environment

## Technical Stack

### Current Version (Standalone)
- HTML5: Semantic structure
- CSS3: Advanced styling with 3D transforms
- JavaScript: Interactive features and audio
- Web Audio API: Custom sound generation
- Google Fonts: Inter font family

### Next.js Version (Alternative)
- Next.js 14: React framework with App Router
- TypeScript: Type safety
- Tailwind CSS: Utility-first styling
- Lucide React: Icon library
- PostCSS: CSS processing

## Key Features

### Immersive Experience
- 3D TV Design: Realistic retro TV appearance
- Interactive Remote: Functional channel navigation
- Audio Effects: Retro TV channel change sounds
- Office Environment: Complete desk setup scene

### Project Showcase
- Detailed Project Pages: Comprehensive project information
- Tech Stack Lists: Complete technology breakdowns
- Key Learnings: Educational insights from each project
- Example Use Cases: Real-world applications

### Social Integration
- Clickable Sticky Notes: Direct links to social profiles
- Resume Access: Easy access to professional documents
- Professional Links: LinkedIn, GitHub, Instagram integration

## Design System

### Color Palette
- Primary Pink: #ff69b4 (TV and accents)
- Dark Pink: #ff1493 (Highlights)
- Light Pink: #ffb6c1 (Hover states)
- Desk White: #f8f9fa (Clean surface)
- Wall Pink: #ffe6f2 (Background)

### Typography
- Primary Font: Inter (Google Fonts)
- Monospace: Courier New (Remote display)
- Weights: 400, 500, 600, 700, 800

### Animations
- Page Transitions: Smooth slide effects
- Button Hovers: Scale and glow effects
- TV Effects: Flicker and glow animations
- Sticky Notes: Rotate and scale on hover

## Development Progress

### Completed Milestones
- Initial Next.js setup
- Modular component architecture
- TV interface concept
- Pink retro design
- 3D TV implementation
- Channel menu system
- Remote control functionality
- Bulletin board with social links
- Complete desk setup environment

### Future Enhancements
- Additional project pages
- More interactive elements
- Enhanced audio effects
- Mobile responsiveness improvements
- Performance optimizations

## Deployment

### Static Hosting
The standalone `index.html` version can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

### Next.js Deployment
For the Next.js version:
```bash
npm run build
npm start
```

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## License

Personal project - All rights reserved.

---

**Built with love and lots of pink by Nila Karthikesan** <span style="color: #ff69b4;">♥</span> 
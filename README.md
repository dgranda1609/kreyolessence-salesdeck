# Kreyol Essence Sales Pitch Deck

A professional, interactive web-based sales pitch deck built with React.js and Tailwind CSS, showcasing Kreyol Essence's natural beauty products and authentic Haitian heritage.

## 🌟 Features

- **Interactive Sidebar Navigation**: Collapsible sidebar with progress tracking and smooth animations
- **15 Professional Slides**: Complete pitch deck structure covering all key business aspects
- **Smooth Animations**: Framer Motion animations for engaging transitions
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Keyboard Navigation**: Arrow keys, space bar, and keyboard shortcuts for easy navigation
- **Custom Design System**: Tailwind CSS with custom Kreyol Essence brand colors and typography
- **Modern UI/UX**: Clean, professional design with authentic cultural elements

## 🚀 Tech Stack

- **React.js 19.1.0**: Modern React with hooks and functional components
- **Tailwind CSS 4.1.11**: Utility-first CSS framework with custom design tokens
- **Framer Motion 12.23.0**: Animation library for smooth transitions
- **Lucide React 0.525.0**: Beautiful, customizable icons
- **Vite 7.0.3**: Fast build tool and development server

## 📋 Slides Overview

1. **Brand Introduction** - Welcome to Kreyol Essence
2. **The Problem** - Market challenges and pain points
3. **Market Opportunity** - $532B market size and growth potential
4. **Cultural Context** - Authentic Haitian heritage and traditions
5. **Our Solution** - Natural remedies and authentic products
6. **Product Portfolio** - Complete product lineup
7. **Value Proposition** - What makes us unique
8. **Customer Success** - Real results and testimonials
9. **Business Model** - Revenue streams and scalability
10. **Market Traction** - Growth metrics and validation
11. **Competitive Landscape** - Market positioning
12. **Marketing Strategy** - Go-to-market approach
13. **Financial Projections** - Growth forecasts and projections
14. **The Team** - Leadership and expertise
15. **Call to Action** - Investment opportunity

## 🎨 Design System

### Brand Colors
- **Primary**: Green tones representing natural ingredients
- **Secondary**: Red accents honoring Haitian flag colors
- **Accent**: Blue elements for trust and professionalism
- **Earth**: Natural browns and beiges for authenticity
- **Neutral**: Clean grays for readability

### Typography
- **Display**: Playfair Display for headers and titles
- **Body**: Inter for clean, readable text
- **Script**: Dancing Script for cultural elements

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 20.0.0 or higher (recommended)
- npm or yarn package manager

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd salesdeck-wireframe-v1
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   
   **Note**: If you encounter Node.js version compatibility issues, you can try:
   ```bash
   npm install --force
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🎯 Usage

### Navigation
- **Sidebar**: Click on any slide title to navigate directly
- **Arrow Keys**: Use ← → keys to navigate between slides
- **Space Bar**: Advance to next slide
- **Home/End**: Jump to first/last slide
- **Navigation Controls**: Use floating controls in bottom-right corner

### Presentation Mode
- **Full Screen**: Press F11 for full-screen presentation
- **Keyboard Shortcuts**: Displayed in bottom-left corner
- **Progress Tracking**: Visual progress bar in sidebar

## 🔧 Customization

### Adding New Slides
1. Create a new slide component in `src/slides/`
2. Import and add to the slides array in `src/App.jsx`
3. Update the sidebar navigation in `src/components/Sidebar.jsx`

### Modifying Brand Colors
Update the color palette in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: { /* Your primary colors */ },
      secondary: { /* Your secondary colors */ },
      // ... other colors
    }
  }
}
```

### Content Updates
- Slide content is located in `src/slides/`
- Company information can be updated in individual slide components
- Icons and visual elements can be customized using Lucide React

## 📱 Responsive Design

The pitch deck is fully responsive and optimized for:
- **Desktop**: Full sidebar and optimal viewing experience
- **Tablet**: Responsive layout with touch navigation
- **Mobile**: Collapsible sidebar and mobile-optimized controls

## 🔍 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📊 Performance

- **Fast Loading**: Optimized bundle size with code splitting
- **Smooth Animations**: 60fps animations with Framer Motion
- **Efficient Rendering**: React best practices for optimal performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for Kreyol Essence and contains proprietary business information. All rights reserved.

---

## 🌍 About Kreyol Essence

Kreyol Essence bridges traditional Haitian beauty wisdom with modern wellness needs, offering authentic, natural solutions for hair, skin, and nail health. Our products celebrate cultural heritage while delivering proven results through time-tested ingredients and modern formulations.

**Natural Beauty • Authentic Heritage • Proven Results**
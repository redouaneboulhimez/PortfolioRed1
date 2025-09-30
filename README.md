# PortfolioRed1

A modern, professional portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, responsive design with glassmorphism effects
- **Interactive Sections**: Hover animations and smooth transitions
- **Skills Showcase**: Interactive competence cards with detailed hover panels
- **Project Gallery**: Project cards with image carousels and descriptions
- **Experience Timeline**: Professional experience with company logos
- **Certifications**: Expandable certifications section
- **Contact Form**: Functional contact form with PHP backend
- **Animations**: Smooth loading animations using Framer Motion

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Carousels**: Swiper.js
- **Backend**: PHP with PHPMailer
- **Database**: MySQL

## 📁 Project Structure

```
PortfolioRed1/
├── src/
│   ├── App.tsx          # Main portfolio component
│   ├── index.css        # Global styles
│   └── main.tsx         # App entry point
├── public/              # Static assets
│   ├── images/          # Project screenshots
│   ├── logos/           # Company logos
│   └── CV.pdf           # Resume download
├── backend/
│   ├── php/             # PHP backend
│   └── mysql/           # Database schema
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- PHP 8.0+ (for backend)
- MySQL (for database)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/redouaneboulhimez/PortfolioRed1.git
   cd PortfolioRed1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Setup backend** (optional)
   ```bash
   cd backend/php
   composer install
   ```

## 🎨 Customization

### Adding New Projects
1. Add project images to `public/` folder
2. Update the projects array in `src/App.tsx`
3. Include project description and technologies

### Updating Skills
1. Modify the skills section in `src/App.tsx`
2. Add new competence cards with hover panels
3. Update skill icons and descriptions

### Contact Form
1. Configure SMTP settings in `backend/php/public/contact.php`
2. Set up environment variables for email credentials
3. Test form submission

## 📱 Responsive Design

- **Mobile**: Optimized for mobile devices
- **Tablet**: Responsive grid layouts
- **Desktop**: Full-featured experience

## 🚀 Deployment

### Frontend (Netlify)
1. Build the project: `npm run build`
2. Deploy `dist/` folder to Netlify
3. Configure environment variables

### Backend (OVH/Hostinger)
1. Upload PHP files to hosting provider
2. Configure database connection
3. Set up SMTP credentials

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Redouane Boulhimez**
- LinkedIn: [redouaneboulhimez](https://linkedin.com/in/redouaneboulhimez)
- GitHub: [@redouaneboulhimez](https://github.com/redouaneboulhimez)
- Email: redouane.boulhimez@email.com

---

⭐ Star this repository if you found it helpful!
# Zephyr Events - Premium Wedding & Event Planning Website

A beautiful, modern website for Zephyr Events, a premium wedding and event planning company. Built with React, TypeScript, and Tailwind CSS, featuring elegant animations and a sophisticated design.

## 🌟 Features

- **Modern Design**: Clean, elegant interface with premium aesthetics
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Video Background**: Vimeo video integration on homepage hero section
- **Interactive Gallery**: Lightbox gallery with filtering capabilities
- **Contact Forms**: Comprehensive contact forms with validation
- **Admin Panel**: Content management system for easy updates
- **SEO Optimized**: Meta tags and structured content for search engines

## 🚀 Live Demo

**Production Site**: [https://timely-kheer-c24262.netlify.app](https://timely-kheer-c24262.netlify.app)

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1 with TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 10.16.16
- **Icons**: Lucide React 0.344.0
- **Routing**: React Router DOM 6.20.1
- **Build Tool**: Vite 5.4.2
- **Deployment**: Netlify

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Navigation header with logo and menu
│   ├── Footer.tsx              # Site footer with links and contact info
│   └── sections/               # Reusable page sections
│       ├── Hero.tsx            # Homepage hero with video background
│       ├── Services.tsx        # Services showcase section
│       ├── Gallery.tsx         # Image gallery with lightbox
│       ├── Contact.tsx         # Contact form section
│       ├── Testimonials.tsx    # Client testimonials carousel
│       ├── About.tsx           # About company section
│       ├── FAQ.tsx             # Frequently asked questions
│       ├── HowItWorks.tsx      # Process explanation
│       ├── InstagramFeed.tsx   # Social media integration
│       ├── DesignCatalogue.tsx # Design showcase
│       ├── CustomPackages.tsx  # Package offerings
│       └── VisionToReality.tsx # Before/after comparisons
├── pages/
│   ├── HomePage.tsx            # Main landing page
│   ├── AboutPage.tsx           # About us page
│   ├── ServicesPage.tsx        # Services listing page
│   ├── GalleryPage.tsx         # Full gallery page
│   ├── BlogPage.tsx            # Blog listing page
│   ├── ContactPage.tsx         # Contact page
│   └── AdminPage.tsx           # Admin dashboard
├── assets/
│   ├── fonts/                  # Custom fonts (PPAcma)
│   └── images/                 # Logo and brand assets
└── App.tsx                     # Main app component with routing
```

## 🎨 Design System

### Color Palette

- **Primary**: `#B03F3F` (Deep red/burgundy)
- **Background**: `#EDE6DE` (Warm cream)
- **Neutral**: Grayscale from `#FAFAFA` to `#171717`
- **Secondary**: Purple tones for accents
- **Accent**: Orange/coral tones for highlights

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)
- **Special**: PPAcma Light (custom font)

### Spacing System

- Based on 8px grid system
- Consistent padding and margins throughout
- Responsive breakpoints: `sm`, `md`, `lg`, `xl`

## 📱 Pages Overview

### Homepage
- Video hero section with Vimeo integration
- Services overview with hover effects
- Design catalogue showcase
- Custom packages section
- Vision to reality comparison
- Client testimonials
- Contact form

### About Page
- Hero section with background image
- Company story and values
- Team member profiles
- Statistics and achievements
- Awards and recognition

### Services Page
- Comprehensive service listings
- Pricing packages
- Feature comparisons
- Call-to-action sections

### Gallery Page
- Filterable image gallery
- Lightbox functionality
- Category-based organization
- Load more functionality

### Blog Page
- Article listings with search
- Category filtering
- Featured articles
- Newsletter signup

### Contact Page
- Detailed contact form
- Contact information cards
- Interactive map placeholder
- Quick action buttons
- FAQ section

### Admin Panel
- Password-protected access
- Content management
- Gallery management
- Blog post management
- Site settings

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zephyr-events-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Deployment

The site is automatically deployed to Netlify. Any changes pushed to the main branch will trigger a new deployment.

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider

## 🔐 Admin Access

The admin panel is accessible at `/admin` with the following credentials:
- **Password**: `zephyr2024`

**Note**: In production, implement proper authentication with secure password hashing and user management.

## 📝 Content Management

### Adding New Images
1. Access admin panel at `/admin`
2. Navigate to Gallery tab
3. Upload new images with proper categorization
4. Add descriptive alt text and titles

### Managing Blog Posts
1. Access admin panel
2. Go to Blog Posts tab
3. Create, edit, or delete posts
4. Set publication status (draft/published)

### Updating Site Content
1. Use the Content Management tab in admin
2. Edit hero section content
3. Update about section information
4. Modify contact details in Settings

## 🎯 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data markup
- Semantic HTML structure
- Image alt attributes
- Descriptive page titles

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly navigation
- Optimized images for different screen sizes
- Flexible grid layouts

## ⚡ Performance Optimizations

- Lazy loading for images
- Code splitting with React Router
- Optimized bundle size
- Efficient re-renders with React hooks
- Compressed assets

## 🔒 Security Considerations

- Input validation on forms
- XSS protection
- Secure admin authentication (to be enhanced)
- Environment variable protection
- HTTPS enforcement

## 🐛 Known Issues & Future Enhancements

### Current Limitations
- Admin authentication is basic (demo purposes)
- No backend database integration
- Static content management

### Planned Improvements
- Backend API integration
- User authentication system
- Content management system
- Email integration for forms
- Analytics integration
- Blog commenting system

## 📞 Support & Contact

For technical support or questions about the website:
- **Email**: info@zephyrevents.com
- **Phone**: +1 (555) 123-4567

## 📄 License

This project is proprietary software for Zephyr Events. All rights reserved.

## 🤝 Contributing

This is a private project for Zephyr Events. For any modifications or updates, please contact the development team.

---

**Built with ❤️ for Zephyr Events**
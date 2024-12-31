# Recruitica - Your Recruitment Career Platform

<img src="src/assets/recruitica-logo.svg" alt="Recruitica" width="200"/>

Recruitica is a modern recruitment platform designed to connect recruitment professionals with their next career opportunity. Built with React, TypeScript, and Supabase, it offers a comprehensive suite of features for both recruiters and candidates.

## 🌟 Features

- **Job Management**
  - Advanced job search and filtering
  - Premium job listings
  - Application tracking system
  - Saved jobs functionality

- **Company Profiles**
  - Detailed company pages
  - Office locations and benefits
  - Media galleries
  - Tech stack information

- **Professional Development**
  - Educational resources
  - Industry podcasts
  - Expert blog articles
  - Community forum

- **Smart Features**
  - AI-powered chat support
  - Intelligent job matching
  - Automated notifications
  - Analytics dashboard

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/recruitica.git
   cd recruitica
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your Supabase credentials and other required variables.

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

## 🛠️ Tech Stack

- **Frontend**
  - React 18
  - TypeScript
  - Vite
  - TailwindCSS
  - Framer Motion
  - Tanstack Query

- **Backend**
  - Supabase
  - PostgreSQL
  - Edge Functions

- **Authentication**
  - Supabase Auth
  - Row Level Security

- **AI Integration**
  - OpenAI GPT
  - Custom AI Matching

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── features/       # Feature-specific components and logic
├── contexts/       # React contexts
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and API clients
├── pages/         # Page components
└── types/         # TypeScript type definitions
```

## 🔒 Security

- Row Level Security (RLS) policies for all database tables
- Secure authentication flow
- Environment variable protection
- API rate limiting
- Input validation and sanitization

## 🧪 Testing

Run the test suite:
```bash
npm run test
```

## 📦 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your preferred hosting platform:
   ```bash
   npm run deploy
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Supabase](https://supabase.com/) for the backend infrastructure
- [TailwindCSS](https://tailwindcss.com/) for the styling system
- [OpenAI](https://openai.com/) for AI capabilities
- [Unsplash](https://unsplash.com/) for stock images

## 📞 Support

For support, email support@recruitica.com or join our [Discord community](https://discord.gg/recruitica).

## Development Notes
- If you encounter blank pages or console errors, try:
  - Disabling ad blockers for localhost:5173
  - Using Incognito/Private mode
  - Whitelisting the development URL in your security extensions

## Recent Updates (December 31, 2023)
- Added Recruitica logo to header and README
- Fixed TypeScript type safety issues in Header component
- Added support for various image formats (SVG, JPG, PNG)
- Improved development setup documentation
- Added troubleshooting notes for ad blocker issues

---

Built with ❤️ by the Recruitica team
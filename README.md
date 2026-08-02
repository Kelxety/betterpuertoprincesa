# 🏛️ BetterPuertoPrincesa.org

A community-run civic portal for **Puerto Princesa City, Palawan** — part of the [BetterGov.ph](https://bettergov.ph) civic tech movement. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **📱 Responsive Design**: Mobile-first approach with modern UI/UX
- **♿ Accessibility**: WCAG 2.1 compliant design
- **📝 Content Management**: YAML + Markdown content system for easy updates
- **📊 Real Data**: Demographics, competitiveness index, fiscal transparency, and infrastructure project data — sourced and cited, never fabricated
- **⚡ Fast Performance**: Built with Vite for optimal loading speeds
- **🔍 SEO Optimized**: Built-in SEO with react-helmet, meta tags, and Open Graph support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/Kelxety/betterpuertoprincesa.git
cd betterpuertoprincesa
npm install
npm run dev
```

Then open `http://localhost:5173`.

## 📚 Documentation

- **[CONTENT-GUIDE.md](CONTENT-GUIDE.md)** - Content writing and contribution guidelines
- **[CONTENT-MANAGEMENT.md](CONTENT-MANAGEMENT.md)** - Guide for non-technical users to edit and manage website content
- **[DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)** - Deployment instructions for Vercel and other platforms
- **[CHANGELOG.md](CHANGELOG.md)** - Version history and release notes

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run convert-yaml` - Convert YAML to JSON
- `npm run dev:yaml` - Convert YAML and start dev server

### Project Structure

```
content/
├── government/         # Government section markdown & YAML
│   └── departments/    # Department pages (executive, legislative)
└── services/           # Services section markdown & YAML

src/
├── components/         # Reusable UI components
│   ├── home/           # Home page components
│   ├── layout/         # Layout components (Navbar, Footer, InfoBar)
│   └── ui/             # Basic UI components
├── data/               # YAML configuration + sourced data (statistics, news, hotlines)
├── i18n/               # Internationalization
├── lib/                # Utility functions (markdownLoader, yamlLoader)
├── pages/              # Page components (Home, Services, Government, Statistics, News, Document)
└── types/              # TypeScript type definitions
```

## 🤝 Contributing

We welcome contributions from everyone! Whether you're a developer, a Puerto Princesa resident, or a community member, there are many ways to help.

### 🌟 For Non-Technical Contributors

**No coding experience required!** You can contribute content and improvements using GitHub's web interface.

1. **Create a GitHub account** (free at github.com)
2. **Navigate to the repository** in your web browser
3. **Use our detailed guide**: [CONTENT-MANAGEMENT.md](CONTENT-MANAGEMENT.md) - Complete step-by-step instructions for editing content without any technical knowledge

#### What You Can Contribute

- **📝 Content Updates**: Fix outdated information, add new services, improve descriptions
- **📋 Service Information**: Add details about government services, requirements, and processes
- **🔍 Content Review**: Check for accuracy, clarity, and completeness
- **💡 Suggestions**: Propose new features or improvements

#### How to Contribute (No Git Required)

1. Go to `content/services/` for service pages or `content/government/` for department pages
2. Click the pencil icon (✏️) on any `.md` file to edit
3. Write a brief description of what you changed and click "Commit changes"

### 👨‍💻 For Technical Contributors

1. **Fork the repository** on GitHub
2. **Clone your fork**: `git clone https://github.com/YOUR-USERNAME/BetterPuertoPrincesa.git`
3. **Create a branch**: `git checkout -b feature/your-change`
4. **Make your changes** and test with `npm run dev`
5. **Run checks**: `npm run lint && npm run build`
6. **Submit a pull request**

### 📋 Content Guidelines

- **Accuracy first**: only add information you can verify — cite a source, or leave it out
- **Clear language**: write for the general public, avoid jargon
- **Complete information**: include requirements, steps, and contact details where relevant
- **Accessibility**: use clear headings, simple language, and logical structure

### 🎯 Priority Areas for Contribution

1. **Content accuracy**: update outdated information, fix errors
2. **Service coverage**: add missing Puerto Princesa government services and programs
3. **Data verification**: help confirm figures in `src/data/statistics.ts` and `src/data/news.ts` against official sources
4. **Accessibility**: ensure content is usable by all residents

### 🆘 Need Help?

- **For Content Questions**: Check [CONTENT-MANAGEMENT.md](CONTENT-MANAGEMENT.md)
- **For Technical Issues**: Open an issue on GitHub
- **Join the community**: [BetterGov.ph Discord](https://discord.com/invite/mHtThpN8bT)

## 📄 License

This project is licensed under the Creative Commons Zero (CC0) License - see the [LICENSE](LICENSE) file for details. Public domain — no restrictions on use, modification, or distribution.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS v4](https://tailwindcss.com/)
- UI components by [@bettergov/kapwa](https://github.com/bettergov/kapwa)
- Icons by [Lucide React](https://lucide.dev/)
- Content management with [YAML](https://yaml.org/)
- Internationalization with [i18next](https://www.i18next.com/)
- Part of the [BetterGov.ph](https://bettergov.ph) civic tech movement

---

**Made with ❤️ for the people of Puerto Princesa City**

# Contributing to OSW Website

Thank you for considering contributing to the Open Source Weekend (OSW) website! 🎉

OSCF serves as a platform for developers, enthusiasts, and organizations to come together, share knowledge, and contribute to open-source projects. OSW is a community-driven initiative that promotes open source technologies through events, workshops, and celebrations.

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. 

## Ways to Contribute
There are many ways to contribute to the OSW website:

**For Beginners:**
- Fix typos and improve documentation
- Update outdated links or information
- Add missing alt-text to images
- Improve accessibility features

**For Developers:**
- Add new features and functionality
- Fix bugs and issues
- Improve performance and optimization
- Enhance responsive design
- Create reusable components

**For Designers:**
- Improve UI/UX design
- Create graphics and illustrations
- Enhance mobile experience
- Design new page layouts

## Getting Started

### Prerequisites

Before contributing, ensure you have:
- Node.js - `v18.20.8` or `v20.3.0`, `v22.0.0` or higher. (`v19` and `v21` are not supported.)
- Terminal - Astro is accessed through its command-line interface (CLI).
- Git - For version control and collaboration (Verify installation: `git --version`)

### Initial Setup

**1. Fork and Clone the Repository**

```bash
# clone your forked repo
git clone https://github.com/YOUR-USERNAME/osw-website
cd osw-website

# setup remote upstream 
git remote add upstream https://github.com/oscfcommunity/osw-website
```

**2. Install dependencies**

```bash
npm install
```

**3. Start development server**

```bash
npm run dev
```

## Development Workflow

### Before You Start

Make sure to do `git checkout main` and `git pull origin main` to avoid conflicts.

### Step-by-Step Process

**1. Create a new branch from the latest `develop`**

```bash
git checkout -b feature/your-feature-name
```

**2. Make Your Changes**

Write clean, well-documented code that follows project standards and includes meaningful comments, then test thoroughly by running the development server to verify all functionality works as expected. Ensure responsive design works across mobile and desktop devices, and always build successfully with `npm run build` before submitting.

**3. Test Comprehensively**

Run local testing with `npm run dev` and production builds using `npm run build` && `npm run preview` to verify functionality in both environments. Test across multiple browsers (Chrome, Firefox, Safari, Edge) and various screen sizes to ensure consistent appearance and behavior.

**4. Commit Your Work**

```bash
git add .
git commit -m "feat: descriptive commit message"
```

**5. Push and Create Pull Request**

```bash
git push origin feature/your-feature-name
```

**Note** : Before starting to work on any issues, be sure to do `git checkout main` and `git pull origin main` to avoid conflicts.

## Guidelines

### Branch Naming Conventions

Use descriptive branch names following this pattern:

- **Features**: `feature/add-speaker-section`
- **Bug fixes**: `fix/navigation-responsive-issue`
- **Documentation**: `docs/update-contributing-guide`
- **Styling**: `style/improve-mobile-layout`
- **Components**: `component/create-event-card`

### Commit Message Guidelines

**Write clear, concise commit messages following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.**

**Format:**

```bash
<type>[optional scope]: <description>
```

**Types:**

- `feat`: New features (`feat(speakers): add speaker bio modal`)
- `fix`: Bug fixes (`fix(navigation): resolve mobile menu overlap`)
- `docs`: Documentation (`docs: update installation guide`)
- `style`: Code formatting (`style(components): fix indentation`)
- `refactor`: Code restructuring (`refactor(utils): simplify date helpers`)
- `perf`: Performance improvements (`perf(images): optimize loading`)
- `test`: Adding tests (`test(auth): add login validation tests`)
- `build`: Build system changes (`build: update webpack config`)
- `ci`: CI/CD changes (`ci: add automated testing`)
- `chore`: Maintenance tasks (`chore: update dependencies`)

**Code Style**

- Write clean, readable code with meaningful variable names
- Add comments for complex logic
- Follow existing code patterns and structure
- Ensure all builds pass without warnings
- Test responsive design on multiple devices

### Useful Resources

- [Astro Documentation](https://docs.astro.build/)
- [Open Source Weekend Events](https://osd.opensourceweekend.org)
- [Git and GitHub Guides](https://guides.github.com/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

**Remember**: Every contribution, no matter how small, makes a difference in building a stronger open source community! 🚀

Thank you for being part of the Open Source Weekend community and helping us create amazing experiences for developers and tech enthusiasts worldwide!

**Happy Contributing!**  🚀




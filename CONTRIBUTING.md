# Contributing to OSW Website

Thank you for considering contributing to the Open Source Weekend (OSW) website! 🎉

OSCF serves as a platform for developers, enthusiasts, and organizations to come together, share knowledge, and contribute to open-source projects. OSW is a community-driven initiative that promotes open source technologies through events, workshops, and celebrations.

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Prerequisites

Before contributing, ensure you have the following installed and set up:

- **Node.js** (latest LTS version recommended)
- **pnpm** (recommended for faster installs and improved developer experience)
- **Git** (for version control)
- A GitHub account

> If you don't have pnpm installed, you can install it globally:
>
> ```bash
> npm install -g pnpm
> ```

## Getting Started

To contribute, follow these steps:

1. **Fork the Repository**: Click the "Fork" button at the top right of the repository page to create your own copy of the repository.
2. **Clone Your Fork**: Clone your forked repository to your local machine:
   ```bash
   git clone https://github.com/<your-username>/osw-website.git
   ```
3. **Navigate to the Project Directory**:
   ```bash
   cd osw-website
   ```
4. **Install Dependencies**:
   ```bash
   pnpm install
   ```
5. **Create a New Branch**: Always create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

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

## Best Practices for Open Source Contribution

### General Guidelines

- Always create an issue before starting work on a new feature or bug fix. This ensures that the work is aligned with the project goals and avoids duplication of effort.
- Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages. This helps maintain a clean and understandable commit history.
- Write clear and concise documentation for any new features or changes.
- Ensure your code is well-tested and includes unit tests where applicable.
- Respect the project's coding standards and style guides.
- Be responsive to feedback during the code review process.

### Branching and Merging

- Use descriptive branch names following the conventions outlined in the "Branch Naming Conventions" section.
- Before merging any branch, perform an interactive rebase to clean up the commit history:
  ```bash
  git rebase -i main
  ```
  This ensures a clean and meaningful commit history.
- Always update your branch with the latest changes from `main` before creating a pull request:
  ```bash
  git checkout main
  git pull origin main
  git checkout your-branch
  git rebase main
  ```

### Pull Requests

- Keep pull requests small and focused. Avoid bundling multiple unrelated changes in a single PR.
- Include a clear and detailed description of the changes in the pull request.
- Reference the issue(s) your pull request addresses.
- Ensure all tests pass and the build succeeds before submitting a pull request.
- Request reviews from relevant contributors or maintainers.

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

### Code Style

- Write clean, readable code with meaningful variable names.
- Add comments for complex logic.
- Follow existing code patterns and structure.
- Ensure all builds pass without warnings.
- Test responsive design on multiple devices.

## Useful Resources

- [Astro Documentation](https://docs.astro.build/)
- [Open Source Weekend Events](https://osd.opensourceweekend.org)
- [Git and GitHub Guides](https://guides.github.com/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

**Remember**: Every contribution, no matter how small, makes a difference in building a stronger open source community! 🚀

Thank you for being part of the Open Source Weekend community and helping us create amazing experiences for developers and tech enthusiasts worldwide!

**Happy Contributing!** 🚀

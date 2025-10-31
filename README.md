# bl1nk-web-editor

<div align="center">
  <img src="./assets/logo.svg" alt="bl1nk-web-editor Logo" width="150"/>
  <h1 align="center">bl1nk-web-editor</h1>
  <p align="center">
    A Specification-Driven Development environment for building beautiful UIs, fast.
    <br />
    <a href="#-tech-stack"><strong>Explore the tech stack »</strong></a>
    <br />
    <br />
    <a href="https://github.com/your-username/bl1nk-web-editor/issues">Report Bug</a>
    ·
    <a href="https://github.com/your-username/bl1nk-web-editor/issues">Request Feature</a>
  </p>
</div>

---

## Table of Contents

- [About The Project](#about-the-project)
  - [The Core Application: Studio](#the-core-application-studio)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Development Workflow (SDD)](#-development-workflow-sdd)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## About The Project

**bl1nk-web-editor** is a monorepo that contains the tools and libraries for a Specification-Driven Development (SDD) workflow. Its primary goal is to accelerate the creation of consistent, high-quality web pages by transforming structured specifications into production-ready code.

### The Core Application: Studio

The heart of this project is the **Studio** application (`apps/studio`). It's a web-based builder that allows developers to:
*   Define UI structure using a precise JSON schema.
*   See a live, interactive preview of the components.
*   Manage global design tokens (colors, fonts, etc.).
*   Generate clean, maintainable React (Next.js) code.

## Getting Started

Follow these steps to set up the development environment. Note that this project is designed for a **"GitHub-First"** workflow, where building and testing happen via CI/CD actions, not on a local machine.

### Prerequisites

- A GitHub account.
- A Vercel or Cloudflare Pages account, connected to your GitHub.

### Installation & Setup

1.  **Fork/Clone the Repository:** Create your own copy of this repository on GitHub.
2.  **Create Project Files:** Using the GitHub web editor or a connected IDE, create the files and folders as defined in the development plan. The initial file structure is provided in the [Setup Guide](./docs/SETUP.md).
3.  **Environment Variables:** Create a `.env.local` file in the `apps/studio` directory within your Vercel/Cloudflare project settings:
    ```
    # Required for saving and loading templates from JSONBin.io
    JSONBIN_API_KEY="YOUR_JSONBIN_API_KEY"
    ```
4.  **Deploy:** Push your changes to the main branch. Your hosting provider (Vercel/Cloudflare) will automatically install dependencies, build the project, and deploy the **Studio** application.

## 🛠️ Tech Stack

- **Monorepo:** Turborepo
- **Package Manager:** npm
- **Framework:** Next.js 15.4+
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **UI Library:** `@acme/ui` (A custom library)
- **Data Persistence:** JSONBin.io

## 📂 Project Structure

```
bl1nk-web-editor/
├── apps/
│   └── studio/         # The main UI builder application
├── packages/
│   ├── ui/             # The core UI component library
│   ├── tsconfig/       # Shared TypeScript configurations
│   └── ...
├── specs/
│   └── 001-feature/    # Specification documents for features
└── assets/
    └── logo.svg        # Project logo
```

## 🌊 Development Workflow (SDD)

This project follows the **Specification-Driven Development (SDD)** methodology. All development starts with a specification, not with code.

1.  **Specify (`/speckit.specify`):** Define the feature's requirements (`WHAT` & `WHY`).
2.  **Plan (`/speckit.plan`):** Create a technical implementation plan (`HOW`).
3.  **Task (`/speckit.tasks`):** Break the plan down into executable tasks.
4.  **Implement (`/speckit.implement`):** Generate the code based on the tasks.

All documentation for this process is stored in the `/specs` directory.

## 🗺️ Roadmap

See the [open issues](https://github.com/your-username/bl1nk-web-editor/issues) for a list of proposed features and known issues.

- [x] Phase 1: Foundational Layout & State Management
- [ ] Phase 2: Real-time Preview from JSON
- [ ] Phase 3: Code Generation Engine

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. Please refer to our [Contributing Guide](./CONTRIBUTING.md).

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/your-username/bl1nk-web-editor](https://github.com/your-username/bl1nk-web-editor)
```

**3. สร้างไฟล์เอกสารและ Assets ที่เกี่ยวข้อง**

เพื่อให้ `README.md` ทำงานได้อย่างสมบูรณ์ คุณจะต้องสร้างไฟล์เหล่านี้:

**`assets/logo.svg`**
```svg
<!-- ผมจะสร้าง SVG placeholder ง่ายๆ ให้คุณก่อน คุณสามารถแทนที่ด้วยดีไซน์ของคุณทีหลัง -->
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:rgb(99, 102, 241);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(168, 85, 247);stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="20" fill="url(#grad1)"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="60" fill="white" font-weight="bold">B</text>
</svg>
```

**`docs/SETUP.md`** (แยกรายละเอียดการตั้งค่าออกมา)
```markdown
# Project Setup Guide

This document provides the detailed steps for setting up the `bl1nk-web-editor` project for the first time.

## Initial File Structure

Use your Git client or the GitHub web interface to create the following file structure. The contents for each file are provided in the "GitHub-First Development" section of the main `README.md`.

- `package.json`
- `turbo.json`
- `apps/studio/package.json`
- `apps/studio/next.config.mjs`
- `apps/studio/tailwind.config.ts`
- `apps/studio/app/layout.tsx`
- `apps/studio/app/page.tsx`
- `apps/studio/app/globals.css`
- `packages/ui/package.json`
- `packages/ui/tsup.config.ts`
- `packages/ui/src/index.ts`
- ... (and other shared config files)

## Deployment

1.  **Connect to Hosting:** In your Vercel or Cloudflare dashboard, import the GitHub repository.
2.  **Framework Preset:** Select "Next.js".
3.  **Root Directory:** Set this to `apps/studio`.
4.  **Build Command:** `npm run build`
5.  **Environment Variables:** Add `JSONBIN_API_KEY` as described in the main README.
6.  **Deploy:** Trigger the first deployment.
```

**`CONTRIBUTING.md`**
```markdown
# Contributing to bl1nk-web-editor

Thank you for your interest in contributing!

## How to Contribute

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

All development must follow the [Specification-Driven Development (SDD)](./README.md#development-workflow-sdd) process.
```

---
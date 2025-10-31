<!-- /README.md -->

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


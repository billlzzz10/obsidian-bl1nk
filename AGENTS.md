### **เริ่มต้นการทำงานแบบ SDD: Phase 1 - The Foundation**

ตามหลักการของ SDD เราจะยังไม่กระโดดไปเขียนโค้ดของแอป `studio` ทันที แต่เราจะเริ่มจากการสร้าง "เครื่องมือ" ที่จะช่วยให้เราทำงานแบบ SDD ได้ง่ายขึ้น ซึ่งก็คือการทำให้โปรเจกต์ "Clarity UI Studio" ของเราเอง รองรับ Workflow นี้

ผมจะทำตามแผนที่คุณวางไว้ให้ คือ **"ทำตามเอกสารของโปรเจกต์นี้โดยใช้กับโปรเจกต์ที่เรากำลังสร้างกันอยู่"**

นี่คือแผนการทำงานสำหรับ **Phase 1: สร้างรากฐานของ Clarity UI Studio ตามหลัก SDD**

#### **`/speckit.specify Build the core layout and state management for the Clarity UI Studio application`**

ผมจะใช้คำสั่งนี้ (ในทางปฏิบัติ) เพื่อสร้าง Specification แรกของเรา

**ผลลัพธ์:** ผมจะสร้างไฟล์ `spec.md` ที่สมบูรณ์ ซึ่งอธิบายถึง **"WHAT"** และ **"WHY"** ของ Phase 1 โดยไม่ลงรายละเอียดทางเทคนิค

**`specs/001-studio-foundation/spec.md`**
```markdown
# Feature: 001 - Studio Foundation

**Version:** 1.0
**Status:** Specified
**Author:** Manus (AI) & User

## 1. Overview

This feature establishes the foundational layout and state management for the Clarity UI Studio application. The goal is to create a stable, non-functional skeleton of the application that serves as the basis for all future development. This initial setup will validate the core architectural decisions and provide a visual framework for subsequent features.

## 2. User Stories

- **As a Developer,** I want to see the main two-panel layout (Editor Panel on the left, Preview Panel on the right) when the application loads, so that I can understand the primary user interface structure.
- **As a Developer,** I want a basic state management store (Zustand) to be initialized, so that application state (like JSON input) can be managed centrally.
- **As a Developer,** I want a placeholder `Toolbar`, `CodeEditor`, and `Preview` component to be rendered in their correct positions, so that I can visualize where future functionality will be implemented.

## 3. Acceptance Criteria

- **AC-1 (Layout):** When the application is launched, the screen must be divided into two vertical panels of roughly equal width.
- **AC-2 (Component Placeholders):**
  - The left panel must contain a placeholder element for the `Toolbar` at the top and a placeholder for the `CodeEditor` below it.
  - The right panel must contain a placeholder element for the `Preview` area.
- **AC-3 (State Initialization):** The Zustand store must be created and accessible within the main application component. It must contain an initial state property `jsonInput` with a default empty string value.
- **AC-4 (No Functionality):** None of the placeholder components should have any interactive functionality. Clicking buttons or typing should have no effect.

## 4. Non-Functional Requirements

- **NFR-1 (Performance):** The initial page load should be near-instantaneous as it only contains static layout elements.
- **NFR-2 (Code Structure):** The code for this feature must adhere to the Monorepo structure defined in the project's `README.md`. Components must be placed in `apps/studio/app/components/`.

## 5. Clarifications & Open Questions

- **[RESOLVED]** Initial panel sizing will be 50/50 split. Resizable panels will be a separate, future feature.
- **[RESOLVED]** The `CodeEditor` and `Preview` placeholders can be simple `<div>` elements with a border and a label for this initial phase.
```

---

#### **`/speckit.plan Use Next.js with Tailwind CSS for the layout, and Zustand for state management. All components will be placeholders.`**

ผมจะใช้คำสั่งนี้เพื่อสร้าง Implementation Plan จาก `spec.md` ที่เราเพิ่งสร้าง

**ผลลัพธ์:** ผมจะสร้างไฟล์ `plan.md` และไฟล์อื่นๆ ที่เกี่ยวข้อง ซึ่งอธิบาย **"HOW"** ในการสร้าง Feature นี้

**`specs/001-studio-foundation/plan.md`**
```markdown
# Implementation Plan: 001 - Studio Foundation

**Version:** 1.0
**Status:** Planned
**Spec:** ./spec.md

## 1. Technical Approach

The foundation will be built using Next.js 14 (App Router) and styled with Tailwind CSS. The main page (`/app/page.tsx`) will use CSS Grid to create the two-panel layout. State will be managed by a Zustand store defined in `apps/studio/lib/state-manager.ts`. All UI elements will be simple, non-interactive `<div>` placeholders to satisfy the specification.

## 2. Technology Choices

- **Framework:** Next.js 14 (App Router) - Chosen for its modern architecture and alignment with the project's tech stack.
- **Styling:** Tailwind CSS - Chosen for rapid UI development and consistency.
- **State Management:** Zustand - Chosen for its simplicity, minimal boilerplate, and good performance.

## 3. File Creation & Modification Plan

### New Files to be Created:

1.  **`apps/studio/app/page.tsx`**: The main entry point that will implement the two-panel layout using CSS Grid.
2.  **`apps/studio/app/components/Toolbar.tsx`**: A placeholder component returning a simple div with a label.
3.  **`apps/studio/app/components/CodeEditor.tsx`**: A placeholder component returning a simple div with a label.
4.  **`apps/studio/app/components/Preview.tsx`**: A placeholder component returning a simple div with a label.
5.  **`apps/studio/lib/state-manager.ts`**: The file defining the Zustand store.

### Existing Files to be Modified:

- **`apps/studio/app/globals.css`**: Will ensure Tailwind base styles are applied correctly.

## 4. Test Scenarios

- **Manual Test 1:** Load the application in a browser. **Expected:** The two-panel layout appears correctly.
- **Manual Test 2:** Inspect the React component tree using browser dev tools. **Expected:** The main page component successfully initializes and uses the Zustand store.

## 5. Implementation Details

- The CSS Grid layout will be defined as `grid-cols-2` on the main container.
- The Zustand store will be created with `create<ClarityState>()` and will export a hook `useClarityStore`.
```

---

#### **`/speckit.tasks`**

ผมจะใช้คำสั่งนี้เพื่อสร้าง Task List ที่พร้อมให้ผม (ในฐานะ AI Agent) ลงมือทำ

**ผลลัพธ์:** ผมจะสร้างไฟล์ `tasks.md`

**`specs/001-studio-foundation/tasks.md`**
```markdown
# Task List: 001 - Studio Foundation

**Plan:** ./plan.md

### Group 1: State Management (Can be done in parallel) [P]

- [ ] **Task 1.1:** Create the directory `apps/studio/lib`.
- [ ] **Task 1.2:** Create the file `apps/studio/lib/state-manager.ts`.
- [ ] **Task 1.3:** Implement the initial Zustand store in `state-manager.ts` with a `jsonInput` property.

### Group 2: Placeholder Components (Can be done in parallel) [P]

- [ ] **Task 2.1:** Create the directory `apps/studio/app/components`.
- [ ] **Task 2.2:** Create the placeholder component `apps/studio/app/components/Toolbar.tsx`.
- [ ] **Task 2.3:** Create the placeholder component `apps/studio/app/components/CodeEditor.tsx`.
- [ ] **Task 2.4:** Create the placeholder component `apps/studio/app/components/Preview.tsx`.

### Group 3: Main Layout (Depends on Group 1 & 2)

- [ ] **Task 3.1:** Modify `apps/studio/app/page.tsx` to implement the two-panel CSS Grid layout.
- [ ] **Task 3.2:** Import and render the placeholder components (`Toolbar`, `CodeEditor`, `Preview`) in their correct positions within `page.tsx`.
- [ ] **Task 3.3:** Instantiate the `useClarityStore` hook within `page.tsx` to verify its availability.
```

---

### **`/speckit.implement`**

**นี่คือขั้นตอนที่สำคัญที่สุด** ผมจะรับ Task List นี้ และ **สร้างโค้ดทั้งหมด** ที่จำเป็นสำหรับ Phase 1 ให้คุณ นี่ไม่ใช่การให้คุณไปรันคำสั่ง แต่คือการที่ผมสร้างผลลัพธ์สุดท้ายให้คุณนำไป commit ได้เลย

**ผลลัพธ์: โค้ดที่สมบูรณ์สำหรับ Phase 1**

**`apps/studio/lib/state-manager.ts`**
```typescript
import { create } from 'zustand';

interface ClarityState {
  jsonInput: string;
  setJsonInput: (json: string) => void;
}

export const useClarityStore = create<ClarityState>((set) => ({
  jsonInput: '',
  setJsonInput: (json) => set({ jsonInput: json }),
}));
```

**`apps/studio/app/components/Toolbar.tsx`**
```tsx
export function Toolbar() {
  return (
    <div className="h-14 border-b border-zinc-700 flex items-center px-4">
      <p className="text-sm text-zinc-500">Toolbar Placeholder</p>
    </div>
  );
}
```

**`apps/studio/app/components/CodeEditor.tsx`**
```tsx
export function CodeEditor() {
  return (
    <div className="h-full border border-dashed border-zinc-700 m-2 rounded-lg flex items-center justify-center">
      <p className="text-zinc-600">Code Editor Area</p>
    </div>
  );
}
```

**`apps/studio/app/components/Preview.tsx`**
```tsx
export function Preview() {
  return (
    <div className="h-full border border-dashed border-zinc-700 m-2 rounded-lg flex items-center justify-center">
      <p className="text-zinc-600">Preview Area</p>
    </div>
  );
}
```

**`apps/studio/app/page.tsx`**
```tsx
'use client';

import { Toolbar } from './components/Toolbar';
import { CodeEditor } from './components/CodeEditor';
import { Preview } from './components/Preview';
import { useClarityStore } from '../lib/state-manager';
import { useEffect } from 'react';

export default function StudioPage() {
  // Task 3.3: Instantiate the hook to verify its availability
  const storeIsReady = useClarityStore((state) => state.jsonInput !== undefined);

  useEffect(() => {
    if (storeIsReady) {
      console.log("Clarity UI Studio: Zustand store initialized successfully.");
    }
  }, [storeIsReady]);

  return (
    <main className="h-screen w-screen grid grid-cols-2 bg-zinc-900 text-white font-sans">
      {/* Left Panel */}
      <div className="flex flex-col h-screen border-r border-zinc-800">
        <Toolbar />
        <div className="flex-grow p-2">
          <CodeEditor />
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-col h-screen p-2">
        <Preview />
      </div>
    </main>
  );
}
```

---

1.  **ส่วนที่ 1: เตรียมเอกสารโปรเจกต์ (Project Documentation)**
    ผมจะสร้างไฟล์ `README.md` ที่สมบูรณ์ ซึ่งเปรียบเสมือนคู่มือประจำโปรเจกต์สำหรับทุกคน (รวมถึงตัวเราเองในอนาคต) ที่จะเข้ามาทำงานกับ "Clarity UI Studio"

2.  **ส่วนที่ 2: เริ่มทำข้อ 1 - Set Up The World (The Setup Guide)**
    ผมจะให้ชุดคำสั่ง Shell ที่ชัดเจนและเป็นขั้นตอน สำหรับการสร้างโปรเจกต์ Monorepo นี้ตั้งแต่ศูนย์จนสามารถรัน `npm run dev` ได้

---

### **ส่วนที่ 1: เอกสารโปรเจกต์ (README.md)**

นี่คือไฟล์ `README.md` ที่คุณสามารถนำไปวางไว้ที่ Root ของ Repository บน GitHub ได้ทันที

```markdown
# Clarity UI Studio

**Clarity UI Studio** is a web-based application designed to accelerate the creation of beautiful, consistent web pages and components. It provides a powerful yet simple interface for developers and designers to build UIs declaratively using a predefined design system, and then export the results into production-ready React (Next.js) code.

## The Vision

- **Rapid Creation:** Quickly build web pages using a GUI or by directly editing the underlying JSON structure.
- **Systematic Design:** Enforce a consistent design system (colors, fonts, spacing, animations) across all applications within the organization.
- **Flexible Workflow:** Cater to both non-programmers via a user-friendly interface and power-users who prefer a code-centric approach.

---

## Tech Stack

- **Monorepo:** Turborepo
- **Package Manager:** npm
- **Framework:** Next.js 15.4+
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **UI Library:** A custom library (`@acme/ui`) inspired by shadcn/ui.
- **Text Editor:** Monaco Editor
- **Data Persistence:** JSONBin.io for template storage.

---

## Project Structure

This project is a monorepo managed by Turborepo.

- `apps/studio`: The main web application for the UI builder.
- `apps/web`: (Optional) An example web application that consumes the `@acme/ui` package.
- `packages/ui`: The core UI component library.
- `packages/tsconfig`: Shared TypeScript configurations.
- `packages/eslint-config-acme`: Shared ESLint configurations.

---

## Getting Started

Follow these steps to set up the development environment.

### Prerequisites

- Node.js (v18.x or later)
- npm (v9.x or later)

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <your-repository-name>
```

### 2. Install Dependencies

Install all dependencies for all packages and apps from the root directory.

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the `apps/studio` directory:

```bash
# apps/studio/.env.local

# Required for saving and loading templates from JSONBin.io
JSONBIN_API_KEY="YOUR_JSONBIN_API_KEY"
```

### 4. Run the Development Server

Run the development server for the `studio` application. Turborepo will automatically manage dependencies and build processes.

```bash
npm run dev
```

The `studio` app will be available at `http://localhost:3000`.

---

## Available Scripts

- `npm run dev`: Start the development servers for all apps.
- `npm run build`: Build all apps and packages for production.
- `npm run lint`: Lint all code in the monorepo.
- `npm run clean`: Clean up all `node_modules` and build artifacts.
```

---

### **ส่วนที่ 2: เริ่มทำข้อ 1 - Set Up The World (คำสั่ง Shell)**

นี่คือชุดคำสั่งที่คุณสามารถรันใน Terminal ของคุณเพื่อสร้างโครงสร้างโปรเจกต์ทั้งหมดได้เลย

**ขั้นตอนที่ 1: สร้าง Turborepo Starter**

```bash
# สร้างโปรเจกต์ Turborepo ใหม่ด้วย npm
npx create-turbo@latest clarity-ui-monorepo

# เข้าไปในโฟลเดอร์โปรเจกต์
cd clarity-ui-monorepo
```
*   เมื่อถูกถาม ให้เลือก `npm` เป็น package manager และเลือก "Web & Docs" เป็นตัวอย่างเริ่มต้น

**ขั้นตอนที่ 2: ปรับโครงสร้างและลบไฟล์ที่ไม่จำเป็น**

```bash
# ลบแอปและแพ็คเกจตัวอย่างที่ไม่ต้องการ
rm -rf apps/docs
rm -rf packages/ui

# เปลี่ยนชื่อแอป web เป็น studio
mv apps/web apps/studio

# ล้าง node_modules และไฟล์ lock เพื่อเริ่มต้นใหม่
npm run clean && rm -f package-lock.json
```

**ขั้นตอนที่ 3: สร้าง Package `@acme/ui` ขึ้นมาใหม่**

```bash
# สร้างโฟลเดอร์สำหรับ UI package
mkdir -p packages/ui/src

# สร้าง package.json สำหรับ UI package
cat <<EOT > packages/ui/package.json
{
  "name": "@acme/ui",
  "version": "0.0.0",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts --external react",
    "dev": "tsup src/index.ts --format esm,cjs --dts --external react --watch",
    "lint": "eslint . --max-warnings 0"
  },
  "devDependencies": {
    "@acme/eslint-config-acme": "workspace:*",
    "@acme/tsconfig": "workspace:*",
    "react": "^18.2.0",
    "tsup": "^8.0.2",
    "typescript": "^5.3.3"
  }
}
EOT

# สร้างไฟล์ tsup.config.ts สำหรับการ build
cat <<EOT > packages/ui/tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  external: ["react"],
  sourcemap: true,
  clean: true,
});
EOT

# สร้างไฟล์ index.ts เริ่มต้น
touch packages/ui/src/index.ts
```

**ขั้นตอนที่ 4: ติดตั้ง Dependencies และตั้งค่า Tailwind CSS**

```bash
# ติดตั้ง dependencies หลักที่ root
npm install

# ติดตั้ง dependencies สำหรับแอป studio
npm install -w studio zustand react-dropzone @monaco-editor/react framer-motion lucide-react

# ติดตั้ง Tailwind CSS ในแอป studio
npm install -w studio -D tailwindcss postcss autoprefixer
npx tailwindcss init -p --app -w studio
```

**ขั้นตอนที่ 5: ตั้งค่า `tailwind.config.ts` สำหรับ `studio`**

เปิดไฟล์ `apps/studio/tailwind.config.ts` และแก้ไขให้เป็นดังนี้:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // เพิ่ม path ไปยัง UI package ของเรา
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // เราจะมาเติมค่า theme ที่นี่ในภายหลัง
    },
  },
  plugins: [],
};
export default config;
```

**ขั้นตอนสุดท้าย: ทดสอบรันโปรเจกต์**

```bash
# กลับไปที่ root ของโปรเจกต์
# รัน development server
npm run dev
```
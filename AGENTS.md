# AGENTS.md

## รายงานความคืบหน้า (Progress Report)

**โปรเจกต์:** Clarity UI Studio
**สถานะ:** สิ้นสุดเฟส 1 - การตั้งค่าโปรเจกต์และโครงสร้างพื้นฐาน

ผมได้ดำเนินการตั้งค่าโปรเจกต์ "Clarity UI Studio" ตามหลักการ Specification-Driven Development (SDD) ที่ระบุไว้ในเอกสาร `AGENTS.md` ฉบับเดิมเสร็จสิ้นแล้ว โดยมีรายละเอียดดังนี้:

1.  **การตั้งค่า Monorepo:** ได้สร้างโครงสร้างโปรเจกต์แบบ Turborepo monorepo ด้วยตนเองทั้งหมด เนื่องจากคำสั่ง `npx create-turbo@latest` ไม่สามารถทำงานในสภาพแวดล้อมอัตโนมัติได้ ซึ่งประกอบด้วย:
    *   `apps/studio`: แอปพลิเคชันหลักที่ใช้ Next.js
    *   `packages/ui`: ไลบรารีสำหรับ UI components ที่ใช้ร่วมกัน
    *   `packages/tsconfig`: การตั้งค่า TypeScriptกลาง
    *   `packages/eslint-config-acme`: การตั้งค่า ESLint กลาง

2.  **การแก้ไขปัญหาระหว่างการตั้งค่า:**
    *   **NPM Workspaces:** แก้ไขไฟล์ `package.json` เพื่อให้สามารถติดตั้ง local packages (ที่ใช้ `workspace:*`) ได้สำเร็จ
    *   **Tailwind CSS:** สร้างไฟล์ `tailwind.config.ts` ด้วยตนเอง เนื่องจาก `npx tailwindcss init` ทำงานไม่ถูกต้อง
    *   **Development Server:** พบปัญหา `npm run dev` timeout อย่างต่อเนื่อง จึงเปลี่ยนไปใช้วิธีการตรวจสอบความถูกต้องของโปรเจกต์ด้วย `npm run build` แทน

3.  **การสร้างโครงสร้างแอปพลิเคชันพื้นฐาน:** ได้สร้างไฟล์และคอมโพเนนต์ที่จำเป็นสำหรับเฟส 1 ตามที่ระบุไว้:
    *   สร้าง `state-manager.ts` สำหรับการจัดการ state ด้วย Zustand
    *   สร้าง Placeholder components สำหรับ `Toolbar`, `CodeEditor`, และ `Preview`
    *   อัปเดตหน้าหลัก (`app/page.tsx`) ให้มี layout แบบ 2-panel ตามที่ต้องการ

4.  **การตรวจสอบความถูกต้อง:** ได้ทำการรัน `npm run build` ซึ่งทำงานสำเร็จ เป็นการยืนยันว่าโครงสร้างโปรเจกต์, dependencies, และการตั้งค่าทั้งหมดถูกต้องและพร้อมสำหรับดำเนินการในเฟสต่อไป

## แผนการดำเนินงานเฟส 2 (Phase 2 Plan): Real-time Preview

**เป้าหมายหลัก:** ทำให้ผู้ใช้สามารถเห็นผลลัพธ์ของโค้ดที่เขียนใน `CodeEditor` ได้ทันทีใน `Preview` component

**ขั้นตอนการดำเนินงาน:**

1.  **ปรับปรุง State Management (`lib/state-manager.ts`):**
    *   เพิ่ม state ใหม่ใน Zustand store เพื่อจัดเก็บโค้ด (string) ที่ผู้ใช้ป้อนเข้ามา
    *   สร้าง action สำหรับอัปเดต state ของโค้ดดังกล่าว

2.  **พัฒนา `CodeEditor` Component (`components/CodeEditor.tsx`):**
    *   แทนที่ placeholder เดิมด้วย `<textarea>` (หรือ code editor library เช่น CodeMirror/Monaco ในอนาคต)
    *   เชื่อมต่อ `<textarea>` กับ Zustand store:
        *   ดึงค่าโค้ดปัจจุบันจาก store มาแสดง
        *   เมื่อผู้ใช้พิมพ์โค้ด ให้เรียก action ของ Zustand เพื่ออัปเดต state

3.  **พัฒนา `Preview` Component (`components/Preview.tsx`):**
    *   แทนที่ placeholder เดิมด้วย `<iframe>`
    *   เชื่อมต่อ `<iframe>` กับ Zustand store เพื่อดึงค่าโค้ดล่าสุดมาแสดง
    *   ใช้ `srcDoc` attribute ของ `<iframe>` เพื่อ render โค้ดของผู้ใช้ในสภาพแวดล้อมที่ปลอดภัย (sandboxed)

4.  **การตรวจสอบความถูกต้อง:**
    *   หลังจากดำเนินการเสร็จสิ้น จะทำการทดสอบโดยการพิมพ์โค้ดใน `CodeEditor` และตรวจสอบว่า `Preview` component แสดงผลลัพธ์ที่อัปเดตตามเวลาจริงหรือไม่

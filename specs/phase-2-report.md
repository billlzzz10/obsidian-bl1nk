# AGENTS.md

## รายงานความคืบหน้า (Progress Report)

**โปรเจกต์:** Clarity UI Studio
**สถานะ:** สิ้นสุดเฟส 2 - Real-time Preview

ผมได้ดำเนินการพัฒนาฟีเจอร์ Real-time Preview ในเฟสที่ 2 เสร็จสิ้นแล้ว โดยมีรายละเอียดดังนี้:

1.  **การอัปเดต State Management:** ได้เพิ่ม `codeInput` และ `setCodeInput` เข้าไปใน Zustand store (`lib/state-manager.ts`) เพื่อใช้ในการจัดเก็บและอัปเดตโค้ดที่ผู้ใช้ป้อนเข้ามา

2.  **การพัฒนา `CodeEditor`:** ได้เปลี่ยน `CodeEditor` component (`app/components/CodeEditor.tsx`) จาก placeholder ให้เป็น `<textarea>` ที่เชื่อมต่อกับ Zustand store ทำให้สามารถรับ input จากผู้ใช้และอัปเดต state ได้

3.  **การพัฒนา `Preview`:** ได้เปลี่ยน `Preview` component (`app/components/Preview.tsx`) จาก placeholder ให้เป็น `<iframe>` ที่ดึงข้อมูลโค้ดล่าสุดจาก Zustand store มาแสดงผลผ่าน `srcDoc` attribute

4.  **การแก้ไขปัญหาและตรวจสอบความถูกต้อง:**
    *   **Module Resolution:** พบและแก้ไขปัญหา `Module not found` ที่เกิดจากการตั้งค่า `paths` alias (`@/*`) ใน `tsconfig.json` ไม่ถูกต้อง
    *   **Development Server Timeout:** ปัญหา `npm run dev` timeout ยังคงอยู่ จึงใช้ `npm run build` และ `npm start` ในการตรวจสอบความถูกต้องของแอปพลิเคชัน
    *   **Playwright Verification:** เนื่องจาก `npm start` ไม่สามารถทำงานแบบ interactive ใน background ได้ จึงได้ใช้ Playwright ในการเขียนสคริปต์เพื่อทดสอบฟีเจอร์ real-time preview โดยอัตโนมัติ และได้ทำการยืนยันความถูกต้องผ่าน screenshot ที่สร้างขึ้น

## แผนการดำเนินงานเฟส 3 (Phase 3 Plan): Toolbar and Component Generation

**เป้าหมายหลัก:** สร้าง `Toolbar` ที่สามารถรับ input เป็น JSON และมีปุ่มสำหรับ generate UI components ไปยัง `CodeEditor`

**ขั้นตอนการดำเนินงาน:**

1.  **พัฒนา `Toolbar` Component (`app/components/Toolbar.tsx`):**
    *   สร้าง UI สำหรับ `Toolbar` ซึ่งประกอบด้วย:
        *   `<textarea>` สำหรับรับ JSON input
        *   `<button>` สำหรับ trigger การ generate component
    *   เชื่อมต่อ `<textarea>` ของ `Toolbar` กับ `jsonInput` state ใน Zustand store

2.  **พัฒนาฟังก์ชันการ Generate Component:**
    *   สร้าง logic ในการแปลง JSON input ที่ได้รับจาก `jsonInput` state ให้กลายเป็นโค้ด HTML/CSS (หรือ React component ในอนาคต)
    *   เมื่อผู้ใช้กดปุ่ม "Generate" จะทำการเรียกฟังก์ชันนี้ และนำผลลัพธ์ที่ได้ไปอัปเดต `codeInput` state ใน Zustand store

3.  **การอัปเดต `CodeEditor` และ `Preview`:**
    *   `CodeEditor` และ `Preview` ควรจะอัปเดตอัตโนมัติเมื่อ `codeInput` มีการเปลี่ยนแปลงจากการ generate component ซึ่งได้ทำไว้แล้วในเฟส 2

4.  **การตรวจสอบความถูกต้อง:**
    *   จะทำการทดสอบโดยการป้อน JSON input ที่ถูกต้องใน `Toolbar`, กดปุ่ม "Generate", และตรวจสอบว่า `CodeEditor` และ `Preview` แสดงผลลัพธ์ที่ถูกต้องหรือไม่

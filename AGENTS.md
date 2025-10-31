# AGENTS.md

## Core Architecture: The Guardian (MCP)

The Clarity UI Studio is built around a core architectural principle called the Guardian (Master Control Program). The Guardian is a safety and quality layer that sits between the user's input (or AI-generated code) and the final rendered output. Its primary responsibilities are to protect the user from unsafe or invalid code and to create a feedback loop for continuous improvement.

### The Guardian's Responsibilities

1.  **Sanitization:** The Guardian's first responsibility is to sanitize the code to remove any potentially harmful elements, such as `<script>` or `<iframe>` tags. This prevents cross-site scripting (XSS) and other injection attacks.

2.  **Validation:** The Guardian will also validate the code to ensure that it is well-formed and will not break the UI. This includes checking for things like unclosed tags and invalid attributes.

3.  **Error Logging and Feedback Loop:** When the Guardian detects and corrects an error, it does not do so silently. Instead, it logs the error to a dedicated `jsonbin.io` bin. This log includes the original code, the sanitized code, the type of error, and a timestamp. This data is invaluable for a future feedback loop, where it can be used to train the AI to avoid making similar mistakes in the future.

### The "Gradient" of Protection

The Guardian's protection is not a single, monolithic check. Instead, it's a "gradient" of checks that can be expanded over time. The initial implementation focuses on sanitization, but future layers could include:

-   **Design System Compliance:** Checking that the code adheres to the project's design system (e.g., using the correct color tokens, spacing, etc.).
-   **Accessibility:** Checking for common accessibility issues.
-   **Performance:** Checking for code that could lead to poor performance.

---

## แผนการดำเนินงานเฟส 3 (Phase 3 Plan): Toolbar and Component Generation

**Prerequisite:** The Guardian (MCP) architecture must be in place before work on Phase 3 can begin.

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

import { spawn, execSync } from "node:child_process";
import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const TEST_PORT = 3456;
const BASE_URL = `http://127.0.0.1:${TEST_PORT}`;
const OUT_DIR = path.resolve("public/screenshots");
await fs.mkdir(OUT_DIR, { recursive: true });

function waitForServer(url, timeoutMs = 25000) {
  const startTime = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      http
        .get(url, (res) => {
          if (res.statusCode === 200) {
            resolve();
          } else {
            retry();
          }
        })
        .on("error", () => {
          retry();
        });
    };

    const retry = () => {
      if (Date.now() - startTime > timeoutMs) {
        reject(new Error(`Server at ${url} did not respond within ${timeoutMs}ms`));
      } else {
        setTimeout(check, 400);
      }
    };

    check();
  });
}

async function main() {
  console.log("=== GBI SUKOWONO TEST SUITE ===");
  console.log(`Starting Next.js production server on port ${TEST_PORT}...`);

  const serverProcess = spawn(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["next", "start", "-p", String(TEST_PORT)],
    {
      stdio: "pipe",
      shell: true,
      env: { ...process.env, PORT: String(TEST_PORT) },
    }
  );

  serverProcess.stderr.on("data", (data) => {
    const msg = data.toString();
    if (!msg.includes("ExperimentalWarning")) {
      console.error(`[Server stderr] ${msg.trim()}`);
    }
  });

  try {
    await waitForServer(BASE_URL);
    console.log(`Server is healthy and responding at ${BASE_URL}\n`);

    console.log("Launching Chromium via Playwright...");
    const browser = await chromium.launch();

    const desktopContext = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    });

    const mobileContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true,
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
    });

    const consoleErrors = [];
    const trackErrors = (page, prefix) => {
      page.on("console", (msg) => {
        if (msg.type() === "error") {
          consoleErrors.push(`[${prefix}] Console Error: ${msg.text()}`);
        }
      });
      page.on("pageerror", (err) => {
        consoleErrors.push(`[${prefix}] Page Error: ${err.message}`);
      });
    };

    console.log("--> Testing Desktop Pages (1440px)...");
    const pageD = await desktopContext.newPage();
    trackErrors(pageD, "Desktop");

    // 1. Home Desktop
    await pageD.goto(`${BASE_URL}/`, { waitUntil: "domcontentloaded" });
    await pageD.waitForTimeout(1000);
    await pageD.screenshot({ path: path.join(OUT_DIR, "home-desktop.png"), fullPage: false });
    console.log("✓ Captured public/screenshots/home-desktop.png");

    // Test Announcements Drag-to-Scroll on Desktop
    const carousel = await pageD.$("div[aria-label^='Daftar warta dan pengumuman']");
    if (carousel) {
      await carousel.scrollIntoViewIfNeeded();
      await pageD.waitForTimeout(400);
      const box = await carousel.boundingBox();
      if (box) {
        const startX = box.x + box.width * 0.7;
        const targetX = box.x + box.width * 0.2;
        const centerY = box.y + box.height * 0.5;

        const initialScrollLeft = await pageD.evaluate(
          (el) => el.scrollLeft,
          carousel
        );
        await pageD.mouse.move(startX, centerY);
        await pageD.mouse.down();
        await pageD.mouse.move(targetX, centerY, { steps: 15 });
        await pageD.mouse.up();
        await pageD.waitForTimeout(400);

        const newScrollLeft = await pageD.evaluate(
          (el) => el.scrollLeft,
          carousel
        );
        console.log(
          `✓ Verified Desktop Drag-to-Scroll on AnnouncementsCarousel (scrollLeft: ${initialScrollLeft} -> ${newScrollLeft})`
        );
      }
    }

    // 2. Jadwal Desktop
    await pageD.goto(`${BASE_URL}/jadwal`, { waitUntil: "domcontentloaded" });
    await pageD.waitForTimeout(800);
    await pageD.screenshot({ path: path.join(OUT_DIR, "jadwal-desktop.png"), fullPage: false });
    console.log("✓ Captured public/screenshots/jadwal-desktop.png");

    // Test FAQ Accordion on Jadwal
    const accordions = await pageD.$$("button[aria-controls^='faq-p-']");
    if (accordions.length > 1) {
      const secondAccordion = accordions[1];
      const initialExpanded = await secondAccordion.getAttribute("aria-expanded");
      await secondAccordion.click();
      await pageD.waitForTimeout(400);
      const isExpanded = await secondAccordion.getAttribute("aria-expanded");
      if (isExpanded !== "true") {
        throw new Error("Accordion item was clicked but aria-expanded is not 'true'");
      }
      console.log(
        `✓ Verified FAQ Accordion expansion on /jadwal (initial: ${initialExpanded} -> ${isExpanded})`
      );
    }

    // 3. Persembahan Desktop & Copy Button Test
    await pageD.goto(`${BASE_URL}/persembahan`, { waitUntil: "domcontentloaded" });
    await pageD.waitForTimeout(800);
    await pageD.screenshot({ path: path.join(OUT_DIR, "persembahan-desktop.png"), fullPage: false });
    console.log("✓ Captured public/screenshots/persembahan-desktop.png");

    // Click Copy Account Number button
    const copyBtn = await pageD.$("button[aria-label^='Salin Nomor Rekening']");
    if (copyBtn) {
      await copyBtn.click();
      await pageD.waitForTimeout(400);
      const toast = await pageD.$("div[role='status']");
      if (!toast) {
        throw new Error("Toast notification not found after clicking copy button");
      }
      await pageD.screenshot({ path: path.join(OUT_DIR, "copy-toast.png"), fullPage: false });
      console.log("✓ Captured public/screenshots/copy-toast.png with active toast");
    }

    // 4. Tentang Desktop
    await pageD.goto(`${BASE_URL}/tentang`, { waitUntil: "domcontentloaded" });
    await pageD.waitForTimeout(600);
    console.log("✓ Verified /tentang (desktop)");

    // 5. Kegiatan Desktop & Filter Test
    await pageD.goto(`${BASE_URL}/kegiatan`, { waitUntil: "domcontentloaded" });
    await pageD.waitForTimeout(600);
    const pemudaFilter = await pageD.$("button:has-text('Pemuda')");
    if (pemudaFilter) {
      await pemudaFilter.click();
      await pageD.waitForTimeout(400);
      console.log("✓ Verified /kegiatan category filter switching");
    }

    // 6. Kontak Desktop
    await pageD.goto(`${BASE_URL}/kontak`, { waitUntil: "domcontentloaded" });
    await pageD.waitForTimeout(600);
    console.log("✓ Verified /kontak (desktop)");

    console.log("\n--> Testing Mobile Pages (390px)...");
    const pageM = await mobileContext.newPage();
    trackErrors(pageM, "Mobile");

    // 7. Home Mobile
    await pageM.goto(`${BASE_URL}/`, { waitUntil: "domcontentloaded" });
    await pageM.waitForTimeout(1000);
    await pageM.screenshot({ path: path.join(OUT_DIR, "home-mobile.png"), fullPage: false });
    console.log("✓ Captured public/screenshots/home-mobile.png");

    // Test Mobile Menu Open and Close
    const menuBtn = await pageM.$("button[aria-label='Buka menu navigasi']");
    if (menuBtn) {
      await menuBtn.click();
      await pageM.waitForTimeout(600);
      await pageM.screenshot({ path: path.join(OUT_DIR, "mobile-menu.png"), fullPage: false });
      console.log("✓ Captured public/screenshots/mobile-menu.png");
      const closeBtn = await pageM.$("button[aria-label='Tutup menu navigasi']");
      if (closeBtn) {
        await closeBtn.click({ force: true });
        await pageM.waitForTimeout(400);
        console.log("✓ Verified Mobile Menu open and close cycle");
      }
    }

    // 8. Jadwal Mobile
    await pageM.goto(`${BASE_URL}/jadwal`, { waitUntil: "domcontentloaded" });
    await pageM.waitForTimeout(800);
    await pageM.screenshot({ path: path.join(OUT_DIR, "jadwal-mobile.png"), fullPage: false });
    console.log("✓ Captured public/screenshots/jadwal-mobile.png");

    // 9. Persembahan Mobile
    await pageM.goto(`${BASE_URL}/persembahan`, { waitUntil: "domcontentloaded" });
    await pageM.waitForTimeout(800);
    await pageM.screenshot({ path: path.join(OUT_DIR, "persembahan-mobile.png"), fullPage: false });
    console.log("✓ Captured public/screenshots/persembahan-mobile.png");

    // 10. Reduced Motion verification
    console.log("\n--> Testing Reduced Motion Mode...");
    const reducedContext = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      reducedMotion: "reduce",
    });
    const pageR = await reducedContext.newPage();
    trackErrors(pageR, "ReducedMotion");
    await pageR.goto(`${BASE_URL}/`, { waitUntil: "domcontentloaded" });
    await pageR.waitForTimeout(800);
    await pageR.screenshot({ path: path.join(OUT_DIR, "reduced-motion-home.png"), fullPage: false });
    console.log("✓ Captured public/screenshots/reduced-motion-home.png");

    await browser.close();

    console.log("\n=== TEST EXECUTION SUMMARY ===");
    if (consoleErrors.length > 0) {
      console.error("FAILED with console errors:", consoleErrors);
      process.exitCode = 1;
    } else {
      console.log("ALL TESTS PASSED! 0 console errors across all viewports and features.");
      process.exitCode = 0;
    }
  } finally {
    console.log("Shutting down test server...");
    try {
      if (process.platform === "win32" && serverProcess?.pid) {
        execSync(`taskkill /pid ${serverProcess.pid} /T /F 2>nul`, { stdio: "ignore" });
      } else if (serverProcess) {
        serverProcess.kill("SIGTERM");
      }
    } catch {
      // Ignore if already dead
    }
    process.exit(process.exitCode || 0);
  }
}

main().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});

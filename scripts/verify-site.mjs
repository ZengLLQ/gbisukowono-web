import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.resolve("public/screenshots");
await fs.mkdir(OUT_DIR, { recursive: true });

async function run() {
  console.log("Connecting to Chromium...");
  const browser = await chromium.launch();

  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  });

  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
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

  console.log("Testing Desktop Pages...");
  const pageD = await desktopContext.newPage();
  trackErrors(pageD, "Desktop");

  // 1. Home Desktop
  await pageD.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
  await pageD.waitForTimeout(1000);
  await pageD.screenshot({ path: path.join(OUT_DIR, "home-desktop.png"), fullPage: false });
  console.log("Captured home-desktop.png");

  // 2. Jadwal Desktop
  await pageD.goto("http://localhost:3000/jadwal", { waitUntil: "domcontentloaded" });
  await pageD.waitForTimeout(800);
  await pageD.screenshot({ path: path.join(OUT_DIR, "jadwal-desktop.png"), fullPage: false });
  console.log("Captured jadwal-desktop.png");

  // Test FAQ Accordion on Jadwal
  const firstAccordion = await pageD.$("button[aria-controls^='faq-p-']");
  if (firstAccordion) {
    await firstAccordion.click();
    await pageD.waitForTimeout(400);
    console.log("Clicked FAQ Accordion on Jadwal");
  }

  // 3. Persembahan Desktop & Copy Button Test
  await pageD.goto("http://localhost:3000/persembahan", { waitUntil: "domcontentloaded" });
  await pageD.waitForTimeout(800);
  await pageD.screenshot({ path: path.join(OUT_DIR, "persembahan-desktop.png"), fullPage: false });
  console.log("Captured persembahan-desktop.png");

  // Click Copy Account Number button
  const copyBtn = await pageD.$("button[aria-label^='Salin Nomor Rekening']");
  if (copyBtn) {
    await copyBtn.click();
    await pageD.waitForTimeout(400);
    await pageD.screenshot({ path: path.join(OUT_DIR, "copy-toast.png"), fullPage: false });
    console.log("Captured copy-toast.png with active toast");
  }

  // 4. Tentang Desktop
  await pageD.goto("http://localhost:3000/tentang", { waitUntil: "domcontentloaded" });
  await pageD.waitForTimeout(600);
  console.log("Verified /tentang");

  // 5. Kegiatan Desktop & Filter Test
  await pageD.goto("http://localhost:3000/kegiatan", { waitUntil: "domcontentloaded" });
  await pageD.waitForTimeout(600);
  const pemudaFilter = await pageD.$("button:has-text('Pemuda')");
  if (pemudaFilter) {
    await pemudaFilter.click();
    await pageD.waitForTimeout(400);
    console.log("Verified /kegiatan filter");
  }

  // 6. Kontak Desktop
  await pageD.goto("http://localhost:3000/kontak", { waitUntil: "domcontentloaded" });
  await pageD.waitForTimeout(600);
  console.log("Verified /kontak");

  console.log("Testing Mobile Pages...");
  const pageM = await mobileContext.newPage();
  trackErrors(pageM, "Mobile");

  // 7. Home Mobile
  await pageM.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
  await pageM.waitForTimeout(1000);
  await pageM.screenshot({ path: path.join(OUT_DIR, "home-mobile.png"), fullPage: false });
  console.log("Captured home-mobile.png");

  // Test Mobile Menu
  const menuBtn = await pageM.$("button[aria-label='Buka menu navigasi']");
  if (menuBtn) {
    await menuBtn.click();
    await pageM.waitForTimeout(600);
    await pageM.screenshot({ path: path.join(OUT_DIR, "mobile-menu.png"), fullPage: false });
    console.log("Captured mobile-menu.png");
    // Close menu
    const closeBtn = await pageM.$("button[aria-label='Tutup menu navigasi']");
    if (closeBtn) {
      await closeBtn.click({ force: true });
      await pageM.waitForTimeout(400);
    }
  }

  // 8. Jadwal Mobile
  await pageM.goto("http://localhost:3000/jadwal", { waitUntil: "domcontentloaded" });
  await pageM.waitForTimeout(800);
  await pageM.screenshot({ path: path.join(OUT_DIR, "jadwal-mobile.png"), fullPage: false });
  console.log("Captured jadwal-mobile.png");

  // 9. Persembahan Mobile
  await pageM.goto("http://localhost:3000/persembahan", { waitUntil: "domcontentloaded" });
  await pageM.waitForTimeout(800);
  await pageM.screenshot({ path: path.join(OUT_DIR, "persembahan-mobile.png"), fullPage: false });
  console.log("Captured persembahan-mobile.png");

  // 10. Reduced Motion verification
  console.log("Testing Reduced Motion Mode...");
  const reducedContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  const pageR = await reducedContext.newPage();
  trackErrors(pageR, "ReducedMotion");
  await pageR.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
  await pageR.waitForTimeout(800);
  await pageR.screenshot({ path: path.join(OUT_DIR, "reduced-motion-home.png"), fullPage: false });
  console.log("Captured reduced-motion-home.png");

  await browser.close();

  console.log("\n=== VERIFICATION RESULT ===");
  if (consoleErrors.length > 0) {
    console.error("Console Errors encountered:", consoleErrors);
    process.exit(1);
  } else {
    console.log("SUCCESS: 0 console errors detected across all tested routes and viewports!");
  }
}

run().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});

// Konversi foto sumber (JPG/PNG) menjadi WebP terkompresi di public/images.
// Pemakaian: node scripts/optimize-images.mjs <folder-sumber>
// Nama file sumber "nama_123456.jpg" -> "public/images/nama.webp" (akhiran angka dibuang).
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const srcDir = process.argv[2];
if (!srcDir) {
  console.error("Pemakaian: node scripts/optimize-images.mjs <folder-sumber>");
  process.exit(1);
}
const outDir = path.resolve("public/images");
await mkdir(outDir, { recursive: true });

for (const file of await readdir(srcDir)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const base = file.replace(/\.(jpe?g|png)$/i, "").replace(/_\d{6,}$/, "").replace(/_/g, "-");
  const out = path.join(outDir, `${base}.webp`);
  const info = await sharp(path.join(srcDir, file))
    .resize({ width: 2000, withoutEnlargement: true })
    .webp({ quality: 74 })
    .toFile(out);
  console.log(`${file} -> ${path.relative(process.cwd(), out)} (${Math.round(info.size / 1024)} KB, ${info.width}x${info.height})`);
}

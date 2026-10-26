// scripts/fetch-assets.mjs  (Node 20+, butuh internet; jalankan: pnpm assets)
import { mkdir, writeFile } from "node:fs/promises";

const BASE = "https://cdn.jsdelivr.net/gh/shuding/fluentui-emoji-unicode/assets/";
const ITEMS = {
  "folder-open": "1f4c2",
  "folder": "1f4c1",
  "pencil": "270f",
  "pen": "1f58a",
  "scissors": "2702",
  "ruler-straight": "1f4cf",
  "ruler-triangle": "1f4d0",
  "memo": "1f4dd",
  "clipboard": "1f4cb",
  "keyboard": "2328",
  "pushpin": "1f4cc",
  "paperclip": "1f4ce",
  "mouse": "1f5b1",
  "laptop": "1f4bb",
  "bulb": "1f4a1",
  "rocket": "1f680",
  "trophy": "1f3c6",
  "books": "1f4da",
  "palette": "1f3a8",
  "bookmark": "1f516",
  "envelope": "2709",
  "puzzle": "1f9e9",
  "star": "2b50",
  "graduation": "1f393",
};

await mkdir("public/assets/3d", { recursive: true });
const failed = [];
let ok = 0;
for (const [name, hex] of Object.entries(ITEMS)) {
  let done = false;
  for (const file of [`${hex}_3d.png`, `${hex}-fe0f_3d.png`]) {
    try {
      const res = await fetch(BASE + file);
      if (res.ok) {
        await writeFile(
          `public/assets/3d/${name}.png`,
          Buffer.from(await res.arrayBuffer())
        );
        ok++;
        done = true;
        break;
      }
    } catch {
      /* coba kandidat berikutnya */
    }
  }
  if (!done) failed.push(name);
}
console.log(`Selesai: ${ok}/${Object.keys(ITEMS).length} aset.`);
if (failed.length) console.log("Gagal (akan memakai fallback ikon):", failed.join(", "));

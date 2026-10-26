// src/lib/torn.ts
function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** clip-path polygon: tepi BAWAH sobek. amp = kedalaman sobekan dalam persen tinggi elemen. */
export function tornBottom(seed: string, steps = 34, amp = 2.2): string {
  const r = mulberry32(hash(seed));
  const pts: string[] = ["0% 0%", "100% 0%"];
  for (let i = 0; i <= steps; i++) {
    const x = 100 - (i / steps) * 100;
    const y = 100 - r() * amp;
    pts.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }
  return `polygon(${pts.join(",")})`;
}

/** clip-path polygon: tepi ATAS sobek */
export function tornTop(seed: string, steps = 34, amp = 2.2): string {
  const r = mulberry32(hash(seed));
  const pts: string[] = ["100% 100%", "0% 100%"];
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * 100;
    const y = r() * amp;
    pts.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }
  return `polygon(${pts.join(",")})`;
}

/** rotasi deterministik dalam rentang [-max, max] derajat */
export function seededRotation(seed: string, max = 4): number {
  const r = mulberry32(hash(seed))();
  return +((r * 2 - 1) * max).toFixed(2);
}

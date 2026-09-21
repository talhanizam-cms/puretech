import fs from "fs";
import path from "path";

const videoMap = {
  "hero-bg.mp4": "vercel.com.mp4",
  "work-bg.mp4": "pocket.tailwindui.com.mp4",
  "capabilities-bg.mp4": "salient.tailwindui.com.mp4",
  "what-if-bg.mp4": "cursor.com.mp4",
  "contact-bg.mp4": "supabase.com.mp4",
  "hero-onesided-reel.mp4": "resend.com.mp4",
  "omnihealth-ai.mp4": "pocket.tailwindui.com.mp4",
  "veloce-capital.mp4": "spotlight.tailwindui.com.mp4",
  "aerologix-global.mp4": "supabase.com.mp4",
  "sentinel-qa.mp4": "salient.tailwindui.com.mp4",
  "solaris-os.mp4": "pocket.tailwindui.com.mp4",
  "synapse-copilot.mp4": "cursor.com.mp4"
};

const baseUrl = "https://raw.githubusercontent.com/tailwindlabs/tailwindcss.com/main/public/showcase-videos/";

async function downloadAll() {
  const targetDir = "public/videos";
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  for (const [targetName, sourceFile] of Object.entries(videoMap)) {
    const url = baseUrl + sourceFile;
    const dest = path.join(targetDir, targetName);
    console.log(`Downloading ${sourceFile} -> ${dest}...`);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(arrayBuffer));
      console.log(`✓ Saved ${dest} (${(arrayBuffer.byteLength / 1024).toFixed(1)} KB)`);
    } catch(e) {
      console.error(`✗ Failed ${sourceFile}:`, e.message);
    }
  }
  console.log("All stock videos downloaded successfully!");
}

downloadAll().catch(console.error);

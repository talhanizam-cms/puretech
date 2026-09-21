import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const OUTPUT_DIR = path.resolve('public/videos');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const TEMP_BASE = '/tmp/fantasy_video_build';
if (!fs.existsSync(TEMP_BASE)) {
  fs.mkdirSync(TEMP_BASE, { recursive: true });
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// -------------------------------------------------------------
// 1. AUTOMOTIVE EV COCKPIT OS (Fantasy.co signature category)
// -------------------------------------------------------------
function renderAutomotiveUI({ width = 1280, height = 720, t = 0 }) {
  const speed = Math.round(72 + Math.sin(t * 1.5) * 3);
  const rpmAngle = (speed / 120) * 180;
  const laneOffset = (t * 160) % 80;

  // Sound visualizer bars
  const eqBars = Array.from({ length: 14 }).map((_, i) => {
    const h = 10 + Math.abs(Math.sin(t * 5 + i * 0.6)) * 26;
    return `<rect x="${680 + i * 8}" y="${520 - h}" width="4" height="${h}" rx="2" fill="#38bdf8"/>`;
  }).join('');

  return `
    <rect width="${width}" height="${height}" fill="#06070a"/>

    <!-- Subtle studio ambient glow -->
    <circle cx="640" cy="300" r="380" fill="#0284c7" opacity="0.08"/>
    <circle cx="200" cy="500" r="260" fill="#6366f1" opacity="0.06"/>

    <!-- Top Status Bar -->
    <g transform="translate(60, 45)">
      <text x="0" y="0" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="700" letter-spacing="3">HYPERION IN-CABIN OS // VISION 2026</text>
      <text x="${width - 240}" y="0" fill="#94a3b8" font-size="11" font-family="monospace">72°F · AUTONOMOUS L4 · 5G ULTRA</text>
    </g>

    <!-- Center Autonomous Road Visualization -->
    <g transform="translate(${width / 2}, 340)">
      <!-- Perspective Road Lines -->
      <line x1="-120" y1="120" x2="-20" y2="0" stroke="#38bdf8" stroke-width="2.5" opacity="0.6"/>
      <line x1="120" y1="120" x2="20" y2="0" stroke="#38bdf8" stroke-width="2.5" opacity="0.6"/>
      <line x1="0" y1="${laneOffset}" x2="0" y2="${laneOffset + 30}" stroke="#ffffff" stroke-width="3" opacity="0.8"/>
      <line x1="0" y1="${laneOffset - 60}" x2="0" y2="${laneOffset - 30}" stroke="#ffffff" stroke-width="3" opacity="0.8"/>

      <!-- 3D Sleek Vehicle Wireframe Silhouette -->
      <rect x="-35" y="45" width="70" height="90" rx="18" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
      <rect x="-25" y="60" width="50" height="35" rx="8" fill="#1e293b" opacity="0.8"/>
      <circle cx="-20" cy="130" r="6" fill="#f43f5e"/>
      <circle cx="20" cy="130" r="6" fill="#f43f5e"/>

      <!-- Lead Car Detection Ring -->
      <ellipse cx="0" cy="-20" rx="40" ry="12" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="4,3"/>
      <text x="0" y="-35" fill="#34d399" font-size="10" font-family="monospace" text-anchor="middle">SAFE DISTANCE · 84 FT</text>
    </g>

    <!-- Left Instrument Cluster Gauge -->
    <g transform="translate(100, 240)">
      <circle cx="100" cy="100" r="90" fill="#090d16" stroke="#1e293b" stroke-width="3"/>
      <circle cx="100" cy="100" r="90" fill="none" stroke="#38bdf8" stroke-width="4" stroke-dasharray="280" stroke-dashoffset="${280 - (speed / 120) * 280}"/>
      <text x="100" y="95" fill="#ffffff" font-size="44" font-family="sans-serif" font-weight="900" text-anchor="middle">${speed}</text>
      <text x="100" y="125" fill="#64748b" font-size="11" font-family="monospace" text-anchor="middle">MPH · CRUISE</text>

      <!-- Range Pill -->
      <rect x="25" y="210" width="150" height="34" rx="17" fill="#0c1220" stroke="#1e293b" stroke-width="1"/>
      <circle cx="45" cy="227" r="4" fill="#34d399"/>
      <text x="58" y="231" fill="#e2e8f0" font-size="11" font-family="monospace">RANGE: 342 MI</text>
    </g>

    <!-- Right Media & Route Card -->
    <g transform="translate(${width - 440}, 200)">
      <!-- Spatial Music Card -->
      <rect x="0" y="0" width="340" height="150" rx="18" fill="#0b0e18" stroke="#1e263c" stroke-width="1.5"/>
      <rect x="18" y="20" width="70" height="70" rx="14" fill="#1e1b4b" stroke="#6366f1" stroke-width="1"/>
      <circle cx="53" cy="55" r="20" fill="#312e81"/>
      <circle cx="53" cy="55" r="8" fill="#818cf8"/>

      <text x="104" y="44" fill="#38bdf8" font-size="9" font-family="monospace">DOLBY ATMOS SPATIAL</text>
      <text x="104" y="66" fill="#ffffff" font-size="15" font-family="sans-serif" font-weight="800">Nocturne in Cyber</text>
      <text x="104" y="84" fill="#94a3b8" font-size="11" font-family="sans-serif">Chopin (Spatial Re-Engineered)</text>

      <!-- Live sound visualizer bars -->
      <g transform="translate(-575, -410)">
        ${eqBars}
      </g>

      <!-- Navigation Next Turn Card -->
      <rect x="0" y="170" width="340" height="110" rx="18" fill="#0b0e18" stroke="#1e263c" stroke-width="1.5"/>
      <circle cx="45" cy="225" r="22" fill="#0284c7" opacity="0.2"/>
      <path d="M 45,212 L 45,238 M 45,212 L 35,222 M 45,212 L 55,222" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
      <text x="82" y="218" fill="#ffffff" font-size="14" font-family="sans-serif" font-weight="800">In 800 ft, Turn Right</text>
      <text x="82" y="238" fill="#94a3b8" font-size="11" font-family="sans-serif">Onto Technology Parkway NW</text>
    </g>
  `;
}

// -------------------------------------------------------------
// 2. AI-NATIVE GENERATIVE OPERATING SYSTEM (Fantasy signature)
// -------------------------------------------------------------
function renderAIGenerativeUI({ width = 1280, height = 720, t = 0 }) {
  // Pulsating glowing voice orb
  const orbScale = 1 + Math.sin(t * 4) * 0.12;
  const wave1 = Math.sin(t * 3) * 15;
  const wave2 = Math.cos(t * 3.5) * 18;

  // Particle constellation around orb
  const particles = Array.from({ length: 24 }).map((_, idx) => {
    const angle = (idx / 24) * Math.PI * 2 + t * 0.8;
    const r = 110 + Math.sin(t * 3 + idx) * 20;
    const px = 640 + Math.cos(angle) * r;
    const py = 280 + Math.sin(angle) * r;
    return `<circle cx="${px}" cy="${py}" r="${2 + (idx % 3)}" fill="#38bdf8" opacity="0.7"/>`;
  }).join('');

  return `
    <rect width="${width}" height="${height}" fill="#040508"/>

    <!-- Subtle radial backdrop -->
    <circle cx="640" cy="280" r="320" fill="#4f46e5" opacity="0.09"/>
    <circle cx="640" cy="280" r="180" fill="#06b6d4" opacity="0.12"/>

    <!-- Top Agency Label -->
    <g transform="translate(80, 50)">
      <text x="0" y="0" fill="#818cf8" font-size="11" font-family="monospace" font-weight="700" letter-spacing="3">SYNAPSE // AI-NATIVE OPERATING CANVAS</text>
      <text x="0" y="26" fill="#ffffff" font-size="22" font-family="sans-serif" font-weight="900">Multimodal Generative Reasoning Engine</text>
    </g>

    <!-- Floating AI Voice Core (The "Fantasy Voice Orb") -->
    <g transform="translate(640, 280)">
      <!-- Outer energy waves -->
      <circle cx="0" cy="0" r="${95 * orbScale}" fill="none" stroke="#6366f1" stroke-width="1.5" opacity="0.4"/>
      <circle cx="0" cy="0" r="${75 * orbScale}" fill="none" stroke="#38bdf8" stroke-width="2" opacity="0.6"/>
      
      <!-- Core gradient sphere -->
      <circle cx="0" cy="0" r="55" fill="#1e1b4b"/>
      <circle cx="${wave1}" cy="${wave2}" r="38" fill="#06b6d4" opacity="0.8"/>
      <circle cx="${-wave2}" cy="${-wave1}" r="32" fill="#8b5cf6" opacity="0.8"/>
      <circle cx="0" cy="0" r="22" fill="#ffffff" opacity="0.9"/>
    </g>

    ${particles}

    <!-- Dynamic Conversational Prompt Pill -->
    <g transform="translate(240, 430)">
      <rect x="0" y="0" width="800" height="54" rx="27" fill="#0d111d" stroke="#1f273d" stroke-width="1.5"/>
      <circle cx="28" cy="27" r="5" fill="#38bdf8"/>
      <text x="48" y="33" fill="#e2e8f0" font-size="14" font-family="monospace">
        › "Design an autonomous spatial cockpit UI for next-generation EV platforms"
      </text>
      <rect x="710" y="10" width="75" height="34" rx="17" fill="#38bdf8"/>
      <text x="747" y="31" fill="#040711" font-size="11" font-family="sans-serif" font-weight="800" text-anchor="middle">EXECUTE</text>
    </g>

    <!-- Real-time Generated Cards (Showing apps & UI generated on the fly!) -->
    <g transform="translate(180, 510)">
      <!-- Card 1: 3D Spatial Wireframe -->
      <rect x="0" y="0" width="280" height="140" rx="16" fill="#0b0e18" stroke="#1e2538" stroke-width="1.2"/>
      <text x="18" y="28" fill="#38bdf8" font-size="10" font-family="monospace">SPATIAL WIREFRAME V2</text>
      <rect x="18" y="44" width="244" height="60" rx="8" fill="#131929"/>
      <line x1="30" y1="74" x2="250" y2="74" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4"/>
      <circle cx="80" cy="74" r="14" fill="#0284c7"/>
      <text x="18" y="124" fill="#94a3b8" font-size="10" font-family="sans-serif">Synthesized in 14.2ms · 60 FPS Canvas</text>

      <!-- Card 2: Voice Audio Synthesis -->
      <rect x="310" y="0" width="280" height="140" rx="16" fill="#0b0e18" stroke="#1e2538" stroke-width="1.2"/>
      <text x="328" y="28" fill="#a855f7" font-size="10" font-family="monospace">VOICE SPEECH EMBEDDING</text>
      <rect x="328" y="44" width="244" height="60" rx="8" fill="#181329"/>
      <path d="M 340,74 Q 380,45 420,74 T 500,74 T 560,74" fill="none" stroke="#c084fc" stroke-width="2.5"/>
      <text x="328" y="124" fill="#94a3b8" font-size="10" font-family="sans-serif">Natural Neural Prosody · 48kHz</text>

      <!-- Card 3: Neural Edge Telemetry -->
      <rect x="620" y="0" width="280" height="140" rx="16" fill="#0b0e18" stroke="#1e2538" stroke-width="1.2"/>
      <text x="638" y="28" fill="#34d399" font-size="10" font-family="monospace">NPU LATENCY &amp; TOKENS</text>
      <text x="638" y="70" fill="#ffffff" font-size="28" font-family="sans-serif" font-weight="900">128.4 <tspan fill="#34d399" font-size="13">tok/s</tspan></text>
      <text x="638" y="124" fill="#94a3b8" font-size="10" font-family="sans-serif">On-Device Zero-Cloud Privacy</text>
    </g>
  `;
}

// -------------------------------------------------------------
// 3. CONSUMER MOBILE FLAGSHIP (Fantasy.co Spotify / Netflix style)
// -------------------------------------------------------------
function renderMobileFlagshipUI({ width = 1280, height = 720, t = 0 }) {
  const phoneW = 340;
  const phoneH = 620;
  const phoneX = (width - phoneW) / 2;
  const phoneY = 60;

  // Floating background ambient elements
  return `
    <rect width="${width}" height="${height}" fill="#050609"/>

    <circle cx="300" cy="360" r="300" fill="#e11d48" opacity="0.08"/>
    <circle cx="980" cy="360" r="300" fill="#3b82f6" opacity="0.08"/>

    <!-- Left Agency Descriptor -->
    <g transform="translate(80, 160)">
      <text x="0" y="0" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="700" letter-spacing="3">CONSUMER PRODUCT FLAGSHIP</text>
      <text x="0" y="32" fill="#ffffff" font-size="34" font-family="sans-serif" font-weight="900">Spatial Audio &amp;</text>
      <text x="0" y="66" fill="#ffffff" font-size="34" font-family="sans-serif" font-weight="900">Entertainment App</text>
      <text x="0" y="110" fill="#94a3b8" font-size="14" font-family="sans-serif">Designed for 40M+ active global listeners.</text>

      <rect x="0" y="140" width="200" height="42" rx="21" fill="#131726" stroke="#252d47" stroke-width="1"/>
      <circle cx="24" cy="161" r="5" fill="#34d399"/>
      <text x="38" y="166" fill="#ffffff" font-size="11" font-family="monospace">APP STORE NO. 1 AWARD</text>
    </g>

    <!-- Right Feature Matrix -->
    <g transform="translate(${width - 360}, 160)">
      <rect x="0" y="0" width="280" height="110" rx="16" fill="#0d111d" stroke="#1e2436" stroke-width="1"/>
      <text x="20" y="32" fill="#38bdf8" font-size="10" font-family="monospace">INTERACTION DESIGN</text>
      <text x="20" y="58" fill="#ffffff" font-size="16" font-family="sans-serif" font-weight="800">120Hz ProMotion Fluidity</text>
      <text x="20" y="80" fill="#94a3b8" font-size="12" font-family="sans-serif">Micro-gestures &amp; haptic feedback</text>

      <rect x="0" y="130" width="280" height="110" rx="16" fill="#0d111d" stroke="#1e2436" stroke-width="1"/>
      <text x="20" y="162" fill="#a855f7" font-size="10" font-family="monospace">SOUND ARCHITECTURE</text>
      <text x="20" y="188" fill="#ffffff" font-size="16" font-family="sans-serif" font-weight="800">Lossless 24-bit / 192kHz</text>
      <text x="20" y="210" fill="#94a3b8" font-size="12" font-family="sans-serif">Dynamic head-tracking spatial stage</text>
    </g>

    <!-- Center Titanium iPhone 16 Pro Mockup -->
    <g transform="translate(${phoneX}, ${phoneY})">
      <!-- Outer Bezel -->
      <rect x="0" y="0" width="${phoneW}" height="${phoneH}" rx="42" fill="#1e2029" stroke="#373d52" stroke-width="2.5"/>
      <rect x="3" y="3" width="${phoneW - 6}" height="${phoneH - 6}" rx="39" fill="#06070b"/>

      <!-- Inner Screen Area -->
      <g transform="translate(14, 14)">
        <rect x="0" y="0" width="${phoneW - 28}" height="${phoneH - 28}" rx="28" fill="#0a0c13"/>

        <!-- Dynamic Island -->
        <rect x="${(phoneW - 28)/2 - 45}" y="8" width="90" height="22" rx="11" fill="#000000" stroke="#1e293b" stroke-width="1"/>
        <circle cx="${(phoneW - 28)/2 + 28}" cy="19" r="4" fill="#0f172a"/>

        <!-- Album Cover Artwork -->
        <rect x="24" y="55" width="${phoneW - 76}" height="${phoneW - 76}" rx="22" fill="#180b18" stroke="#3b152d" stroke-width="1.5"/>
        <circle cx="${(phoneW - 28)/2}" cy="55 + ${(phoneW - 76)/2}" r="65" fill="#4c0519" opacity="0.8"/>
        <circle cx="${(phoneW - 28)/2}" cy="55 + ${(phoneW - 76)/2}" r="25" fill="#be123c"/>
        <circle cx="${(phoneW - 28)/2}" cy="55 + ${(phoneW - 76)/2}" r="8" fill="#fecdd3"/>

        <!-- Song Metadata -->
        <text x="26" y="325" fill="#ffffff" font-size="19" font-family="sans-serif" font-weight="900">Celestial Horizon</text>
        <text x="26" y="348" fill="#fda4af" font-size="13" font-family="sans-serif">Aura Spatial · Deluxe Edition</text>

        <!-- Scrub Bar -->
        <line x1="26" y1="380" x2="${phoneW - 54}" y2="380" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
        <line x1="26" y1="380" x2="${phoneW * 0.55}" y2="380" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>
        <circle cx="${phoneW * 0.55}" cy="380" r="6" fill="#ffffff"/>

        <!-- Player Controls -->
        <g transform="translate(${(phoneW - 28)/2}, 435)">
          <circle cx="-55" cy="0" r="18" fill="#161b2c"/>
          <path d="M -50,-6 L -60,0 L -50,6" fill="none" stroke="#ffffff" stroke-width="2"/>
          <circle cx="0" cy="0" r="28" fill="#ffffff"/>
          <path d="M -5,-9 L 8,0 L -5,9 Z" fill="#000000"/>
          <circle cx="55" cy="0" r="18" fill="#161b2c"/>
          <path d="M 50,-6 L 60,0 L 50,6" fill="none" stroke="#ffffff" stroke-width="2"/>
        </g>

        <!-- Bottom Tab Pill -->
        <rect x="24" y="500" width="${phoneW - 76}" height="44" rx="22" fill="#111624" stroke="#1f283d" stroke-width="1"/>
        <circle cx="${(phoneW - 28)/2}" cy="522" r="6" fill="#f43f5e"/>
        <circle cx="${(phoneW - 28)/2 - 55}" cy="522" r="5" fill="#64748b"/>
        <circle cx="${(phoneW - 28)/2 + 55}" cy="522" r="5" fill="#64748b"/>
      </g>
    </g>
  `;
}

// -------------------------------------------------------------
// 4. MASTER HERO SHOWREEL VIDEO (Transitions seamlessly across scenes)
// -------------------------------------------------------------
async function buildFantasyHeroShowreel() {
  console.log('Generating Fantasy-Style Master Showreel...');
  const tempDir = path.join(TEMP_BASE, 'fantasy_hero');
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });

  const totalFrames = 240; // 8 seconds @ 30 FPS

  for (let i = 0; i < totalFrames; i++) {
    const t = i / 30;
    const progress = i / totalFrames;

    let frameSvg = '';
    if (progress < 0.35) {
      // Scene 1: Automotive Cockpit OS
      frameSvg = renderAutomotiveUI({ width: 1280, height: 720, t });
    } else if (progress < 0.70) {
      // Scene 2: AI-Native Generative Canvas
      frameSvg = renderAIGenerativeUI({ width: 1280, height: 720, t });
    } else {
      // Scene 3: Luxury Consumer Mobile App
      frameSvg = renderMobileFlagshipUI({ width: 1280, height: 720, t });
    }

    const fullSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
        ${frameSvg}
      </svg>
    `;

    fs.writeFileSync(path.join(tempDir, `frame_${String(i).padStart(4, '0')}.svg`), fullSvg);
  }

  const outFile = path.join(OUTPUT_DIR, 'hero-bg.mp4');
  execSync(
    `ffmpeg -y -r 30 -i "${tempDir}/frame_%04d.svg" -c:v libx264 -pix_fmt yuv420p -preset fast -crf 19 "${outFile}" 2>/dev/null`
  );
  console.log(`Generated ${outFile} (${fs.statSync(outFile).size} bytes)`);

  // Also write hero-onesided-reel.mp4
  const oneSidedFile = path.join(OUTPUT_DIR, 'hero-onesided-reel.mp4');
  fs.copyFileSync(outFile, oneSidedFile);

  fs.rmSync(tempDir, { recursive: true, force: true });
}

// -------------------------------------------------------------
// 5. INDIVIDUAL PROJECT VIDEOS (Automotive, AI, Mobile, Web)
// -------------------------------------------------------------
async function buildIndividualVideos() {
  // 1. Automotive Cockpit
  {
    console.log('Generating Automotive Cockpit Video (veloce-capital / automotive)...');
    const tempDir = path.join(TEMP_BASE, 'auto_cockpit');
    if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
    fs.mkdirSync(tempDir, { recursive: true });

    for (let i = 0; i < 120; i++) {
      const t = i / 30;
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
        ${renderAutomotiveUI({ width: 1280, height: 720, t })}
      </svg>`;
      fs.writeFileSync(path.join(tempDir, `frame_${String(i).padStart(4, '0')}.svg`), svg);
    }
    const outFile = path.join(OUTPUT_DIR, 'veloce-capital.mp4');
    execSync(`ffmpeg -y -r 30 -i "${tempDir}/frame_%04d.svg" -c:v libx264 -pix_fmt yuv420p -preset fast "${outFile}" 2>/dev/null`);
    fs.rmSync(tempDir, { recursive: true, force: true });
  }

  // 2. AI Generative OS (omnihealth-ai & capabilities-bg)
  {
    console.log('Generating AI Generative Canvas Video...');
    const tempDir = path.join(TEMP_BASE, 'ai_canvas');
    if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
    fs.mkdirSync(tempDir, { recursive: true });

    for (let i = 0; i < 120; i++) {
      const t = i / 30;
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
        ${renderAIGenerativeUI({ width: 1280, height: 720, t })}
      </svg>`;
      fs.writeFileSync(path.join(tempDir, `frame_${String(i).padStart(4, '0')}.svg`), svg);
    }
    execSync(`ffmpeg -y -r 30 -i "${tempDir}/frame_%04d.svg" -c:v libx264 -pix_fmt yuv420p -preset fast "${path.join(OUTPUT_DIR, 'omnihealth-ai.mp4')}" 2>/dev/null`);
    execSync(`ffmpeg -y -r 30 -i "${tempDir}/frame_%04d.svg" -c:v libx264 -pix_fmt yuv420p -preset fast "${path.join(OUTPUT_DIR, 'capabilities-bg.mp4')}" 2>/dev/null`);
    fs.rmSync(tempDir, { recursive: true, force: true });
  }

  // 3. Consumer Mobile Flagship (solaris-os & work-bg)
  {
    console.log('Generating Consumer Mobile Flagship Video...');
    const tempDir = path.join(TEMP_BASE, 'mobile_flagship');
    if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
    fs.mkdirSync(tempDir, { recursive: true });

    for (let i = 0; i < 120; i++) {
      const t = i / 30;
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
        ${renderMobileFlagshipUI({ width: 1280, height: 720, t })}
      </svg>`;
      fs.writeFileSync(path.join(tempDir, `frame_${String(i).padStart(4, '0')}.svg`), svg);
    }
    execSync(`ffmpeg -y -r 30 -i "${tempDir}/frame_%04d.svg" -c:v libx264 -pix_fmt yuv420p -preset fast "${path.join(OUTPUT_DIR, 'solaris-os.mp4')}" 2>/dev/null`);
    execSync(`ffmpeg -y -r 30 -i "${tempDir}/frame_%04d.svg" -c:v libx264 -pix_fmt yuv420p -preset fast "${path.join(OUTPUT_DIR, 'work-bg.mp4')}" 2>/dev/null`);
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

async function main() {
  console.log('Starting Fantasy-grade video compilation...');
  await buildFantasyHeroShowreel();
  await buildIndividualVideos();
  console.log('Done compiling all Fantasy product videos!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

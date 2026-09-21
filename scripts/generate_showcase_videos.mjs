import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const OUTPUT_DIR = path.resolve('public/videos');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const TEMP_BASE = '/tmp/puretech_video_build';
if (!fs.existsSync(TEMP_BASE)) {
  fs.mkdirSync(TEMP_BASE, { recursive: true });
}

// Helper: Escape XML
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// -------------------------------------------------------------
// UI COMPONENTS GENERATORS (SVG)
// -------------------------------------------------------------

/**
 * Generates an ultra-sleek iPhone 16 Pro Mockup with realistic screen content
 */
function renderPhoneMockup({ x, y, width, height, rotate = 0, screenType = 'health', t = 0, opacity = 1 }) {
  const cornerRadius = 38;
  const screenPad = 12;
  const screenW = width - screenPad * 2;
  const screenH = height - screenPad * 2;
  const screenR = cornerRadius - 8;

  let screenContent = '';

  if (screenType === 'health') {
    // OmniHealth AI Mobile App UI
    const bpm = Math.round(72 + Math.sin(t * 8) * 4);
    const pulseOffset = (t * 300) % 200;
    
    // ECG Waveform points
    const points = [];
    for (let px = 0; px < screenW - 30; px += 4) {
      const normX = (px + pulseOffset) % 180;
      let py = 0;
      if (normX > 50 && normX < 70) {
        py = -Math.sin((normX - 50) / 20 * Math.PI) * 28;
      } else if (normX >= 70 && normX < 85) {
        py = Math.sin((normX - 70) / 15 * Math.PI) * 12;
      } else {
        py = Math.sin(px * 0.05 + t * 4) * 2;
      }
      points.push(`${px + 15},${py + 80}`);
    }

    screenContent = `
      <!-- App Header -->
      <text x="20" y="44" fill="#38bdf8" font-size="10" font-family="monospace" font-weight="700">OMNIHEALTH AI // CLINICAL OS</text>
      <text x="20" y="62" fill="#ffffff" font-size="15" font-family="sans-serif" font-weight="800">ICU Telemetry · Bed 04</text>

      <!-- ECG Card -->
      <rect x="12" y="74" width="${screenW - 24}" height="100" rx="14" fill="#0c1322" stroke="#1e293b" stroke-width="1.5"/>
      <path d="M ${points.join(' L ')}" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="${points[points.length - 1].split(',')[0]}" cy="${points[points.length - 1].split(',')[1]}" r="4" fill="#38bdf8"/>
      
      <text x="24" y="96" fill="#64748b" font-size="9" font-family="monospace">REAL-TIME ECG (V1)</text>
      <text x="24" y="160" fill="#ffffff" font-size="20" font-family="sans-serif" font-weight="800">${bpm} <tspan fill="#38bdf8" font-size="10">BPM</tspan></text>
      <text x="${screenW - 90}" y="160" fill="#34d399" font-size="11" font-family="monospace">SINUS NORMAL</text>

      <!-- Stats Grid -->
      <rect x="12" y="184" width="${(screenW - 32) / 2}" height="68" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
      <text x="22" y="202" fill="#94a3b8" font-size="9" font-family="monospace">O2 SATURATION</text>
      <text x="22" y="234" fill="#ffffff" font-size="18" font-family="sans-serif" font-weight="800">99.2%</text>

      <rect x="${screenW / 2 + 4}" y="184" width="${(screenW - 32) / 2}" height="68" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
      <text x="${screenW / 2 + 14}" y="202" fill="#94a3b8" font-size="9" font-family="monospace">BLOOD PRESSURE</text>
      <text x="${screenW / 2 + 14}" y="234" fill="#ffffff" font-size="18" font-family="sans-serif" font-weight="800">120/78</text>

      <!-- Predictive AI Alert Card -->
      <rect x="12" y="262" width="${screenW - 24}" height="76" rx="14" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
      <circle cx="28" cy="284" r="5" fill="#818cf8"/>
      <text x="40" y="288" fill="#c7d2fe" font-size="10" font-family="monospace" font-weight="700">PREDICTIVE SEPSIS WINDOW</text>
      <text x="24" y="312" fill="#ffffff" font-size="11" font-family="sans-serif">Risk Score: 0.04% // 4-Hr Stability Confirmed</text>
      <text x="24" y="328" fill="#a5b4fc" font-size="9" font-family="monospace">Transformer model: Q8-Llama-Med-7B</text>

      <!-- Bottom Tab Bar -->
      <rect x="12" y="${screenH - 46}" width="${screenW - 24}" height="36" rx="18" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
      <circle cx="${screenW / 2 - 50}" cy="${screenH - 28}" r="4" fill="#38bdf8"/>
      <circle cx="${screenW / 2}" cy="${screenH - 28}" r="4" fill="#64748b"/>
      <circle cx="${screenW / 2 + 50}" cy="${screenH - 28}" r="4" fill="#64748b"/>
    `;
  } else if (screenType === 'sports') {
    // Kinetix Sports Vision Mobile App
    screenContent = `
      <text x="20" y="44" fill="#a855f7" font-size="10" font-family="monospace" font-weight="700">KINETIX VISION // BIOMECHANICS</text>
      <text x="20" y="62" fill="#ffffff" font-size="15" font-family="sans-serif" font-weight="800">Skeletal Kinematics · 60 FPS</text>

      <!-- Camera Pose Overlay Box -->
      <rect x="12" y="74" width="${screenW - 24}" height="170" rx="14" fill="#13111c" stroke="#2e1065" stroke-width="1.5"/>
      
      <!-- Skeletal Joint Lines -->
      <circle cx="${screenW / 2}" cy="110" r="8" fill="#c084fc"/>
      <line x1="${screenW / 2}" y1="118" x2="${screenW / 2}" y2="165" stroke="#a855f7" stroke-width="3"/>
      <line x1="${screenW / 2}" y1="130" x2="${screenW / 2 - 40}" y2="155" stroke="#38bdf8" stroke-width="2.5"/>
      <line x1="${screenW / 2}" y1="130" x2="${screenW / 2 + 40}" y2="145" stroke="#38bdf8" stroke-width="2.5"/>
      <line x1="${screenW / 2}" y1="165" x2="${screenW / 2 - 30}" y2="215" stroke="#34d399" stroke-width="2.5"/>
      <line x1="${screenW / 2}" y1="165" x2="${screenW / 2 + 30}" y2="220" stroke="#34d399" stroke-width="2.5"/>

      <rect x="22" y="84" width="70" height="20" rx="6" fill="#000000" opacity="0.7"/>
      <text x="28" y="98" fill="#4ade80" font-size="9" font-family="monospace">HIP: 168°</text>

      <rect x="${screenW - 95}" y="84" width="75" height="20" rx="6" fill="#000000" opacity="0.7"/>
      <text x="${screenW - 89}" y="98" fill="#38bdf8" font-size="9" font-family="monospace">KNEE: 94°</text>

      <!-- Biometric Card -->
      <rect x="12" y="254" width="${screenW - 24}" height="85" rx="14" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
      <text x="24" y="274" fill="#c084fc" font-size="10" font-family="monospace">SYMMETRY INDEX: 98.6%</text>
      <text x="24" y="296" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="700">Sprint Drive Phase: Optimal</text>
      <text x="24" y="318" fill="#94a3b8" font-size="9" font-family="monospace">On-Device CoreML Neural Engine</text>
    `;
  } else {
    // Spatial Commerce Mobile App
    screenContent = `
      <text x="20" y="44" fill="#f43f5e" font-size="10" font-family="monospace" font-weight="700">NEXUS ATELIER // 3D SPATIAL</text>
      <text x="20" y="62" fill="#ffffff" font-size="15" font-family="sans-serif" font-weight="800">Chronograph Master 41mm</text>

      <!-- 3D Luxury Product Mockup -->
      <rect x="12" y="74" width="${screenW - 24}" height="175" rx="14" fill="#1c0d14" stroke="#881337" stroke-width="1.5"/>
      <circle cx="${screenW / 2}" cy="155" r="50" fill="#090508" stroke="#f43f5e" stroke-width="3"/>
      <circle cx="${screenW / 2}" cy="155" r="42" fill="#1e1017" stroke="#fda4af" stroke-width="1"/>
      <line x1="${screenW / 2}" y1="155" x2="${screenW / 2 + 20}" y2="140" stroke="#ffffff" stroke-width="2"/>
      <line x1="${screenW / 2}" y1="155" x2="${screenW / 2}" y2="125" stroke="#f43f5e" stroke-width="2.5"/>

      <!-- Floating interaction pill -->
      <rect x="${screenW / 2 - 60}" y="220" width="120" height="20" rx="10" fill="#000000" opacity="0.8"/>
      <text x="${screenW / 2}" y="234" fill="#fda4af" font-size="8" font-family="monospace" text-anchor="middle">ROTATE 360° // AR GAUSSIAN</text>

      <!-- Pricing & Apple Pay -->
      <rect x="12" y="260" width="${screenW - 24}" height="75" rx="14" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
      <text x="24" y="282" fill="#ffffff" font-size="16" font-family="sans-serif" font-weight="800">$14,200 <tspan fill="#64748b" font-size="10">USD</tspan></text>
      <rect x="24" y="296" width="${screenW - 48}" height="28" rx="8" fill="#ffffff"/>
      <text x="${screenW / 2}" y="314" fill="#000000" font-size="11" font-family="sans-serif" font-weight="700" text-anchor="middle">Pay 1-Click Purchase</text>
    `;
  }

  return `
    <g transform="translate(${x}, ${y}) rotate(${rotate}, ${width/2}, ${height/2})" opacity="${opacity}">
      <!-- Outer Titanium Phone Body with Subtle Drop Shadow -->
      <rect x="0" y="0" width="${width}" height="${height}" rx="${cornerRadius}" fill="#1b1d28" stroke="#33384f" stroke-width="2.5"/>
      <rect x="2" y="2" width="${width - 4}" height="${height - 4}" rx="${cornerRadius - 2}" fill="#08090f"/>

      <!-- Antenna Bands & Buttons -->
      <rect x="-3" y="100" width="3" height="36" rx="1.5" fill="#475569"/>
      <rect x="-3" y="145" width="3" height="36" rx="1.5" fill="#475569"/>
      <rect x="${width}" y="115" width="3" height="55" rx="1.5" fill="#475569"/>

      <!-- Inner Display Area -->
      <g transform="translate(${screenPad}, ${screenPad})">
        <clipPath id="screenClip-${x}-${y}">
          <rect x="0" y="0" width="${screenW}" height="${screenH}" rx="${screenR}"/>
        </clipPath>
        <g clip-path="url(#screenClip-${x}-${y})">
          <!-- Screen Wallpaper / Gradient -->
          <rect x="0" y="0" width="${screenW}" height="${screenH}" fill="#05060a"/>
          
          <!-- Screen Content -->
          ${screenContent}

          <!-- Dynamic Island Notch -->
          <rect x="${screenW / 2 - 38}" y="8" width="76" height="18" rx="9" fill="#000000" stroke="#1e293b" stroke-width="1"/>
          <circle cx="${screenW / 2 + 22}" cy="17" r="3.5" fill="#0a0a14"/>

          <!-- iOS Home Indicator -->
          <rect x="${screenW / 2 - 45}" y="${screenH - 6}" width="90" height="3" rx="1.5" fill="#ffffff" opacity="0.6"/>
        </g>
      </g>
    </g>
  `;
}

/**
 * Generates an ultra-sleek macOS / Desktop Web Platform Browser Mockup
 */
function renderWebMockup({ x, y, width, height, rotate = 0, webType = 'terminal', t = 0, opacity = 1 }) {
  const cornerRadius = 18;
  const headerH = 34;

  let webBody = '';

  if (webType === 'terminal') {
    // Veloce Capital Web Trading Terminal
    const candleCount = 18;
    let candleSvg = '';
    for (let c = 0; c < candleCount; c++) {
      const cx = 30 + c * 22;
      const isUp = ((c * 7) + Math.floor(t * 5)) % 3 !== 0;
      const h = 25 + Math.sin(c * 0.8 + t * 2) * 18 + 15;
      const cy = 130 - Math.sin(c * 0.6 + t * 2) * 30;
      const color = isUp ? '#10b981' : '#f43f5e';
      candleSvg += `
        <line x1="${cx}" y1="${cy - h/2 - 8}" x2="${cx}" y2="${cy + h/2 + 8}" stroke="${color}" stroke-width="1.5"/>
        <rect x="${cx - 6}" y="${cy - h/2}" width="12" height="${h}" rx="2" fill="${color}"/>
      `;
    }

    webBody = `
      <!-- Sidebar Navigation -->
      <rect x="0" y="${headerH}" width="54" height="${height - headerH}" fill="#090b12" stroke="#1a1d2d" stroke-width="1"/>
      <circle cx="27" cy="${headerH + 24}" r="12" fill="#1e293b"/>
      <rect x="19" y="${headerH + 54}" width="16" height="16" rx="4" fill="#38bdf8" opacity="0.8"/>
      <rect x="19" y="${headerH + 84}" width="16" height="16" rx="4" fill="#334155"/>
      <rect x="19" y="${headerH + 114}" width="16" height="16" rx="4" fill="#334155"/>

      <!-- Main Chart Area -->
      <g transform="translate(62, ${headerH + 10})">
        <!-- Top Chart Header -->
        <text x="10" y="16" fill="#ffffff" font-size="14" font-family="sans-serif" font-weight="800">BTC / USD <tspan fill="#10b981" font-size="11">+4.82%</tspan></text>
        <text x="10" y="32" fill="#64748b" font-size="9" font-family="monospace">VOL: $2.48B // P99 LATENCY: 14.2ms</text>
        <text x="${width - 190}" y="20" fill="#38bdf8" font-size="18" font-family="monospace" font-weight="700">$64,821.50</text>

        <!-- Chart Grid Lines -->
        <line x1="0" y1="50" x2="${width - 200}" y2="50" stroke="#1e293b" stroke-dasharray="3,3"/>
        <line x1="0" y1="100" x2="${width - 200}" y2="100" stroke="#1e293b" stroke-dasharray="3,3"/>
        <line x1="0" y1="150" x2="${width - 200}" y2="150" stroke="#1e293b" stroke-dasharray="3,3"/>

        <!-- Candlesticks -->
        ${candleSvg}

        <!-- Moving Average Curve -->
        <path d="M 20,140 Q 120,80 240,110 T 420,70" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
      </g>

      <!-- Right Order Book Panel -->
      <g transform="translate(${width - 150}, ${headerH + 10})">
        <rect x="0" y="0" width="140" height="${height - headerH - 20}" rx="10" fill="#090b14" stroke="#1e2436" stroke-width="1"/>
        <text x="12" y="20" fill="#94a3b8" font-size="9" font-family="monospace">DEPTH ORDER BOOK</text>
        
        <!-- Ask Rows (Red) -->
        <text x="12" y="44" fill="#f43f5e" font-size="9" font-family="monospace">64,824.00 · 1.42</text>
        <rect x="95" y="36" width="35" height="10" fill="#f43f5e" opacity="0.2"/>
        
        <text x="12" y="60" fill="#f43f5e" font-size="9" font-family="monospace">64,823.50 · 0.88</text>
        <rect x="105" y="52" width="25" height="10" fill="#f43f5e" opacity="0.2"/>

        <line x1="10" y1="74" x2="130" y2="74" stroke="#334155"/>
        <text x="12" y="92" fill="#ffffff" font-size="11" font-family="monospace" font-weight="700">64,821.50</text>

        <!-- Bid Rows (Green) -->
        <text x="12" y="112" fill="#10b981" font-size="9" font-family="monospace">64,820.00 · 3.12</text>
        <rect x="75" y="104" width="55" height="10" fill="#10b981" opacity="0.2"/>

        <text x="12" y="128" fill="#10b981" font-size="9" font-family="monospace">64,819.50 · 2.05</text>
        <rect x="85" y="120" width="45" height="10" fill="#10b981" opacity="0.2"/>
      </g>
    `;
  } else {
    // Enterprise Fleet & Logistics Cloud Platform
    webBody = `
      <!-- Top Metrics Row -->
      <g transform="translate(20, ${headerH + 16})">
        <rect x="0" y="0" width="${(width - 70) / 3}" height="55" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
        <text x="14" y="20" fill="#94a3b8" font-size="9" font-family="monospace">CONNECTED ASSETS</text>
        <text x="14" y="44" fill="#ffffff" font-size="18" font-family="sans-serif" font-weight="800">14,200 <tspan fill="#38bdf8" font-size="10">UNITS</tspan></text>

        <rect x="${(width - 70) / 3 + 15}" y="0" width="${(width - 70) / 3}" height="55" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
        <text x="${(width - 70) / 3 + 29}" y="20" fill="#94a3b8" font-size="9" font-family="monospace">ON-TIME ROUTE PRECISION</text>
        <text x="${(width - 70) / 3 + 29}" y="44" fill="#34d399" font-size="18" font-family="sans-serif" font-weight="800">98.7%</text>

        <rect x="${((width - 70) / 3) * 2 + 30}" y="0" width="${(width - 70) / 3}" height="55" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
        <text x="${((width - 70) / 3) * 2 + 44}" y="20" fill="#94a3b8" font-size="9" font-family="monospace">FUEL OVERHEAD SAVED</text>
        <text x="${((width - 70) / 3) * 2 + 44}" y="44" fill="#818cf8" font-size="18" font-family="sans-serif" font-weight="800">-23.4%</text>
      </g>

      <!-- Geospatial Map Container -->
      <g transform="translate(20, ${headerH + 85})">
        <rect x="0" y="0" width="${width - 40}" height="${height - headerH - 100}" rx="14" fill="#090d18" stroke="#1e293b" stroke-width="1.5"/>
        
        <!-- Grid map nodes and routes -->
        <circle cx="90" cy="60" r="8" fill="#38bdf8" opacity="0.8"/>
        <circle cx="90" cy="60" r="16" fill="none" stroke="#38bdf8" stroke-width="1.5" opacity="0.4"/>
        <text x="105" y="64" fill="#ffffff" font-size="10" font-family="monospace">NODE ATL-01</text>

        <circle cx="280" cy="40" r="8" fill="#10b981" opacity="0.8"/>
        <text x="295" y="44" fill="#ffffff" font-size="10" font-family="monospace">PORT SAVANNAH</text>

        <circle cx="440" cy="90" r="8" fill="#a855f7" opacity="0.8"/>
        <text x="455" y="94" fill="#ffffff" font-size="10" font-family="monospace">ROTTERDAM HUB</text>

        <!-- Route Lines -->
        <path d="M 90,60 Q 180,20 280,40 T 440,90" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4"/>
        
        <!-- Live telemetry badge -->
        <rect x="15" y="${height - headerH - 145}" width="280" height="32" rx="8" fill="#000000" opacity="0.85"/>
        <circle cx="30" cy="${height - headerH - 129}" r="4" fill="#34d399"/>
        <text x="42" y="${height - headerH - 125}" fill="#e2e8f0" font-size="10" font-family="monospace">ACTIVE DISPATCH: 84 TRUCKS / 12 VESSELS</text>
      </g>
    `;
  }

  return `
    <g transform="translate(${x}, ${y}) rotate(${rotate}, ${width/2}, ${height/2})" opacity="${opacity}">
      <!-- Outer Browser Window -->
      <rect x="0" y="0" width="${width}" height="${height}" rx="${cornerRadius}" fill="#0b0e17" stroke="#252a3d" stroke-width="2"/>
      
      <!-- macOS Window Header Bar -->
      <rect x="0" y="0" width="${width}" height="${headerH}" rx="${cornerRadius}" fill="#131624"/>
      <rect x="0" y="${cornerRadius}" width="${width}" height="${headerH - cornerRadius}" fill="#131624"/>
      <line x1="0" y1="${headerH}" x2="${width}" y2="${headerH}" stroke="#252a3d" stroke-width="1"/>

      <!-- Window Dots (Red, Yellow, Green) -->
      <circle cx="18" cy="${headerH/2}" r="5" fill="#ef4444"/>
      <circle cx="34" cy="${headerH/2}" r="5" fill="#f59e0b"/>
      <circle cx="50" cy="${headerH/2}" r="5" fill="#10b981"/>

      <!-- Address Bar Pill -->
      <rect x="75" y="6" width="${width - 150}" height="22" rx="6" fill="#0a0c14" stroke="#1f2335" stroke-width="1"/>
      <text x="${width / 2}" y="20" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">
        🔒 https://puretech.app/${webType === 'terminal' ? 'veloce-terminal/live' : 'aerologix-os/fleet'}
      </text>

      <!-- Web Body -->
      ${webBody}
    </g>
  `;
}

// -------------------------------------------------------------
// VIDEO 1: HERO SHOWREEL (Fantasy.co Style Multi-Device Showcase)
// -------------------------------------------------------------
async function generateHeroShowreelVideo() {
  console.log('Generating Hero Showreel Video (Web & Apps Showcase)...');
  const tempDir = path.join(TEMP_BASE, 'hero_reel');
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });

  const totalFrames = 240; // 8 seconds @ 30 FPS
  const width = 1280;
  const height = 720;

  for (let i = 0; i < totalFrames; i++) {
    const t = i / 30; // seconds
    const progress = i / totalFrames; // 0 to 1

    // Phase orchestration:
    // 0s-2.5s: Multi-device overview (Macbook Web + iPhone Mobile)
    // 2.5s-5.0s: Zoom into iPhone Mobile App (OmniHealth AI)
    // 5.0s-7.5s: Pan across Web Platform (Veloce Trading Terminal)
    // 7.5s-8.0s: Smooth transition loop

    let contentSvg = '';

    if (progress < 0.35) {
      // PHASE 1: Multi-Device Ecosystem Overview (Fantasy signature composition!)
      const zoom = 1 + progress * 0.15;
      const webX = 80 - progress * 40;
      const phoneX = 860 - progress * 50;

      contentSvg = `
        <!-- Floating Agency Watermark / Title -->
        <g transform="translate(100, 75)" opacity="${Math.min(1, progress * 4)}">
          <text x="0" y="0" fill="#38bdf8" font-size="13" font-family="monospace" font-weight="700" letter-spacing="3">PURETECH INNOVATIONS // SHOWREEL 2025</text>
          <text x="0" y="32" fill="#ffffff" font-size="34" font-family="sans-serif" font-weight="900" letter-spacing="-1">Next-Gen Web &amp; Mobile Ecosystems</text>
        </g>

        <!-- Desktop Web Mockup -->
        ${renderWebMockup({
          x: webX,
          y: 150,
          width: 740,
          height: 480,
          rotate: -2,
          webType: 'terminal',
          t,
          opacity: 0.95
        })}

        <!-- Floating Mobile Phone Mockup -->
        ${renderPhoneMockup({
          x: phoneX,
          y: 190,
          width: 280,
          height: 540,
          rotate: 4,
          screenType: 'health',
          t,
          opacity: 1
        })}

        <!-- Floating UI Tag Badge -->
        <g transform="translate(800, 160)">
          <rect x="0" y="0" width="180" height="34" rx="17" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" opacity="0.95"/>
          <circle cx="18" cy="17" r="4" fill="#38bdf8"/>
          <text x="32" y="21" fill="#ffffff" font-size="10" font-family="monospace" font-weight="700">MOBILE AI AGENT</text>
        </g>
      `;
    } else if (progress < 0.70) {
      // PHASE 2: Deep Dive on Mobile Health & Sports Apps
      const subProg = (progress - 0.35) / 0.35;
      const phone1X = 220 + Math.sin(subProg * Math.PI) * 20;
      const phone2X = 680 - Math.sin(subProg * Math.PI) * 20;

      contentSvg = `
        <!-- Section Header -->
        <g transform="translate(100, 65)">
          <text x="0" y="0" fill="#a855f7" font-size="12" font-family="monospace" font-weight="700" letter-spacing="3">01 // NATIVE MOBILE APPLICATIONS</text>
          <text x="0" y="28" fill="#ffffff" font-size="30" font-family="sans-serif" font-weight="900">Autonomous Clinical &amp; Biomechanical Apps</text>
        </g>

        <!-- Phone 1: OmniHealth AI (Left) -->
        ${renderPhoneMockup({
          x: phone1X,
          y: 130,
          width: 320,
          height: 600,
          rotate: -3,
          screenType: 'health',
          t,
          opacity: 1
        })}

        <!-- Phone 2: Kinetix Biomechanics (Right) -->
        ${renderPhoneMockup({
          x: phone2X,
          y: 130,
          width: 320,
          height: 600,
          rotate: 3,
          screenType: 'sports',
          t,
          opacity: 1
        })}

        <!-- Floating Highlights -->
        <g transform="translate(560, 400)">
          <rect x="0" y="0" width="160" height="55" rx="12" fill="#050811" stroke="#a855f7" stroke-width="1.5" opacity="0.95"/>
          <text x="14" y="24" fill="#c084fc" font-size="9" font-family="monospace">APP STORE RATING</text>
          <text x="14" y="44" fill="#ffffff" font-size="16" font-family="sans-serif" font-weight="800">4.9 ★★★★★</text>
        </g>
      `;
    } else {
      // PHASE 3: High-Frequency Web Platforms & Cloud OS
      const subProg = (progress - 0.70) / 0.30;
      const webX = 140 - subProg * 30;

      contentSvg = `
        <!-- Section Header -->
        <g transform="translate(100, 65)">
          <text x="0" y="0" fill="#10b981" font-size="12" font-family="monospace" font-weight="700" letter-spacing="3">02 // WEB PLATFORMS &amp; CLOUD INFRASTRUCTURE</text>
          <text x="0" y="28" fill="#ffffff" font-size="30" font-family="sans-serif" font-weight="900">Veloce Capital &amp; AeroLogix Intermodal OS</text>
        </g>

        <!-- Large Web Platform Mockup -->
        ${renderWebMockup({
          x: webX,
          y: 130,
          width: 980,
          height: 540,
          rotate: 0,
          webType: subProg > 0.5 ? 'fleet' : 'terminal',
          t,
          opacity: 1
        })}

        <!-- Telemetry HUD pill -->
        <g transform="translate(900, 630)">
          <rect x="0" y="0" width="220" height="34" rx="17" fill="#000000" stroke="#10b981" stroke-width="1.5" opacity="0.9"/>
          <circle cx="18" cy="17" r="4" fill="#10b981"/>
          <text x="32" y="21" fill="#ffffff" font-size="10" font-family="monospace">99.999% SLA // RUST WASM</text>
        </g>
      `;
    }

    // Compose Full Frame
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <defs>
          <radialGradient id="bgGrad" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stop-color="#121829"/>
            <stop offset="60%" stop-color="#07080e"/>
            <stop offset="100%" stop-color="#040508"/>
          </radialGradient>
        </defs>

        <!-- Background Studio Lighting -->
        <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>

        <!-- Perspective Floor Grid (Cybernetic studio floor) -->
        <g stroke="#1a233a" stroke-width="1" opacity="0.25">
          ${Array.from({ length: 15 }).map((_, idx) => `
            <line x1="${idx * 90}" y1="0" x2="${idx * 90}" y2="${height}"/>
            <line x1="0" y1="${idx * 50}" x2="${width}" y2="${idx * 50}"/>
          `).join('')}
        </g>

        <!-- Ambient Glow Circles -->
        <circle cx="200" cy="150" r="280" fill="#38bdf8" opacity="0.08" filter="blur(60px)"/>
        <circle cx="1050" cy="500" r="320" fill="#818cf8" opacity="0.08" filter="blur(70px)"/>

        <!-- Main Dynamic Web & App Showcase Content -->
        ${contentSvg}
      </svg>
    `;

    const frameFile = path.join(tempDir, `frame_${String(i).padStart(4, '0')}.svg`);
    fs.writeFileSync(frameFile, svg);
  }

  // Render MP4 with FFmpeg
  const outFile = path.join(OUTPUT_DIR, 'hero-bg.mp4');
  console.log(`Encoding ${outFile}...`);
  execSync(
    `ffmpeg -y -r 30 -i "${tempDir}/frame_%04d.svg" -c:v libx264 -pix_fmt yuv420p -preset fast -crf 20 "${outFile}" 2>/dev/null`
  );
  console.log(`Finished ${outFile} (${fs.statSync(outFile).size} bytes)`);

  // Cleanup temp frames
  fs.rmSync(tempDir, { recursive: true, force: true });
}

// -------------------------------------------------------------
// VIDEO 2: WORK SHOWCASE VIDEO (Mobile Apps & Web Products)
// -------------------------------------------------------------
async function generateWorkShowcaseVideo() {
  console.log('Generating Work Showcase Video...');
  const tempDir = path.join(TEMP_BASE, 'work_reel');
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });

  const totalFrames = 180; // 6s @ 30fps
  const width = 1280;
  const height = 720;

  for (let i = 0; i < totalFrames; i++) {
    const t = i / 30;
    const progress = i / totalFrames;

    // Smooth panning across 3 digital products:
    // Left: Mobile Health App, Center: Web Trading Terminal, Right: Spatial Commerce Mobile App
    const panX = -progress * 320;

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <rect width="${width}" height="${height}" fill="#06070c"/>
        
        <g stroke="#1a2035" stroke-width="1" opacity="0.3">
          ${Array.from({ length: 12 }).map((_, idx) => `
            <line x1="${idx * 110}" y1="0" x2="${idx * 110}" y2="${height}"/>
          `).join('')}
        </g>

        <circle cx="640" cy="360" r="350" fill="#3b82f6" opacity="0.07"/>

        <!-- Header -->
        <g transform="translate(100, 65)">
          <text x="0" y="0" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="700">SELECTED CASE STUDIES // PURETECH PORTFOLIO</text>
          <text x="0" y="28" fill="#ffffff" font-size="28" font-family="sans-serif" font-weight="900">Web Platforms &amp; Mobile Applications</text>
        </g>

        <!-- Moving Strip of Web & Mobile Mockups -->
        <g transform="translate(${panX}, 0)">
          <!-- Item 1: OmniHealth Mobile App -->
          ${renderPhoneMockup({
            x: 80,
            y: 130,
            width: 290,
            height: 550,
            rotate: -2,
            screenType: 'health',
            t,
            opacity: 1
          })}

          <!-- Item 2: Veloce Web Platform -->
          ${renderWebMockup({
            x: 420,
            y: 150,
            width: 720,
            height: 480,
            rotate: 0,
            webType: 'terminal',
            t,
            opacity: 1
          })}

          <!-- Item 3: Nexus Spatial Commerce App -->
          ${renderPhoneMockup({
            x: 1190,
            y: 130,
            width: 290,
            height: 550,
            rotate: 2,
            screenType: 'commerce',
            t,
            opacity: 1
          })}
        </g>
      </svg>
    `;

    const frameFile = path.join(tempDir, `frame_${String(i).padStart(4, '0')}.svg`);
    fs.writeFileSync(frameFile, svg);
  }

  const outFile = path.join(OUTPUT_DIR, 'work-bg.mp4');
  console.log(`Encoding ${outFile}...`);
  execSync(
    `ffmpeg -y -r 30 -i "${tempDir}/frame_%04d.svg" -c:v libx264 -pix_fmt yuv420p -preset fast -crf 20 "${outFile}" 2>/dev/null`
  );
  console.log(`Finished ${outFile} (${fs.statSync(outFile).size} bytes)`);
  fs.rmSync(tempDir, { recursive: true, force: true });
}

// -------------------------------------------------------------
// VIDEO 3: SPECIFIC PROJECT MOTION VIDEOS
// -------------------------------------------------------------
async function generateSingleProjectVideo(filename, title, type, isMobile = false) {
  console.log(`Generating project video ${filename}...`);
  const tempDir = path.join(TEMP_BASE, `proj_${filename}`);
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });

  const totalFrames = 120; // 4s @ 30fps
  const width = 1280;
  const height = 720;

  for (let i = 0; i < totalFrames; i++) {
    const t = i / 30;
    const hoverY = Math.sin(t * 3) * 12;

    let deviceMockup = '';
    if (isMobile) {
      deviceMockup = renderPhoneMockup({
        x: 480,
        y: 110 + hoverY,
        width: 320,
        height: 580,
        rotate: 0,
        screenType: type,
        t,
        opacity: 1
      });
    } else {
      deviceMockup = renderWebMockup({
        x: 200,
        y: 120 + hoverY,
        width: 880,
        height: 520,
        rotate: 0,
        webType: type,
        t,
        opacity: 1
      });
    }

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <rect width="${width}" height="${height}" fill="#08090f"/>
        <circle cx="640" cy="360" r="300" fill="#38bdf8" opacity="0.06"/>

        <g transform="translate(100, 60)">
          <text x="0" y="0" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="700">PURETECH PRODUCTION REEL</text>
          <text x="0" y="26" fill="#ffffff" font-size="26" font-family="sans-serif" font-weight="800">${esc(title)}</text>
        </g>

        ${deviceMockup}
      </svg>
    `;

    fs.writeFileSync(path.join(tempDir, `frame_${String(i).padStart(4, '0')}.svg`), svg);
  }

  const outFile = path.join(OUTPUT_DIR, filename);
  execSync(
    `ffmpeg -y -r 30 -i "${tempDir}/frame_%04d.svg" -c:v libx264 -pix_fmt yuv420p -preset fast -crf 20 "${outFile}" 2>/dev/null`
  );
  console.log(`Finished ${outFile} (${fs.statSync(outFile).size} bytes)`);
  fs.rmSync(tempDir, { recursive: true, force: true });
}

// -------------------------------------------------------------
// MAIN BUILD RUNNER
// -------------------------------------------------------------
async function run() {
  console.log('--- STARTING FANTASY-GRADE VIDEO RENDERING ---');
  
  // 1. Hero Reel (Main Background Video)
  await generateHeroShowreelVideo();

  // 2. Work Reel (Portfolio background)
  await generateWorkShowcaseVideo();

  // 3. Project specific videos
  await generateSingleProjectVideo('omnihealth-ai.mp4', 'OmniHealth AI · Clinical Mobile Suite', 'health', true);
  await generateSingleProjectVideo('veloce-capital.mp4', 'Veloce Capital · High-Frequency Web Terminal', 'terminal', false);
  await generateSingleProjectVideo('aerologix-global.mp4', 'AeroLogix International · Cloud Fleet OS', 'fleet', false);
  await generateSingleProjectVideo('solaris-os.mp4', 'Kinetix Vision · Athlete Biomechanics App', 'sports', true);
  await generateSingleProjectVideo('sentinel-qa.mp4', 'Sentinel QA · Automated Testing System', 'terminal', false);
  await generateSingleProjectVideo('contact-bg.mp4', 'PureTech Innovations · Digital Product Studio', 'fleet', false);
  await generateSingleProjectVideo('capabilities-bg.mp4', 'Architecture & Disciplines Studio', 'terminal', false);
  await generateSingleProjectVideo('what-if-bg.mp4', 'Next-Gen Spatial & AI Prototypes', 'commerce', true);

  console.log('--- ALL SHOWREEL VIDEOS RENDERED SUCCESSFULLY ---');
}

run().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});

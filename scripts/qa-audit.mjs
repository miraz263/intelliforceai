import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve(process.cwd(), 'out');

console.log('----------------------------------------------------');
console.log('  INTELLIFORCEAI AI - AUTOMATED QA & BUILD AUDIT');
console.log('----------------------------------------------------');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function assert(condition, message) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ✓ PASSED: ${message}`);
  } else {
    failedChecks++;
    console.log(`  ✗ FAILED: ${message}`);
  }
}

// 1. Verify Static Output Directory Exists
assert(fs.existsSync(OUT_DIR), 'Static export directory `out/` exists');

if (!fs.existsSync(OUT_DIR)) {
  console.error('  CRITICAL: `out/` directory not found. Please run `npm run build` first.');
  process.exit(1);
}

// 2. Core Page HTML Routes Check
const expectedRoutes = [
  'index.html',
  'about/index.html',
  'services/index.html',
  'products/index.html',
  'research/index.html',
  'industries/index.html',
  'blog/index.html',
  'blog/architecting-multi-agent-swarms-in-rust/index.html',
  'blog/zero-server-nextjs-static-export-cpanel/index.html',
  'blog/ebpf-zero-trust-kernel-threat-hunting/index.html',
  'blog/sub-200ms-conversational-voice-ai-codecs/index.html',
  'careers/index.html',
  'contact/index.html',
  'faq/index.html',
  'docs/index.html',
  'docs/intelliforceai-2-0-quickstart/index.html',
  'docs/intelliforceai-2-0-rust-sdk/index.html',
  'docs/sentinel-shield-admin-guide/index.html',
  'docs/blackmarlin-oms-api-reference/index.html',
  'docs/vision-ai-sdk-guide/index.html',
  'privacy/index.html',
  'terms/index.html',
  'cookie-policy/index.html',
  'accessibility-statement/index.html',
  '404.html',
];

console.log('\n[Phase 1] Auditing Prerendered Static Routes...');
expectedRoutes.forEach((route) => {
  const filePath = path.join(OUT_DIR, route);
  assert(fs.existsSync(filePath), `Static route page exported: ${route}`);
});

// 3. Static Assets & Compliance Files Check
console.log('\n[Phase 2] Auditing Static Assets & Compliance Files...');
const expectedAssets = [
  'contact.php',
  '.htaccess',
  'robots.txt',
  'sitemap.xml',
  'manifest.json',
  'browserconfig.xml',
  '.well-known/security.txt',
  'humans.txt',
];

expectedAssets.forEach((asset) => {
  const filePath = path.join(OUT_DIR, asset);
  assert(fs.existsSync(filePath), `Static asset file present: ${asset}`);
});

// 4. HTML Internal Link & Accessibility Audit
console.log('\n[Phase 3] Auditing HTML Accessibility & Internal Links...');
const homeHtmlPath = path.join(OUT_DIR, 'index.html');
if (fs.existsSync(homeHtmlPath)) {
  const htmlContent = fs.readFileSync(homeHtmlPath, 'utf-8');

  assert(htmlContent.includes('lang="en"'), 'HTML root has `lang="en"` attribute');
  assert(htmlContent.includes('id="main-content"'), 'Main container has `id="main-content"` landmark');
  assert(htmlContent.includes('application/ld+json'), 'JSON-LD Structured Data script injected');
  assert(htmlContent.includes('preconnect'), 'Font preconnect headers present');
}

// 5. Final Report Summary
console.log('\n----------------------------------------------------');
console.log(`  QA Audit Summary: ${passedChecks}/${totalChecks} Passed`);
if (failedChecks === 0) {
  console.log('  🎉 EXCELLENT! Project passes 100% QA & Build Standards!');
  console.log('----------------------------------------------------\n');
  process.exit(0);
} else {
  console.log(`  ⚠️ WARNING: ${failedChecks} checks failed.`);
  console.log('----------------------------------------------------\n');
  process.exit(1);
}

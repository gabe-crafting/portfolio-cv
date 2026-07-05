import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const inputPath = join(root, 'index.html');
const outputPath = join(root, 'Apostol-Gabriel-CV.pdf');

async function generate() {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();

    // Load the CV from disk so styles.css and fonts resolve.
    await page.goto(pathToFileURL(inputPath).href, { waitUntil: 'networkidle0' });

    // Render using the CV's @media print rules.
    await page.emulateMediaType('print');

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '14mm',
        bottom: '14mm',
        left: '14mm',
        right: '14mm',
      },
    });

    console.log(`PDF written to ${outputPath}`);
  } finally {
    await browser.close();
  }
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});

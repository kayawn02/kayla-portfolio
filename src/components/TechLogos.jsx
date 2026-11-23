import React from 'react';

// Official Figma 5-color Logo
export function FigmaLogo({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  );
}

// User provided exact official Flutter Origami Logo
export function FlutterLogo({ className = "w-10 h-10" }) {
  return (
    <img
      src="/images/tech/flutter.png"
      alt="Flutter"
      className={`${className} object-contain filter drop-shadow-sm select-none`}
      loading="lazy"
    />
  );
}

// Official Dart Logo
export function DartLogo({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.6 22.8L22.8 4.6C24.4 3 26.6 2 29 2H78.8L2 78.8V29C2 26.6 3 24.4 4.6 22.8Z" fill="#00B4AB"/>
      <path d="M105.2 4.6L123.4 22.8C125 24.4 126 26.6 126 29V78.8L78.8 2H29L105.2 4.6Z" fill="#0081C6"/>
      <path d="M123.4 105.2L105.2 123.4C103.6 125 101.4 126 99 126H49.2L126 49.2V99C126 101.4 125 103.6 123.4 105.2Z" fill="#00599C"/>
      <path d="M22.8 123.4L4.6 105.2C3 103.6 2 101.4 2 99V49.2L49.2 126H99L22.8 123.4Z" fill="#0081C6"/>
      <path d="M37.8 37.8L90.2 90.2L73.2 107.2C71.6 108.8 69.4 109.8 67 109.8H45L37.8 102.6V37.8Z" fill="#00B4AB"/>
      <path d="M90.2 37.8L37.8 90.2L54.8 107.2C56.4 108.8 58.6 109.8 61 109.8H83L90.2 102.6V37.8Z" fill="#00599C"/>
    </svg>
  );
}

// ESP32 Chip & IoT Microcontroller Logo
export function Esp32Logo({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="18" width="64" height="64" rx="8" fill="#180c12" stroke="#dc2626" strokeWidth="4"/>
      <rect x="26" y="26" width="48" height="48" rx="4" fill="#090407" stroke="#ef4444" strokeWidth="1.5"/>
      {/* Chip pins */}
      <line x1="10" y1="32" x2="18" y2="32" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
      <line x1="10" y1="44" x2="18" y2="44" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
      <line x1="10" y1="56" x2="18" y2="56" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
      <line x1="10" y1="68" x2="18" y2="68" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>

      <line x1="82" y1="32" x2="90" y2="32" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
      <line x1="82" y1="44" x2="90" y2="44" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
      <line x1="82" y1="56" x2="90" y2="56" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
      <line x1="82" y1="68" x2="90" y2="68" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>

      <line x1="32" y1="10" x2="32" y2="18" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
      <line x1="50" y1="10" x2="50" y2="18" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
      <line x1="68" y1="10" x2="68" y2="18" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>

      <line x1="32" y1="82" x2="32" y2="90" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
      <line x1="50" y1="82" x2="50" y2="90" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
      <line x1="68" y1="82" x2="68" y2="90" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>

      <text x="50" y="48" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="900" textAnchor="middle">ESP32</text>
      <text x="50" y="62" fill="#ef4444" fontFamily="monospace" fontSize="8" fontWeight="700" textAnchor="middle">WROOM</text>
    </svg>
  );
}

// Official Arduino Teal Infinity Logo
export function ArduinoLogo({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 6C16.7 6 6 16.7 6 30C6 43.3 16.7 54 30 54C40 54 48.6 47.9 50 42C51.4 47.9 60 54 70 54C83.3 54 94 43.3 94 30C94 16.7 83.3 6 70 6C60 6 51.4 12.1 50 18C48.6 12.1 40 6 30 6ZM30 14C38.8 14 46 21.2 46 30C46 38.8 38.8 46 30 46C21.2 46 14 38.8 14 30C14 21.2 21.2 14 30 14ZM70 14C78.8 14 86 21.2 86 30C86 38.8 78.8 46 70 46C61.2 46 54 38.8 54 30C54 21.2 61.2 14 70 14Z" fill="#00979D"/>
      {/* Minus sign */}
      <rect x="24" y="28" width="12" height="4" fill="#ffffff"/>
      {/* Plus sign */}
      <rect x="64" y="28" width="12" height="4" fill="#ffffff"/>
      <rect x="68" y="24" width="4" height="12" fill="#ffffff"/>
    </svg>
  );
}

// Official HTML5 Orange Shield Logo
export function Html5Logo({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M71.4 460.6L31.6 13.7H480.4L440.6 460.6L256 512L71.4 460.6Z" fill="#E44D26"/>
      <path d="M256 472.4L404.9 431.1L438.1 58.7H256V472.4Z" fill="#F16529"/>
      <path d="M256 176.3H181.8L176.6 117.8H256V58.7H112.5L128.2 234.8H256V176.3ZM256 352.9L255.8 353L191.9 335.7L187.8 290.1H128.8L136.9 381.1L255.8 414.1L256 414V352.9Z" fill="#EBEBEB"/>
      <path d="M255.8 176.3V234.8H325.2L318.7 308.2L255.8 325.2V386.4L374.8 353.4L376.1 339.5L389.9 184.8L391.2 176.3H255.8ZM255.8 58.7V117.8H395.2L399.2 73.3L400.5 58.7H255.8Z" fill="#FFFFFF"/>
    </svg>
  );
}

// User provided exact official CSS3 Shield Logo
export function Css3Logo({ className = "w-10 h-10" }) {
  return (
    <img
      src="/images/tech/css3.png"
      alt="CSS3"
      className={`${className} object-contain filter drop-shadow-sm select-none`}
      loading="lazy"
    />
  );
}

// User provided exact official WordPress Circle Logo
export function WordPressLogo({ className = "w-10 h-10" }) {
  return (
    <img
      src="/images/tech/wordpress.png"
      alt="WordPress"
      className={`${className} object-contain filter drop-shadow-sm select-none`}
      loading="lazy"
    />
  );
}

// Official Git Orange Diamond Logo
export function GitLogo({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M96.7 44.5L55.5 3.3C53.3 1.1 49.7 1.1 47.5 3.3L37.9 12.9L48.8 23.8C51.1 23 53.8 23.6 55.6 25.4C57.5 27.2 58 29.9 57.3 32.2L68 42.9C70.3 42.1 73 42.7 74.8 44.5C77.4 47.1 77.4 51.3 74.8 53.9C72.2 56.5 68 56.5 65.4 53.9C64 52.5 63.3 50.6 63.5 48.7L53.7 38.9V62.8C54.4 63.3 55.1 64 55.6 64.6C58.2 67.2 58.2 71.4 55.6 74C53 76.6 48.8 76.6 46.2 74C43.6 71.4 43.6 67.2 46.2 64.6C47 63.8 47.9 63.2 48.9 62.7V38.5C47.9 38 47 37.4 46.2 36.6C44.4 34.8 43.9 32.1 44.6 29.8L33.7 18.9L3.3 49.3C1.1 51.5 1.1 55.1 3.3 57.3L44.5 98.5C46.7 100.7 50.3 100.7 52.5 98.5L96.7 54.3C98.9 52.1 98.9 46.7 96.7 44.5Z" fill="#F05032"/>
    </svg>
  );
}

// Official GitHub Logo
export function GitHubLogo({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 98 96" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.215-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
    </svg>
  );
}

// User provided exact official Canva Gradient Circle Logo
export function CanvaLogo({ className = "w-10 h-10" }) {
  return (
    <img
      src="/images/tech/canva.png"
      alt="Canva"
      className={`${className} object-contain filter drop-shadow-sm select-none`}
      loading="lazy"
    />
  );
}

// User provided exact official Visual Studio Code Blue Origami Logo
export function VSCodeLogo({ className = "w-10 h-10" }) {
  return (
    <img
      src="/images/tech/vscode.png"
      alt="VS Code"
      className={`${className} object-contain filter drop-shadow-sm select-none`}
      loading="lazy"
    />
  );
}

// Official Firebase Flame Logo
export function FirebaseLogo({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.8 78.4L44.2 32.7C44.7 31.7 46.2 31.7 46.8 32.7L54.7 47.9L19.8 78.4Z" fill="#FFA000"/>
      <path d="M19.8 78.4L37.1 23.2C37.6 21.7 39.7 21.6 40.4 23.0L49.1 39.8L19.8 78.4Z" fill="#F57C00"/>
      <path d="M50 89.2C50 89.2 78.8 73 80.1 71.8L72.6 25.4C72.4 23.9 70.3 23.4 69.4 24.6L19.8 78.4L42.2 87.8C47.1 89.9 49.3 89.5 50 89.2Z" fill="#FFCA28"/>
      <path d="M80.1 71.8L72.6 25.4C72.4 23.9 70.3 23.4 69.4 24.6L19.8 78.4L42.2 87.8C47.1 89.9 49.3 89.5 50 89.2L80.1 71.8Z" fill="#FFA000" fillOpacity="0.3"/>
    </svg>
  );
}

// Official Tailwind CSS Logo
export function TailwindLogo({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 35C43.5 35 39.2 38.3 37.1 44.8C40.4 41.5 44 40.7 48 42.4C50.6 43.5 52.4 45.4 54.4 47.5C57.7 50.8 61.5 54.8 70 54.8C76.5 54.8 80.8 51.5 82.9 45C79.6 48.3 76 49.1 72 47.4C69.4 46.3 67.6 44.4 65.6 42.3C62.3 39 58.5 35 50 35ZM30 55C23.5 55 19.2 58.3 17.1 64.8C20.4 61.5 24 60.7 28 62.4C30.6 63.5 32.4 65.4 34.4 67.5C37.7 70.8 41.5 74.8 50 74.8C56.5 74.8 60.8 71.5 62.9 65C59.6 68.3 56 69.1 52 67.4C49.4 66.3 47.6 64.4 45.6 62.3C42.3 59 38.5 55 30 55Z" fill="#38BDF8"/>
    </svg>
  );
}

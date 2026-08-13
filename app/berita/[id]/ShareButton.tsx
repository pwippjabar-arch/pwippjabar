'use client';

import { useState } from 'react';

interface ShareButtonProps {
  shareUrl: string;
  title?: string;
}

export default function ShareButton({ shareUrl, title = 'Berita PW IPP Jawa Barat' }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(`${title} - Read more: ${shareUrl}`);

  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(shareUrl).then(() => showSuccess());
    } else {
      const tempInput = document.createElement('input');
      tempInput.value = shareUrl;
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        document.execCommand('copy');
        showSuccess();
      } catch {
        alert('Link Berita: ' + shareUrl);
      }
      document.body.removeChild(tempInput);
    }
  };

  const showSuccess = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 mr-1">Bagikan:</span>

      {/* WhatsApp Share */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Bagikan ke WhatsApp"
        className="p-2 rounded-lg bg-green-50 hover:bg-green-100 dark:bg-green-900/30 dark:hover:bg-green-900/50 text-green-600 dark:text-green-400 transition"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754zm6.097-4.757l.36.213c1.55.92 3.328 1.406 5.148 1.407 5.342 0 9.689-4.347 9.692-9.691.002-2.589-1.004-5.023-2.834-6.853-1.83-1.83-4.264-2.837-6.856-2.838-5.344 0-9.69 4.347-9.692 9.692-.001 1.884.536 3.722 1.554 5.318l.235.367-1.026 3.748 3.819-1.001z" />
        </svg>
      </a>

      {/* Facebook Share */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Bagikan ke Facebook"
        className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 transition"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
        </svg>
      </a>

      {/* X / Twitter Share */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Bagikan ke X (Twitter)"
        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* Copy Link Button */}
      <button
        type="button"
        onClick={handleCopy}
        className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 cursor-pointer ${
          copied
            ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300 font-bold'
            : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
        }`}
      >
        <svg className="w-3.5 h-3.5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        <span>{copied ? '✓ Disalin!' : 'Salin Link'}</span>
      </button>
    </div>
  );
}

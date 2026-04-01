export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <span className="font-semibold text-gray-900">SolanaAds</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Docs
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Discord
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} SolanaAds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <span className="text-xl font-extrabold tracking-tight block">PW IPP JAWA BARAT</span>
            <span className="text-xs text-gray-400">&copy; {new Date().getFullYear()} PW IPP Jawa Barat. All rights reserved.</span>
          </div>
          <div className="text-xs text-gray-400 text-center md:text-right">
            Kritis, Ilmiah, Responsif
          </div>
        </div>
      </div>
    </footer>
  );
}

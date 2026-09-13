function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 text-xs font-bold text-white">
                DS
              </span>
              <span className="text-lg font-bold text-slate-900">
                Dev <span className="text-pink-500">Stack</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm font-medium text-slate-700">
              <a href="#" className="hover:text-slate-900">GitHub</a>
              <a href="#" className="hover:text-slate-900">Twitter</a>
              <a href="#" className="hover:text-slate-900">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide text-slate-900">PRODUCT</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900">Home</a></li>
              <li><a href="#" className="hover:text-slate-900">Technologies</a></li>
              <li><a href="#" className="hover:text-slate-900">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide text-slate-900">COMPANY</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide text-slate-900">LEGAL</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-400">© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="#" className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
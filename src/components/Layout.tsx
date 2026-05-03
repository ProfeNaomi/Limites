import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { FunctionSquare, BookOpen, Calculator, Menu, X, Lightbulb, LineChart } from "lucide-react";
import "katex/dist/katex.min.css"; // Global Katex styles

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center gap-2 text-indigo-600 font-bold text-xl tracking-tight">
                <FunctionSquare className="h-6 w-6" />
                <span>Límites: Qué pasaría si</span>
              </div>
              <nav className="hidden sm:ml-8 sm:flex sm:space-x-8">
                <Link
                  to="/"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${location.pathname === '/' ? 'border-indigo-500 text-slate-900' : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'}`}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Teorema
                </Link>
                <Link
                  to="/visualize"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${location.pathname === '/visualize' ? 'border-indigo-500 text-slate-900' : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'}`}
                >
                  <FunctionSquare className="w-4 h-4 mr-2" />
                  Épsilon-Delta
                </Link>
                <Link
                  to="/exercises"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${location.pathname === '/exercises' ? 'border-indigo-500 text-slate-900' : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'}`}
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Cálculo Paso a Paso
                </Link>
                <Link
                  to="/strategies"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${location.pathname === '/strategies' ? 'border-indigo-500 text-slate-900' : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'}`}
                >
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Estrategias
                </Link>
                <Link
                  to="/applications"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${location.pathname === '/applications' ? 'border-indigo-500 text-slate-900' : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'}`}
                >
                  <LineChart className="w-4 h-4 mr-2" />
                  Aplicaciones
                </Link>
              </nav>
            </div>
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'} border-t border-slate-200 bg-white`}>
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={closeMenu}
              className={`flex items-center pl-3 pr-4 py-2 border-l-4 text-base font-medium ${location.pathname === '/' ? 'border-indigo-500 text-indigo-700 bg-indigo-50' : 'border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700'}`}
            >
              <BookOpen className="w-5 h-5 mr-3" />
              Teorema
            </Link>
            <Link
              to="/visualize"
              onClick={closeMenu}
              className={`flex items-center pl-3 pr-4 py-2 border-l-4 text-base font-medium ${location.pathname === '/visualize' ? 'border-indigo-500 text-indigo-700 bg-indigo-50' : 'border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700'}`}
            >
              <FunctionSquare className="w-5 h-5 mr-3" />
              Épsilon-Delta
            </Link>
            <Link
              to="/exercises"
              onClick={closeMenu}
              className={`flex items-center pl-3 pr-4 py-2 border-l-4 text-base font-medium ${location.pathname === '/exercises' ? 'border-indigo-500 text-indigo-700 bg-indigo-50' : 'border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700'}`}
            >
              <Calculator className="w-5 h-5 mr-3" />
              Cálculo Paso a Paso
            </Link>
            <Link
              to="/strategies"
              onClick={closeMenu}
              className={`flex items-center pl-3 pr-4 py-2 border-l-4 text-base font-medium ${location.pathname === '/strategies' ? 'border-indigo-500 text-indigo-700 bg-indigo-50' : 'border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700'}`}
            >
              <Lightbulb className="w-5 h-5 mr-3" />
              Estrategias
            </Link>
            <Link
              to="/applications"
              onClick={closeMenu}
              className={`flex items-center pl-3 pr-4 py-2 border-l-4 text-base font-medium ${location.pathname === '/applications' ? 'border-indigo-500 text-indigo-700 bg-indigo-50' : 'border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700'}`}
            >
              <LineChart className="w-5 h-5 mr-3" />
              Aplicaciones
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
}

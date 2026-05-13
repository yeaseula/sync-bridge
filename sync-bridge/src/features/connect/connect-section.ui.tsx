import { Link, RefreshCw, AlertCircle } from "lucide-react";
import { FilesInsert } from "./files-insert.ui";

export const ConnectSection = () => {
  return (
    <main className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 2-1. Source Connection Card (Left 2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-[#161616] border border-gray-600 rounded-2xl p-6 shadow-xl h-full">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Link className="w-5 h-5 text-primary-500" /> Source Connection
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FilesInsert />

              <div className="space-y-4">
                <div className="bg-[#1c1c1c] border border-gray-600 rounded-xl p-5 h-full">
                  <p className="text-sm font-medium mb-3">
                    Back-end API (External)
                  </p>
                  <input
                    type="text"
                    placeholder="https://fastapi.com"
                    className="w-full bg-[#0f0f0f] border border-gray-600 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:border-primary-500"
                  />
                  <p className="text-[11px] text-gray-500 mt-3 leading-relaxed">
                    * Enter Swagger/OpenAPI URL to fetch real-time spec.
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full mt-12 bg-primary-600 hover:bg-primary-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-blue-900/20">
              <RefreshCw className="w-5 h-5" />
              Scan & Compare
            </button>
          </section>
        </div>

        {/* 2-2. Analysis Summary Card (Right 1 col) */}
        <div className="space-y-6">
          <section className="bg-[#161616] border border-gray-600 rounded-2xl p-6 h-full shadow-xl">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-500" /> Analysis
              Summary
            </h3>

            <div className="space-y-4">
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">
                  Critical
                </p>
                <p className="text-sm text-gray-300">
                  Variable Mismatch: usage_status {"->"} condition
                </p>
              </div>
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-xs font-bold text-yellow-500 uppercase tracking-wider mb-1">
                  Warning
                </p>
                <p className="text-sm text-gray-300">
                  Type Mismatch: purchase_year: string {"->"} number
                </p>
              </div>
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">
                  Info
                </p>
                <p className="text-sm text-gray-300">
                  New Field Detected: is_sold_out
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

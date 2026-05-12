import {
  Search,
  Bell,
  Settings,
  Link,
  Upload,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-200 font-sans">
      {/* 1. Header */}
      <header className="border-b border-gray-800 px-6 py-4 flex items-center justify-between bg-[#161616]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
            AI
          </div>
          <h1 className="text-xl font-bold tracking-tight">API Sync Master</h1>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search API endpoints or types..."
              className="w-full bg-[#1e1e1e] border border-gray-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
          <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border border-gray-700" />
        </div>
      </header>

      {/* 2. Main Content */}
      <main className="p-8 max-w-7xl mx-auto space-y-8">
        {/* Step Indicator */}
        <div className="flex justify-center items-center gap-4 text-sm font-medium text-gray-500">
          <span className="text-blue-500 border-b-2 border-blue-500 pb-1">
            1. Connect
          </span>
          <span className="w-8 h-[1px] bg-gray-800" />
          <span>2. Analyze</span>
          <span className="w-8 h-[1px] bg-gray-800" />
          <span>3. Compare</span>
          <span className="w-8 h-[1px] bg-gray-800" />
          <span>4. Apply</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 2-1. Source Connection Card (Left 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-[#161616] border border-gray-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Link className="w-5 h-5 text-blue-500" /> Source Connection
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group border-2 border-dashed border-gray-800 hover:border-blue-500/50 rounded-xl p-8 flex flex-col items-center justify-center bg-[#1c1c1c] transition-all cursor-pointer">
                  <Upload className="w-10 h-10 text-gray-600 group-hover:text-blue-500 mb-4 transition-colors" />
                  <p className="text-sm font-medium">Front-end Code (Local)</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Upload types.ts or drag & drop
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#1c1c1c] border border-gray-800 rounded-xl p-5">
                    <p className="text-sm font-medium mb-3">
                      Back-end API (External)
                    </p>
                    <input
                      type="text"
                      placeholder="https://fastapi.com"
                      className="w-full bg-[#0f0f0f] border border-gray-800 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:border-blue-500"
                    />
                    <p className="text-[11px] text-gray-500 mt-3 leading-relaxed">
                      * Enter Swagger/OpenAPI URL to fetch real-time spec.
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-blue-900/20">
                <RefreshCw className="w-5 h-5" />
                Scan & Compare
              </button>
            </section>
          </div>

          {/* 2-2. Analysis Summary Card (Right 1 col) */}
          <div className="space-y-6">
            <section className="bg-[#161616] border border-gray-800 rounded-2xl p-6 h-full shadow-xl">
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
    </div>
  );
};

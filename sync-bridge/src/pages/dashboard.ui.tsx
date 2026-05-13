import { Search, Bell, Settings } from "lucide-react";

import { ConnectSection } from "../widgets/connect-section.ui";

export const Dashboard = () => {
  return (
    <div className="min-h-screen text-gray-200 font-sans">
      {/* 1. Header */}
      <header className="border-b border-gray-800 px-6 py-4 flex items-center justify-between bg-[#161616]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center font-bold text-white">
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
      <main className="p-8 max-w-7xl mx-auto space-y-8">
        <div className="flex justify-center items-center gap-4 text-sm font-medium text-gray-500">
          <span className="text-primary-500 border-b-2 border-primary-500 pb-1">
            1. Connect
          </span>
          <span className="w-8 h-[1px] bg-gray-800" />
          <span>2. Analyze</span>
          <span className="w-8 h-[1px] bg-gray-800" />
          <span>3. Compare</span>
          <span className="w-8 h-[1px] bg-gray-800" />
          <span>4. Apply</span>
        </div>
        <ConnectSection />
      </main>
    </div>
  );
};

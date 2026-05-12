import { Search, Bell, Settings } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-gray-800 px-6 py-4 flex items-center justify-between bg-[#161616]">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center font-bold text-white">
          AI
        </div>
        <h1 className="text-xl font-bold tracking-tight">API Sync Bridge</h1>
      </div>

      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search API endpoints or types..."
            className="w-full bg-[#1e1e1e] border border-gray-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
        <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-500 to-primary-900 border border-gray-700" />
      </div>
    </header>
  );
};

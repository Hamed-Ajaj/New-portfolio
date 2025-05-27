"use client";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center">
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 border-t-4 border-blue-500 border-opacity-50 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-t-4 border-r-4 border-blue-600 border-opacity-80 rounded-full animate-spin animate-reverse"></div>
          <div className="absolute inset-4 border-t-4 border-l-4 border-blue-700 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

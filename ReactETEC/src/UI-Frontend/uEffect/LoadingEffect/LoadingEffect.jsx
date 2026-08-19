import React, { useEffect, useState } from "react";

const LoadingEffect = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  if (!loading) {
    return null;
  }
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-white flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Brand */}
        <h1 className="text-3xl font-bold text-green-700">General Farmers</h1>
        {/* Spinner */}
        <div className="mt-8 w-12 h-12 border-4 border-green-100 border-t-green-600 rounded-full animate-spin"></div>
        {/* Text */}
        <p className="mt-5 text-gray-600 text-sm">
          Loading your farm dashboard...
        </p>
        <div className="w-56 h-2 bg-gray-200 rounded-full mt-5 overflow-hidden">
          <div className="h-full bg-green-600 rounded-full animate-[loading_5s_linear]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingEffect;

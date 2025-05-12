import React from "react";

const Shorts = ({ length }: { length?: number }) => {
  return (
    <section className="lg:p-4 w-full bg-black h-auto border-t border-[#303030]">
      <h2 className="text-lg font-bold mb-4 flex items-center">
        <span className="text-white mr-2">Shorts</span>
      </h2>
      <div
        className={`${
          length !== undefined && length > 3
            ? "grid bg-red-500 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            : "flex justify-between gap-1"
        }`}
      >
        {Array.from({ length: length ? length : 5 }).map((_, index) => (
          <div key={index} className="flex w-full flex-col space-y-2">
            {/* Shorts Thumbnail Placeholder */}
            <div className="w-full h-[13rem] bg-[#303030] rounded-lg"></div>
            {/* Shorts Info */}
            <h3 className="text-sm font-medium line-clamp-2">
              Shorts Title Placeholder {index + 1}
            </h3>
            <p className="text-xs text-gray-400">1M views</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shorts;

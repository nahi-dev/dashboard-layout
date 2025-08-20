import React from "react";
import Link from "next/link";
const Pagination = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-4">
        <Link href="/">
          <button className="bg-[gray] text-white py-1 px-3 rounded-md">
            Previous
          </button>
        </Link>
        <Link href="/">
          <button className="bg-[white] text-black py-1 px-3 rounded-md">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;

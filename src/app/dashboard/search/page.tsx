import React from "react";

const SearchPage = ({ placeholder }: { placeholder: string }) => {
  return (
    <div>
      <input
        type="text"
        className="bg-transparent outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchPage;

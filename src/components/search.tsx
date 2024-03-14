import React from "react";

interface SearchBarProps {
  onChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleInputChange}  className=" m-6 border border-black w-full text-center p-2"/>
    </div>
  );
};

export default SearchBar;































































































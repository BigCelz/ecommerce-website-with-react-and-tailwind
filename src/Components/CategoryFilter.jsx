
import React from "react";
export const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="mb-4">
      <select
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
      >
        <option value="">All Categories</option>
        {
            categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
            ))  
        }
      </select>
    </div>
  );
};

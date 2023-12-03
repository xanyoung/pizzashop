import React, { useState } from 'react';

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categoriesArray = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categoriesArray.map((title, i) => (
          <li
            key={i}
            onClick={() => setActiveCategory(i)}
            className={activeCategory === i ? 'active' : ''}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

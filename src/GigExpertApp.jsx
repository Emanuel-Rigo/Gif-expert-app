import { useState } from "react";
import AddCategory from "./components/AddCategory";

function GigExpertApp() {
  const [categories, setCategories] = useState(["one punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //categories.push(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <h1>Gifexpert</h1>

      {/* input */}

      <AddCategory
        //setCategories={setCategories}
        onNewCategory={onAddCategory}
      ></AddCategory>

      {/* listado de git */}

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* gif item */}
    </>
  );
}

export default GigExpertApp;

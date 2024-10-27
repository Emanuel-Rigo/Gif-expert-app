import { useState } from "react";
import {AddCategory, GifGrid} from "./components";

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

      {categories.map((category) => (
        <GifGrid key={category} category={category}></GifGrid>
      ))}

      {/* gif item */}
    </>
  );
}

export default GigExpertApp;

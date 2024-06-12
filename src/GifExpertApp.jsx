import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {
        const lowerCaseCategory = newCategory.toLowerCase();
        if(categories.find((category) => category.toLowerCase() === lowerCaseCategory)) return; //para evitar que se inserten duplicados ni en mayusculas o min
        //console.log(newCategory);
        //categories.push(newCategory);
        //setCategories([...categories, newCategory]); //cuando se agrega en un arreglo se tiene que enviar un arreglo
        setCategories([...categories, newCategory]);
        
    };
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories={setCategories}
                onNewCategory= {event=> onAddCategory(event)}
            />
            { 
                categories.map( category =>{
                    return (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    )
                })
            }
        </>
    )
}

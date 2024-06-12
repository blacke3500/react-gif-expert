import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => { //un hook es una función que regresa algo
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages =  await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( ()=>{
        getImages();
    }, []);

    return{
        images, //es igual a images : images
        isLoading
    }
}

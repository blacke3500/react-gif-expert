import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);
    console.log({images, isLoading});
    


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2> Cargando... </h2>) //and logico 
            }
            
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem 
                            key={image.id}
                            {...image} //se usa spread para esparcir todas las propiedas de la imagen, en poco código, util cuando se tiene muchisimas propiedades en lugar de usar deses
                        />
                    ))
                }
            </div>

        </>
    );
};

import ItemListContainer from "../components/pages/ItemList/ItemListContainer";
import VerDetalles from "../components/pages/VerDetalles/VerDetalles";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "verDetalle",
        path: "/verDetalle",
        Element: VerDetalles
    },
    
]
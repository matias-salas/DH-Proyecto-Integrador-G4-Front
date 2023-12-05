import ItemListContainer from "../components/pages/ItemList/ItemListContainer";
import DetallesReserva from "../components/pages/VerDetalles/DetallesReserva";
import VerDetalles from "../components/pages/VerDetalles/VerDetalles";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "types",
        path: "/type/:categoryName",
        Element: ItemListContainer
    },
    {
        id: "verDetalle",
        path: "/verDetalle",
        Element: VerDetalles
    },
    {
        id: "verDetalleID",
        path: "/verDetalle/:id",
        Element: VerDetalles
    },

    {
        id: "detallesReserva",
        path: "/detallesReserva",
        Element: DetallesReserva
    }
]
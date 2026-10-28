import s from "./Catalog.module.css"
import { CatalogCard } from "./CatalogCard/CatalogCard";
import { Link } from "react-router"
import { products } from '../../assets/data';

export function Catalog() {
    return (

        <div className={s.grid}>
            {
                products.map((product) =>
                    <CatalogCard key={product.id} product={product} />
                )
            }

        </div>
    )
}
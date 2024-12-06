import { Product } from "src/data/Product.types"; 
import milk from "./milk";


const Fresh: { all: Product[]; } = {
    all: [...milk,],
}


export default Fresh;
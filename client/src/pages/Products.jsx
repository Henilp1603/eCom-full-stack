import {Badge} from "@radix-ui/themes";
import ProductCard from "../components/ProductCard/ProductCard";
import {useProductContext} from "../Contexts/ProductContext";
import {useFilterContext} from "../Contexts/FilterContext";

let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Products() {
  const {products} = useProductContext();
  const {filter_products, upadteFilterValue, filters} = useFilterContext();
  const {category} = filters;

  return (
    <>
      <div className="flex flex-col">
        <div>
          <div className="flex items-center justify-center mt-4 -mb-2">
            <p className="font-normal">
              Click on the category to filter the product
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Badge
              variant="soft"
              size="2"
              className="transition-colors hover:bg-green-300"
            >
              <button name="category" value="all" onClick={upadteFilterValue}>
                All
              </button>
            </Badge>
            <Badge
              variant="soft"
              size="2"
              className="transition-colors hover:bg-green-300"
            >
              <button name="category" value="Resin" onClick={upadteFilterValue}>
                Resin
              </button>
            </Badge>
            <Badge
              variant="soft"
              size="2"
              className="transition-colors hover:bg-green-300"
            >
              <button name="category" value="Epoxy" onClick={upadteFilterValue}>
                Epoxy
              </button>
            </Badge>
            <Badge
              variant="soft"
              size="2"
              className="transition-colors hover:bg-green-300"
            >
              <button
                name="category"
                value="Glitter"
                onClick={upadteFilterValue}
              >
                Glitter
              </button>
            </Badge>
            <Badge
              variant="soft"
              size="2"
              className="transition-colors  hover:bg-green-300 "
            >
              <button name="category" value="Art" onClick={upadteFilterValue}>
                Art
              </button>
            </Badge>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-16 p-10 max-md:gap-6 max-md:justify-center max-md:items-center">
          {filter_products.map((item, index) => {
            return <ProductCard key={index} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

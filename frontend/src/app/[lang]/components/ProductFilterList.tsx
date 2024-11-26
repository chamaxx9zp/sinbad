'use client'
interface Picture {
  data: {
      id: string;
      attributes: {
          url: string;
          name: string;
          alternativeText: string;
          width: number;
          height: number;
      };
  };
}

interface Products {
  title: string;
  description: string;
  picture: Picture;
  featured: boolean;
  product_Categories: any[];
}
interface ProductCategory {
  id: string;
  categoryName: string;
  link: string;
  products: any[];
}
interface ProductsFilterProps {
  data: {
      id: string;
      title: string;
  }

  products: Products[];
  productCategories: ProductCategory[];
}

export default function ProductFilterList({ data, products, productCategories }: ProductsFilterProps) {
  console.dir({ data, products, productCategories });
  return (
      <div className=" text-primary min-h-12 relative bg-black">
          {data.title}
          {products.length > 0 && products.map((product: any) => {
              
              return (
                  <div className="flex flex-col bg-black text-white justify-center items-center p-6">
                      {product.attributes.title}
                      {product.attributes.description}
                  </div>
              )
          })}
          <br />
          <div>
              <h2>Product Categories:</h2>
              <ul className="text-white z-10">
                  {productCategories.length > 0 && productCategories.map((category : any) =>{
                      //  console.log({category});
                       return (
                          <li key={category.attributes.id}>
                              <a href={category.attributes.link}>{category.attributes.categoryName}</a>
                          </li>
                      )
                  })}
              </ul>
          </div>
      </div>
  );
}
import LangRedirect from '../components/LangRedirect';
import componentResolver from '../utils/component-resolver';
import {getPageBySlug} from "@/app/[lang]/utils/get-page-by-slug";
import ProductFilterList from '../components/ProductFilterList';


export default async function RootRoute({ params }: { params: { lang: string } }) {
    try {
        // Fetch the page data
        const page = await getPageBySlug('products', params.lang);
        if (page.error && page.error.status == 401) {
            throw new Error(
                'Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/'
            );
        }

        if (page.data.length === 0 && params.lang !== 'en') return <LangRedirect />;
        if (page.data.length === 0) return null;

        // Fetch the product categories
        const res = await fetch(`http://localhost:1337/api/product-categories`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`, // Use your Strapi API token
            },
        });
        const productCategoriesResponse = await res.json();
        const productCategories = productCategoriesResponse.data || []; // Assuming data contains the categories
        
        const res_products = await fetch(`http://localhost:1337/api/products`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`, // Use your Strapi API token
            },
        });
        const productsResponse = await res_products.json();
        const products = productsResponse.data || []; // Assuming data contains the categories

        // console.log({productsResponse,productCategoriesResponse });
        // Extract contentSections
        const contentSections = page.data[0].attributes.contentSections;

        // Dynamically resolve components
        return (
            <>
                {contentSections.map((section: any, index: number) => {
                    // Handle HeroNav separately if required
                    // console.log({ "sectionname" : section.__component});

                    if (section.__component === "sections.product-filter-list" ) {
                        
                        return (
                            <ProductFilterList
                                key={index}
                                data={section} // Pass the relevant HeroNav data
                                products={products} // Pass product categories
                                productCategories={productCategories}
                            />
                        );
                    }
                    // Render other components dynamically
                    return componentResolver(section, index);
                })}
            </>
        );
    } catch (error: any) {
        console.error("Error fetching data:", error);
        if (typeof window !== "undefined") {
            window.alert('Missing or invalid credentials');
        }
    }
}





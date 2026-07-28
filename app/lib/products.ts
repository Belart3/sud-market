export type Product = {
    id: number;
    slug: string;
    vendor: string;
    name: string;
    price: number;
    privateLabel: boolean;
    image: string;
    category: string;
    stock: number;
    description: string;
};

type ProductsResponse = {
    products: Product[];
};

const PRODUCTS_API_URL = 'https://api.npoint.io/04c40a665b71909f42bb';

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(PRODUCTS_API_URL, {
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error(
            `Failed to fetch products: ${response.status}`
        );
    }

    const data: ProductsResponse = await response.json();

    return data.products;
}

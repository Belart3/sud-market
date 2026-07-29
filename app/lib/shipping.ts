export type ShippingSection = {
    id: number;
    title: string;
    content: string[];
};

type ShippingResponse = {
    shippingSections: ShippingSection[];
};

const SHIPPING_API_URL =
    'https://api.npoint.io/11b0ab86414f11d928aa';

export async function getShippingData(): Promise<ShippingSection[]> {
    const response = await fetch(SHIPPING_API_URL, {
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error(
            `Failed to fetch shipping data: ${response.status}`
        );
    }

    const data: ShippingResponse = await response.json();

    if (!Array.isArray(data.shippingSections)) {
        throw new Error('Invalid shipping data received');
    }

    return data.shippingSections;
}
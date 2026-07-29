export type FAQItem = {
    id: number;
    trigger: string;
    content: string;
};

export type FAQSection = {
    id: number;
    h2: string;
    accordion: FAQItem[];
};

type FAQResponse = {
    faqSections: FAQSection[];
};

const FAQ_API_URL =
    'https://api.npoint.io/88ecd0eae34a29d5abc0';

export async function getFAQs(): Promise<FAQSection[]> {
    const response = await fetch(FAQ_API_URL, {
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error(
            `Failed to fetch FAQs: ${response.status}`
        );
    }

    const data: FAQResponse = await response.json();

    if (!Array.isArray(data.faqSections)) {
        throw new Error('Invalid FAQ data received');
    }

    return data.faqSections;
}
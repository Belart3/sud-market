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

export const products: Product[] = [
    {
        id: 1,
        slug: "gold-plated-kholkhal-anklet-jewelry",
        vendor: "NUBIA GOLD",
        name: "Gold-Plated Kholkhal Anklet",
        price: 75,
        privateLabel: true,
        image: "/home-and-decor.jpg",
        category: "jewelry",
        stock: 3,
        description:
            "A gold-plated kholkhal inspired by traditional Nubian jewelry, carefully finished with timeless decorative details.",
    },
    {
        id: 2,
        slug: "filigree-hoop-earrings-perfumes",
        vendor: "NUBIA GOLD",
        name: "Filigree Hoop Earrings",
        price: 48,
        privateLabel: false,
        image: "/home-and-decor.jpg",
        category: "perfumes",
        stock: 8,
        description:
            "Lightweight filigree hoop earrings featuring intricate detailing inspired by traditional Nubian craftsmanship.",
    },
    {
        id: 3,
        slug: "bakhoor-al-nile-filigree-hoop-earrings-food",
        vendor: "BAKHOOR AL-NILE",
        name: "Filigree Hoop Earrings",
        price: 64,
        privateLabel: false,
        image: "/home-and-decor.jpg",
        category: "food",
        stock: 5,
        description:
            "Detailed filigree hoop earrings combining traditional patterns with a refined contemporary finish.",
    },
    {
        id: 4,
        slug: "gold-plated-kholkhal-anklet-clothes",
        vendor: "NUBIA GOLD",
        name: "Gold-Plated Kholkhal Anklet",
        price: 75,
        privateLabel: false,
        image: "/home-and-decor.jpg",
        category: "clothes",
        stock: 6,
        description:
            "A traditional gold-plated kholkhal anklet designed to complement both ceremonial and everyday clothing.",
    },
    {
        id: 5,
        slug: "filigree-hoop-earrings-home-decor",
        vendor: "NUBIA GOLD",
        name: "Filigree Hoop Earrings",
        price: 48,
        privateLabel: true,
        image: "/home-and-decor.jpg",
        category: "home-decor",
        stock: 4,
        description:
            "Elegant filigree hoop earrings with a lightweight design and carefully crafted ornamental details.",
    },
    {
        id: 6,
        slug: "gold-plated-kholkhal-anklet-sud-market-line-one",
        vendor: "NUBIA GOLD",
        name: "Gold-Plated Kholkhal Anklet",
        price: 75,
        privateLabel: false,
        image: "/home-and-decor.jpg",
        category: "sud-market-line",
        stock: 7,
        description:
            "A signature gold-plated kholkhal anklet from the Sud Market collection, inspired by classic Nubian jewelry.",
    },
    {
        id: 7,
        slug: "gold-plated-kholkhal-anklet-jewelry-two",
        vendor: "NUBIA GOLD",
        name: "Gold-Plated Kholkhal Anklet",
        price: 75,
        privateLabel: false,
        image: "/home-and-decor.jpg",
        category: "jewelry",
        stock: 2,
        description:
            "A handcrafted gold-plated anklet featuring a bold traditional silhouette and refined decorative detailing.",
    },
    {
        id: 8,
        slug: "bakhoor-al-nile-filigree-hoop-earrings-perfumes",
        vendor: "BAKHOOR AL-NILE",
        name: "Filigree Hoop Earrings",
        price: 64,
        privateLabel: true,
        image: "/home-and-decor.jpg",
        category: "perfumes",
        stock: 9,
        description:
            "Ornamental filigree hoop earrings designed with intricate patterns and a polished traditional finish.",
    },
    {
        id: 9,
        slug: "gold-plated-kholkhal-anklet-food",
        vendor: "NUBIA GOLD",
        name: "Gold-Plated Kholkhal Anklet",
        price: 75,
        privateLabel: false,
        image: "/home-and-decor.jpg",
        category: "food",
        stock: 5,
        description:
            "A gold-plated Nubian-style kholkhal anklet with a durable finish and traditional handcrafted appearance.",
    },
    {
        id: 10,
        slug: "gold-plated-kholkhal-anklet-clothes-two",
        vendor: "NUBIA GOLD",
        name: "Gold-Plated Kholkhal Anklet",
        price: 75,
        privateLabel: false,
        image: "/home-and-decor.jpg",
        category: "clothes",
        stock: 6,
        description:
            "A statement gold-plated kholkhal anklet created to pair beautifully with traditional and modern clothing.",
    },
    {
        id: 11,
        slug: "gold-plated-kholkhal-anklet-home-decor",
        vendor: "NUBIA GOLD",
        name: "Gold-Plated Kholkhal Anklet",
        price: 75,
        privateLabel: false,
        image: "/home-and-decor.jpg",
        category: "home-decor",
        stock: 3,
        description:
            "A decorative gold-plated kholkhal anklet featuring traditional Nubian-inspired shapes and detailing.",
    },
    {
        id: 12,
        slug: "gold-plated-kholkhal-anklet-sud-market-line-two",
        vendor: "NUBIA GOLD",
        name: "Gold-Plated Kholkhal Anklet",
        price: 75,
        privateLabel: false,
        image: "/home-and-decor.jpg",
        category: "sud-market-line",
        stock: 8,
        description:
            "A classic gold-plated kholkhal anklet from the Sud Market line, combining heritage styling with a polished finish.",
    },
];
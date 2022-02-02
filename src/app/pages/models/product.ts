export interface Product {
    name: string;
    price: number;
    image: string;
}

export const products: Product[] = [
    {
        name: 'Cacto',
        price: 19.99,
        image: 'product1.png',
    },
    {
        name: 'Cacto',
        price: 11.99,
        image: 'product2.png',
    },
    {
        name: 'Aloe Vera',
        price: 7.99,
        image: 'product3.png',
    },
    {
        name: 'Suculenta',
        price: 5.99,
        image: 'product4.png',
    },
    {
        name: 'Suculenta',
        price: 9.99,
        image: 'product5.png',
    },
    {
        name: 'Planta Verde',
        price: 10.99,
        image: 'product6.png',
    },
];

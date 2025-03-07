export type ProductType = {
  id: number;
  productName: string;
  slug: string;
  description: string;
  size: {
    data: {
      ancho: string;
      largo: string;
      alto: string;
      peso: string;
    }[];
  };
  price: number;
  stock: number;
  images: [
    {
      id: number;
      url: string;
    }
  ];
};

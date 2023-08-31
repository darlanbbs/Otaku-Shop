interface Products {
  name: string;
  price_in_cents: number;
  image_url: string;
  id: string;
  description?: string;
  category?: string;
}


export interface ProductsResponse {
  data: {
    Product: Products
}
}


export interface ProductsFetchResponse {
  data: {
    allProducts: Products[];
  };
}

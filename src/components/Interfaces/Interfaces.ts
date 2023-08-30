interface Products {
  name: string;
  price_in_cents: number;
  image_url: string;
  id: string;
}

export interface ProductsFetchResponse {
  data: {
    allProducts: Products[];
  };
}

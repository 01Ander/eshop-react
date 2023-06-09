import axios from "axios";

export const getData = (): Promise<Product[]> => {
  return axios
    .get("https://api.escuelajs.co/api/v1/products")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getProductsByCategory = (category: number): Promise<Product[]> => {
  return axios
    .get(`https://api.escuelajs.co/api/v1/products/?categoryId=${category}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

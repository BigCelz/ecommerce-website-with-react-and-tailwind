//api fetching function
export const fetchProducts = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    if(!response.ok) {
        throw new Error("failed to fatch products")
    }
    return response.json();
}

export const fetchCategories = async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    if(!response.ok) {
        throw new Error("failed to fetch categories")
    }
    return response.json();
}
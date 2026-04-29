

export function generateCard(product){
    const result = `
    <article class="product">
    <h2 class='product-title'>${product.name}</h2>
   
    `
    return result;
}
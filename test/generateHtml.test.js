import { generateCard } from "../src/generateHtml";


describe("generación de html a partir de un producto", () => {
    let product = {};

    beforeEach(() => {
        product = {
            name: "pc",
            price: 123,
            stock: 32
        };
    })
    it("confirmar que genera un article", () => {

        const result = generateCard(product);
        expect(result).toMatch("<article ")
        expect(result).toMatch("</article>")
    })
    it("confirmar que genera un h2 con el valor del nombre", () => {
         const result = generateCard(product);
        expect(result).toMatch(`<h2 class='product-title'>${product.name}</h2>`)
    })
})
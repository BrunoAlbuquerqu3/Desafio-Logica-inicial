
let invoice = {
    name : "Bruno",
    Age : 24,
    products : {
        0: ["Macarão","10.90"],
        1: ["Batata Chips","8.90"],
        2: ["Catupiry","12.99"],
    //productsValues : [10.99, 8.99, 12.99]
    },
    taxes : "98.90"
};

console.log(invoice.products); 

genereteInvoice (invoice)

function genereteInvoice(invoice ){
    console.log(`Comprador é ${invoice.name}`);
    console.log(`Idade do comprador é ${invoice.Age}`);
    console.log("--------------------");

    for (let index in invoice.products){
        let [productName,ProductPrice] = invoice.products[index]
        console.log(`- Produto: ${productName} - R$ ${ProductPrice}`);
    }
}
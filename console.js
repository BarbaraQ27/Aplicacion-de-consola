//Bienvenida al usuario

alert("Bienvenido a mi aplicación de Consola");
alert("Para empezar quisiera saber tu nombre :)");

MyNameIs();
function MyNameIs() {
    let name = prompt("Escribe tu nombre");
    console.log("Hola " + name + "! Bienvenido!");
    if (name == null || name == "") {
        alert("Debes introducir un nombre");
        return;
    }
}

//Explicacion de la consola

alert(
    "Este es un proyecto del uso de la consola de JavaScript que te permitirá utilizar operaciones matemáticas simples mediante un interactivo de carrito de compra e inventario. Vamos a ver!",
);

async function loading() {
    console.log("Cargando datos...");
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Datos cargados correctamente");
}
loading();

//Listado de productos, se genera un mapa

alert(
    "Aqui tienes una lista de productos con sus precios. Elije uno para comprar.",
);

const cart = new Map();
cart.set(1, { id: 1, name: "Galletas", price: 1000 });
cart.set(2, { id: 3, name: "Chocolates", price: 990 });
cart.set(3, { id: 4, name: "Snacks", price: 990 });

for (const [id, item] of cart) {
    console.log(id, item.name, `Precio: ${item.price}`);
}

//Operacion inicial, total de compra de un producto

setTimeout(() => {
    //Se usa un timeout para una mejor lectura de los productos

    let product = prompt("Ingrese nombre del producto");
    let price = Number(prompt("Ingrese el precio del producto"));
    let quantity = Number(prompt("Ingrese la cantidad que desea comprar"));

    let total = price * quantity;

    if (total > 10) {
        total *= 0.9;
        console.log(
            "Descuento por mas de 10 unidades aplicado. Nuevo total:",
            total.toFixed(2),
        );
    } else {
        console.log("Total de la compra:", total.toFixed(2));
    }

    console.log("Resumen de la compra");
    console.log(`Producto: ${product}`);
    console.log(`Precio unitario: $${price}`);
    console.log(`Cantidad comprada: ${quantity}`);
    console.log(`Total a pagar: $${total.toFixed(2)}`);

    alert(`Espero que disfrutes tus ${product}!`);
    alert(
        "Ahora vamos a crear una lista de compras con lo que prefieras. A continuación, eligirás 4 productos y le darás un precio",
    );

    //Array vacio, obtendra los resultados de items en carrito
    let shoppingCart = [];

    function addToCart(product, price) {
        const item = { product, price };
        shoppingCart.push(item);
        console.log(`${product} se ha añadido al carrito.`, item);
        console.log("Carrito actual:", shoppingCart);
    }

    addToCart(
        prompt("Ingrese nombre del producto 1"),
        prompt("Ingrese precio 1"),
    );
    addToCart(
        prompt("Ingrese nombre del producto 2"),
        prompt("Ingrese precio 2"),
    );
    addToCart(
        prompt("Ingrese nombre del producto 3"),
        prompt("Ingrese precio 3"),
    );
    addToCart(
        prompt("Ingrese nombre del producto 4"),
        prompt("Ingrese precio 4"),
    );

    alert(
        "Puedes revisar tu lista dando click a la flecha junto a 'Carrito actual'",
    );

    setTimeout(() => {
        alert(
            "Ahora que tienes tu carrito listo vamos a realizar la compra! Ingresa los precios de los productos",
        );

        let valor1 = parseFloat(prompt("Ingrese valor 1"));
        let valor2 = parseFloat(prompt("Ingrese valor 2"));
        let valor3 = parseFloat(prompt("Ingrese valor 3"));
        let valor4 = parseFloat(prompt("Ingrese valor 4"));

        //Funcion para obtener el precio total sumando los valores de los productos
        function totalCart(...prices) {
            let totalShoppingCart = prices.reduce((acc, price) => acc + price, 0);
            console.log(`Total Carrito: $${totalShoppingCart}`);
            return totalShoppingCart;
        }

        totalCart(valor1, valor2, valor3, valor4);

        setTimeout(() => {
            alert(
                "Para finalizar, vamos a crear un inventario para conocer que necesitarás en tu próxima compra",
            );
            //Funcion arroja el total de stock y contabiliza si hay un producto sin stock
            function inventoryManage(inventory) {
                function calcTotalStock() {
                    return inventory.reduce((total, product) => total + product.stock, 0);
                }

                function noProducts() {
                    return inventory
                        .filter((product) => product.stock === 0)
                        .map((product) => product.name);
                }
                return {
                    totalStock: calcTotalStock(),
                    outStock: noProducts(),
                };
            }
            //Array vacio, obtendra los resultados de los prompt de stock
            let inventory = [];

            //Añade los productos y stock mediante prompt
            function addToInventory(name, stock) {
                const item = { name, stock };
                inventory.push(item);
                console.log(`${name} se ha añadido al inventario.`, item);
                console.log("Inventario: ", inventory);
            }
            let stock1 = parseFloat(prompt("Ingrese stock de item 1"));
            let stock2 = parseFloat(prompt("Ingrese stock de item 2"));
            let stock3 = parseFloat(prompt("Ingrese stock de item 3"));

            addToInventory(prompt("Ingrese nombre del producto"), stock1);
            addToInventory(prompt("Ingrese nombre del producto"), stock2);
            addToInventory(prompt("Ingrese nombre del producto"), stock3);

            console.log(inventoryManage(inventory));

            setTimeout(() => {
                alert(
                    "Ahora que tienes tu inventario, veamos con una operación si deseas actualizar tu inventario",
                );

                //Calculadora para operar sobre el valor de stock inicial, segundo valor corresponde a unidades que pueden añadirse, restar, multiplicar o dividir sobre el stock inicial.
                let inventoryMath = function operation() {
                    let num1 = parseFloat(prompt("Valor stock"));
                    let num2 = parseFloat(
                        prompt("Valor stock (agregado, restado, multiplicado o divido"),
                    );

                    let math = prompt("Ingrese operacion (+, -, *, /)");
                    let output = "Salida: ";
                    switch (math) {
                        case "+":
                            output = num1 + num2;
                            break;
                        case "-":
                            output = num1 - num2;
                            break;
                        case "*":
                            output = num1 * num2;
                            break;
                        case "/":
                            output = num1 / num2;
                            break;
                    }
                    //Funcion actualizará el valor del array inicial, se debe indicar por nombre cual se actualizará
                    function updateInventory(name, stock) {
                        const item = inventory.find((p) => p.name === name);
                        if (!item) return;
                        item.stock = stock;
                    }
                    updateInventory(
                        prompt("Nombre del producto con nuevo stock"),
                        output,
                    );
                    console.log(inventory);
                };

                inventoryMath();

                alert(
                    "Ya esta! Inventario actualizado! De esta forma podrás saber exactamente cuándo deberás comprar tus artículos nuemavente",
                );

                setTimeout(() => {
                    alert(
                        "Me alegro que hayas llegado hasta el final. Espero que este proyecto haya sido entretenido :)",
                    );
                    alert("Para la revisión de este código visita mi GitHub en: ");
                    alert("Nos vemos!");

                    console.log("Adios! Que tengas un buen día!");
                }, 5000);
            }, 10000);
        }, 5000);
    }, 10000);
}, 2100);

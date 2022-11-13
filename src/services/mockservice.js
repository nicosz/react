/* -------------- BACK-END -------------- */
import products from "../data/data";

function getItems(category) {

  return new Promise((resolve) => {
    if (category === undefined) {
      setTimeout(() => {
        resolve(products);
      }, 2000);

    } else {
      setTimeout(() => {
        let ItemsRequested = products.filter((item) => item.category === category);
        resolve(ItemsRequested);
      }, 2000);
    }
  });
}

export function getSingleItem(idParam) {
  return new Promise((resolve, rejcet) => {
    let itemRequested = products.find((item) => item.id === Number(idParam));

    if (itemRequested === undefined) rejcet("item no encontrado");
    setTimeout(() => {
      resolve(itemRequested);
    }, 2000);

  });
}

export default getItems;
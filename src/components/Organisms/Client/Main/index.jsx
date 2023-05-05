import ListProduct from "../../../Molecules/Client/ListProduct";

const iphone_products = [
  {
    img: "../../../../assets/images/Product/img-cateipad.png",
    title: "iPhone",
    href: "/iphone",
  },
  {
    img: "../../../../assets/images/Product/img-cateipad.png",
    title: "Mac",
    href: "/mac",
    price: "100000",
  },
  {
    img: "../../../../assets/images/Product/img-cateipad.png",
    title: "iPad",
    href: "/ipad",
    price: "100000",
  },
  {
    img: "../../../../assets/images/Product/img-cateipad.png",
    title: "Watch",
    href: "/apple-watch",
    price: "100000",
  },
  {
    img: "../../../../assets/images/Product/img-cateipad.png",
    title: "Âm thanh",
    href: "/am-thanh",
    price: "100000",
  },
  {
    img: "../../../../assets/images/Product/img-cateipad.png",
    title: "Phụ kiện",
    href: "/phu-kien",
    price: "100000",
  },
];

// const iphone_products = [

// ];

const Main = () => {
  return (
    <div>
      <div>
        <h2>iPhone</h2>
        <ListProduct products={iphone_products} />
      </div>
    </div>
  );
};

export default Main;

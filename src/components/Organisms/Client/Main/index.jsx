import { NavLink } from "react-router-dom";
import NavLinkWithIcon from "../../../Molecules/Client/NavLinkWithIcon";
import SlideImage from "../../../Molecules/Client/SlideImage";
import ListProduct from "../../../Molecules/Client/ListProduct";
import "./MainStyle.scss";

const products = [
  {
    img: "../../../../assets/images/Product/img-cateipad.png",
    title: "iPhone",
    href: "/iphone",
  },
  {
    img: "../../../../assets/images/Product/img-cateipad.png",
    title: "Mac",
    href: "/mac",
  },
  {
    img: "../../../../assets/images/Product/img-cateipad.png",
    title: "iPad",
    href: "/ipad",
  },
  {
    img: "../../../../assets/images/Product/img-cateipad.png",
    title: "Watch",
    href: "/apple-watch",
  },
  {
    img: "../../../../assets/images/Product/img-cateipad.png",
    title: "Âm thanh",
    href: "/am-thanh",
  },
  {
    img: "../../../../assets/images/Product/img-cateipad.png",
    title: "Phụ kiện",
    href: "/phu-kien",
  },
];

const iphone_products = [
  {
    img: "../../../../assets/images/Product/img-cateipad.png",
    title: "iPhone",
    href: "/iphone",
    price: "26.480.000₫"
  },
  {
    img: "../../../../assets/images/Product/img-cateipad.png",
    title: "Mac",
    href: "/mac",
    price: "26.480.000₫"
  },
  {
    img: "../../../../assets/images/Product/img-cateipad.png",
    title: "iPad",
    href: "/ipad",
    price: "26.480.000₫"
  },
  {
    img: "../../../../assets/images/Product/img-cateipad.png",
    title: "Watch",
    href: "/apple-watch",
    price: "26.480.000₫"
  }
];

const Main = () => {
  return (
    <div className="main">
      <SlideImage/>
      <div className="content">
        <div className="warpper-box-product">
          <ListProduct products={products} />
        </div>
        <div className="box-slide">
          <NavLinkWithIcon href="/iphone" title="iPhone" />
          <ListProduct products={iphone_products} />
        </div>
        <div className="box-slide">
          <NavLinkWithIcon href="/mac" title="Mac" />
          <ListProduct products={iphone_products} />
        </div>
        <div className="box-slide">
          <NavLinkWithIcon href="/ipad" title="iPad" />
          <ListProduct products={iphone_products} />
        </div>
        <div className="box-slide">
          <NavLinkWithIcon href="/apple-watch" title="WATCH" />
          <ListProduct products={iphone_products} />
        </div>
        <div className="box-slide">
          <NavLink to="/am-thanh" className="nav-link">
            <h2 className="nav-link-title">Âm thanh</h2>
          </NavLink>
          <ListProduct products={iphone_products} />
        </div>
        <div className="box-slide">
          <NavLink to="/phu-kien" className="nav-link">
            <h2 className="nav-link-title">Phụ kiện</h2>
          </NavLink>
          <ListProduct products={iphone_products} />
        </div>
      </div>
    </div>
  );
};

export default Main;

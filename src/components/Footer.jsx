import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm">
        <div>
          <img className=" w-32" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nam
            fuga blanditiis possimus. Maiores dignissimos aspernatur, nostrum
            nesciunt, eos quibusdam eveniet est totam magnam illo officia, quam
            vero. Rem, totam.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivary</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+8801765042763</li>
            <li>asadujjamanakin2@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ DTR.com-All Rights Preserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

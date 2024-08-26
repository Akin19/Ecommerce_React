import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsLetter from "../components/NewsLetter";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            harum et minima reprehenderit neque quia dicta veritatis,
            perspiciatis optio vero sed ipsa, quis, impedit provident excepturi
            commodi placeat culpa laboriosam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti minus, at est accusamus vel,
            doloremque facilis error illum minima sunt vero, modi suscipit enim?
            Inventore odio dignissimos voluptates eum accusantium!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            eius, iste facilis{" "}
          </p>
          <b className="text-gray-800">Our Misson</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            ad expedita animi qui aliquam quibusdam dolor molestias in, illum,
            corporis iusto nesciunt accusamus accusantium consequuntur
            repudiandae culpa atque, voluptatibus architecto!
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-10 md:px-16 py-18 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            quaerat architecto nam unde est, earum commodi assumenda accusamus
            recusandae at fuga perferendis voluptatibus inventore praesentium
            tempore, porro dolor provident doloremque.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-18 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            quaerat architecto nam unde est, earum commodi assumenda accusamus
            recusandae at fuga perferendis voluptatibus inventore praesentium
            tempore, porro dolor provident doloremque.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-18 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            quaerat architecto nam unde est, earum commodi assumenda accusamus
            recusandae at fuga perferendis voluptatibus inventore praesentium
            tempore, porro dolor provident doloremque.
          </p>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default About;

import img from "../../assets/images/vaibhav_lachhwani/vaibhav_lachhwani_2.png";
import SocialComponent from "./SocialComponent";

export default function AboutPictureSection() {
  return (
    <div className="du-card bg-base-100 max-w-sm">
      <figure className="">
        <img src={img} className="rounded-full size-80" />
      </figure>
      <div className="du-card-body items-center text-center">
        <SocialComponent />
      </div>
    </div>
  );
}

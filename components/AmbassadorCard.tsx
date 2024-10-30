import { convertImage } from "@/lib/helpers";
import { Ambassador } from "@/types/types";

export const AmbassadorCard = ({
  name,
  email,
  phone,
  cnic,
  institute,
  picture,
}: Ambassador) => {
  return (
    <div className="w-full bg-sky-100 rounded-2xl h-full max-h-[500px] relative overflow-hidden">
      <div className="w-full h-full rounded-2xl relative z-10">
        <img
          src={picture}
          alt={name}
          loading="lazy"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-6 py-6 z-20">
        <p className="text-text text-4xl font-bold font-heading">{name}</p>
        <p className="text-text font-bold font-heading">{institute}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#001E80] to-transparent opacity-75 z-10"></div>
    </div>
  );
};

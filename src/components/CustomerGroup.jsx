import Person1 from "../assets/images/p1.jpg";
import Person2 from "../assets/images/p2.jpg";
import Person3 from "../assets/images/p3.jpg";

const CustomerGroup = () => {
  return (
    <div className="flex -space-x-3">
      <img
        className="w-10 h-10 border-2 border-white rounded-full hover:-translate-y-1 object-cover"
        src={Person2}
        alt="Stacked rounded avatar"
      />
      <img
        className="w-10 h-10 border-2 border-white rounded-full hover:-translate-y-1 object-cover"
        src={Person1}
        alt="Stacked rounded avatar"
      />
      <img
        className="w-10 h-10 border-2 border-white rounded-full hover:-translate-y-1 object-cover"
        src={Person3}
        alt="Stacked rounded avatar"
      />
    </div>
  );
};

export default CustomerGroup;

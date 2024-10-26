import React from "react";

const CustomerGroup = () => {
  return (
    <div className="flex -space-x-3">
      <img
        className="w-10 h-10 border-2 border-white rounded-full hover:-translate-y-1 "
        src="https://pagedone.io/asset/uploads/1704275541.png"
        alt="Stacked rounded avatar"
      />
      <img
        className="w-10 h-10 border-2 border-white rounded-full hover:-translate-y-1 object-cover"
        src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
        alt="Stacked rounded avatar"
      />
      <img
        className="w-10 h-10 border-2 border-white rounded-full hover:-translate-y-1 object-cover"
        src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
        alt="Stacked rounded avatar"
      />
    </div>
  );
};

export default CustomerGroup;

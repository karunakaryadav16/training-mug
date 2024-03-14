import React from "react";


interface Picture {
  id: number;
  title: string;
  url: string;
}

interface PictureSectionProps {
  pictures: Picture[];
  onSave: (id: number) => void;
}

const PictureSection: React.FC<PictureSectionProps> = ({ pictures, onSave }) => {
  return (
 




    <div className="flex flex-wrap bg-gray-200 p-2">
    <h1 className="w-full text-center">Pictures</h1>
    {pictures.map((picture) => (
      <div key={picture.id} className="w-full  rounded-lg sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <div className=" .rounded-sm border-2  box-borde border-red-500 p-2 flex flex-col  flex-spacebetween h-72">
          <img src={picture.url} alt={picture.title} className="object-cover w-full h-36 mb-2" />
          <span className="text-center">{picture.title}</span>
          <button
            onClick={() => onSave(picture.id)}
            className="bg-green-500  w-full border border-green-700 text-white px-4 py-2 rounded-md mt-2 self-center"
          >
            Save
          </button>
        </div>
      </div>
    ))}
  </div>











  );
};

export default PictureSection;

















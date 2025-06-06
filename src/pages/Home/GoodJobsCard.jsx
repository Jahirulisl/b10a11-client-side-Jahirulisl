import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaDollarSign, FaMarker } from "react-icons/fa6";
import { Link } from "react-router-dom";

const GoodJobsCard = ({ job }) => {
  const {_id,
    title,
    location,
    company_logo,
    company,
    requirements,
    description,
    salaryRange,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-x1">
       <div className="flex gap-2 m-2">
         <figure>
          <img
           className="w-16"
            src={ company_logo}
           alt="Shoes"
           
         />
         </figure>
          <div>
            <h4 className="text-2xl">{company}</h4>
            <p className="flex gap-2 items-center"><FaMapMarkerAlt></FaMapMarkerAlt>
              {location}</p>
          </div>
       </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{ title}
        <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
         <div className="flex gap-2 flex-wrap px-2 hover:text-green-300 hover:bg-gray-400">
          {
            requirements.map(skill => <p className="border rounded-md text-center">{skill}</p>)
          }
         </div>
        <div className="card-actions justify-end items-center mt-4">
          <p className="flex items-center">salary: <FaDollarSign></FaDollarSign>{salaryRange.min} - {salaryRange.max}  {salaryRange.currency}</p>
         <Link to={`/jobs/${_id}`}>
          <button className="btn btn-primary">Apply</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default GoodJobsCard;

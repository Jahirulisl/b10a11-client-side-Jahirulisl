import React, { useEffect, useState } from 'react';
import GoodJobsCard from './GoodJobsCard';

const GoodJobs = () => {

 const [jobs,setJobs] =useState ([]);
 useEffect(() =>{
  fetch('http://localhost:3000/aplications')
  .then(res=>res.json())
  .then(data=>{
    setJobs(data);
  })
 },[])  
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
               {
                jobs.map(job =><GoodJobsCard key={job._id} job={job}></GoodJobsCard>)
               }
            </div>
        </div>
    );
};

export default GoodJobs;

import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {title,company,deadline} = useLoaderData();
   
    return (
        <div className='m-2'>
             <h2 className='text-3xl'>from jobDetails for:{title}</h2>
             <p>apply for:{company}</p>
             <p>deadline:{deadline}</p>
             <button className='btn btn-primary'>Apply Now</button>
        </div>
    );
};

export default JobDetails;
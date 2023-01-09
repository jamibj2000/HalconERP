import React, { useState } from 'react'
import { FormContainer } from '../formularios/componentsForm/formContainer/FormContainer';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: !!labels && labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function DashboardHome  ()  {
  
  
  
  return (
    <FormContainer progress='45'>
          <div className='row'>
          <div className="col-xl-3 col-md-6 mb-4" style={{borderRadius:'1rem'}} >
    <div style={{borderRadius:'1rem'}} className="card border-left-primary shadow h-100 py-2">
        <div className="card-body" style={{borderLeftColor:'red'}} >
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Numero de Usuarios</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">1201</div>
                </div>
                <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="col-xl-3 col-md-6 mb-4" style={{borderRadius:'1rem'}}>
    <div style={{borderRadius:'1rem'}} className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Numero de Aspirantes</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">345</div>
                </div>
                <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="col-xl-3 col-md-6 mb-4" style={{borderRadius:'1rem'}}>
    <div style={{borderRadius:'1rem'}} className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Grupos</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">30</div>
                </div>
                <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
    </div>
</div>

          </div>
    
          <Bar options={options} data={data} />;

{/* <Doughnut data={[1,2,3,4,5,6,7,40]} /> */}
        </FormContainer>
    )
}

export { DashboardHome }
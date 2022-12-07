import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import Modal from '../modal/modal';


function ServiceCollection({ title, data }) {
   const [isModalOpen, setIsModalOpen] = useState(false);
   let services = {};

   const tableRows = data.map(({ id, service, rate, min_order, max_order, avg_time, description }) => {
         services = {service, description};

         return (
            <tr key={id} className='services__table__row'>
              <td>{id}</td>
              <td>{service}</td>
              <td className="figure">${rate}</td>
              <td className="figure">{min_order}</td>
              <td className="figure">{max_order}</td>
              <td>{avg_time}</td>
              <td>
                 <Button variant="primary" onClick={() => setIsModalOpen(true)}>View</Button>
              </td>
            </tr>
         )
      });

	return (
		<>
         { isModalOpen ? 
            <Modal
               isOpen={isModalOpen}
               closeModal={() => setIsModalOpen(prevState => !prevState)}
            >
            <h3 style={{ textAlign: 'center', textTransform: 'uppercase' }}>{services.service}</h3>
         </Modal> : null }

			<tr className="title">
           <td colSpan='7'>
              <p className="gradient">{title}</p>
           </td>
        	</tr>

         {/* Table rows */}
         { tableRows }
		</>
	)
}

ServiceCollection.propTypes = {
	id: PropTypes.number
};

export default ServiceCollection
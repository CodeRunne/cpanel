import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';


function ServiceCollection({ title, data }) {
	return (
		<>
			<tr className="title">
              <td colSpan='7'>
                 <p className="gradient">{title}</p>
              </td>
           	</tr>

            {
               data.map(({ id, service, rate, min_order, max_order, avg_time }) => (
                  <tr key={id} className='services__table__row'>
                    <td>{id}</td>
                    <td>{service}</td>
                    <td className="figure">${rate}</td>
                    <td className="figure">{min_order}</td>
                    <td className="figure">{max_order}</td>
                    <td>{avg_time}</td>
                    <td>
                       <Button variant="primary">View</Button>
                    </td>
                  </tr>
               ))
            }
		</>
	)
}

ServiceCollection.propTypes = {
	id: PropTypes.number
};

export default ServiceCollection
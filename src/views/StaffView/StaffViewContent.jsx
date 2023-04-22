import { useState } from 'react';
import { staffData } from '@mocks/staffdata';
import StaffInfo from './StaffInfo';

import './StaffViewContent.scss';

const StaffViewContent = () => {
  const [chosen, setChosen] = useState(0);
  return (
    <div>
      <div className="grid-container">
        <div className="grid-item">
          <h3>Nhân viên</h3>
          {staffData.map((item, index) => (
            <button
              key={index}
              className={index === chosen ? 'button activeButton' : 'button inactiveButton'}
              onClick={() => setChosen(index)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="grid-item">
          <h3> Thông tin của {staffData[chosen].name}</h3>
          <StaffInfo data={staffData[chosen]} />
        </div>
      </div>
    </div>
  );
};

export default StaffViewContent;

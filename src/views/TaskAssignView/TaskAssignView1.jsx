import React, { useRef, useState, forwardRef } from 'react';

import Sidebar from '@components/Sidebar';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

import './TaskAssign.scss';

import { driverData } from '@mocks/vehicledata/driverdata';
import { vehicleData } from '@mocks/vehicledata/vehicledata';

const VehicleList = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const options = vehicleData.map((vehicle) => ({
    value: vehicle.value,
    label: vehicle.label,
    imageSrc: vehicle.image,
  }));
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      paddingLeft: '70px',
      fontSize: '25px',
      textAlign: 'left',
      background: `url(${state.data.imageSrc}) no-repeat left center`,
      backgroundSize: '50px 35px',
      backgroundColor: 'gray',
      color: 'black',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'black',
      fontSize: '19px',
      textAlign: 'left',
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: '#DDDDDD',
      height: '50px',
    }),
  };
  const publisher = (selectedOption) => {
    if (selectedOption.value)
      return (
        <div className="publish">
          <div className="picture">
            <img className="my-image" src={selectedOption.imageSrc} alt="" />
          </div>
          <p className="text-publish">{selectedOption.value}</p>
        </div>
      );
  };
  return (
    <div className="wrapper-first">
      <h3>Chọn phương tiện</h3>
      <div className="container-select">
        <Select
          className="select-option"
          options={options}
          value={selectedOption}
          onChange={handleChange}
          styles={customStyles}
          placeholder="None"
        />
        <FontAwesomeIcon className="icon" icon={faTruck} />
      </div>
      <div>{publisher(selectedOption)}</div>
    </div>
  );
};

const Driverlist = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const options = driverData.map((driver) => ({
    value: driver.value,
    label: driver.label,
    imageSrc: driver.image,
  }));
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      paddingLeft: '70px',
      fontSize: '22px',
      textAlign: 'left',
      background: `url(${state.data.imageSrc}) no-repeat left center`,
      backgroundSize: '50px 35px',
      backgroundColor: 'gray',
      color: 'black',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'black',
      fontSize: '19px',
      textAlign: 'left',
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: '#DDDDDD',
      height: '50px',
    }),
  };
  const publisher = (selectedOption) => {
    if (selectedOption.value) {
      return (
        <div className="publish">
          <div>
            <img className="my-image" src={selectedOption.imageSrc} alt="" />
          </div>
          <p className="text-publish">{selectedOption.value}</p>
        </div>
      );
    }
  };

  return (
    <div className="wrapper-second">
      <h3>Chọn tài xế</h3>
      <div className="container-select">
        <Select
          className="select-option"
          options={options}
          value={selectedOption}
          onChange={handleChange}
          styles={customStyles}
          placeholder="None"
        />
        <FontAwesomeIcon className="icon" icon={faPerson} />
      </div>
      <div>{publisher(selectedOption)}</div>
    </div>
  );
};

const Content = () => {
  return (
    <>
      <div className="header">
        <NavLink to="/tasks">
          <FontAwesomeIcon className="icon-first" icon={faArrowLeft} />
        </NavLink>
      </div>
      <div className="container-content">
        <div className="section-first">
          <div className="circle-first">1</div>
          <div className="line"></div>
          <div className="circle-second">2</div>
        </div>
        <div className="text-section-first">
          <p className="text-first">Phân công phương tiện và tài xế</p>
          <p className="text-second">Phân công người thu gom</p>
        </div>

        <div className="section-second">
          <VehicleList />
          <Driverlist />
        </div>
        <Link to="/task-assign-2">
          <button className="button-1">Tiếp Theo</button>
        </Link>
      </div>
    </>
  );
};

const TaskAssignView1 = () => {
  return (
    <>
      <div id="workspace">
        <div id="workspace-1">
          <Sidebar />
        </div>
        <div id="workspace-2">
          <Content />
        </div>
      </div>
    </>
  );
};

export default TaskAssignView1;

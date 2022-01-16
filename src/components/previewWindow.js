import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

const previewWindow = (props) => {
  const [currentData, setCurrentData] = useState();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setCurrentData(props.car);
    if (currentData) {
      const typeName = (currentData.typeName && currentData.typeName.price) || 0;
      const engineName = (currentData.engineName && currentData.engineName.price) || 0;
      const gearBoxName = (currentData.gearBoxName && currentData.gearBoxName.price) || 0;
      setPrice(typeName + engineName + gearBoxName);
    }
  }, [currentData, props]);

  return currentData ? (
    <div className="previewWindow">
      <div className="previewWindow-car">
        <FontAwesomeIcon
          className={`previewWindow-carIcon fa-${currentData.typeName ? currentData.typeName.image : '3x'}`}
          style={{
            color: currentData.color && currentData.color.hexVal,
          }}
          icon={faCar}
        />
      </div>
      <ul className="previewWindow-carData">
        <li>
          <h2>Summary: </h2>
        </li>
        <li>
          <h3>Model: </h3>
          {currentData.typeName ? currentData.typeName.type : '---'}
        </li>
        <li>
          <h3>Engine: </h3>
          {currentData.engineName ? currentData.engineName.engine : '---'}
        </li>
        <li>
          <h3>GearBox: </h3>
          {currentData.gearBoxName ? currentData.gearBoxName.type : '---'}
        </li>
        <li>
          <h3>Color: </h3>
          {currentData.color ? currentData.color.name : '---'}
        </li>
        <li>
          <h3>Price: </h3>
          {price}
          $
        </li>
      </ul>
    </div>
  ) : 'No data found';
};

const mapStateToProps = (state) => ({
  car: state.car,
});

export default connect(mapStateToProps)(previewWindow);

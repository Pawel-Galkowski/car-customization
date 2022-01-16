import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import updateCar from '../actions/config';

const configurationMenu = (props) => {
  const [carData, setCarData] = useState([]);
  const [carType, setCarType] = useState({});
  const [carEngine, setCarEngine] = useState({});
  const [carGear, setCarGear] = useState('');
  const [color, setCarColor] = useState({});

  const data = {
    typeName: carType,
    engineName: carEngine,
    gearBoxName: carGear,
    color,
  };

  useEffect(() => {
    props.updateCar(data);
  }, [data]);

  return (
    <div className="configurationMenu">
      <div className="configMenu">
        <h2>CAR CONFIG</h2>
        <div className="configMenu-carType">
          <h3 className="configMenu-boxTitle">Car Model</h3>
          {props.cars.model ? props.cars.model.map((car, key) => (
            <button
              type="button"
              key={key}
              onClick={() => {
                setCarType({
                  type: car.name,
                  price: car.price,
                  image: car.image,
                });
                setCarData({
                  engine: [...car.engine],
                });
                setCarEngine('');
                setCarGear('');
              }}
            >
              {car.name}
            </button>
          )) : ''}
        </div>
        <div className="configMenu-carEngine">
          {carData.engine === undefined ? '' : (
            <h3 className="configMenu-boxTitle"> Engine </h3>
          )}
          {carData.engine === undefined
            ? ' '
            : (carData.engine.map((eng, key) => (
              <button
                type="button"
                key={key}
                onClick={() => {
                  setCarEngine({
                    engine: eng.name,
                    price: eng.price,
                  });
                  setCarData({
                    engine: [...carData.engine],
                    gearBox: [...eng.gearbox],
                  });
                  setCarGear('');
                }}
              >
                {eng.name}
              </button>
            )))}
        </div>
        <div className="configMenu-carGearBox">
          {carData.gearBox === undefined ? (
            ''
          ) : (
            <h3 className="configMenu-boxTitle"> GearBox </h3>
          )}
          {carData.gearBox === undefined
            ? ' '
            : carData.gearBox.map((gear, key) => (
              <button
                type="button"
                key={key}
                onClick={() => {
                  setCarGear(gear);
                }}
              >
                {gear.type}
              </button>
            ))}
        </div>
        <div className="configMenu-carColor">
          {
          carGear && props.cars.colors
            ? props.cars.colors.map((col, key) => (
              <button
                type="button"
                key={key}
                aria-label="Color button"
                onClick={() => {
                  setCarColor(col);
                }}
                style={{
                  backgroundColor: col.hexVal,
                }}
              />
            ))
            : ''
        }
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCar: (data) => dispatch(updateCar(data)),
});

export default connect(null, mapDispatchToProps)(configurationMenu);

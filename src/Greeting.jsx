import PropTypes from 'prop-types';

const Greeting = ({ name, age }) => {
  return (
    <div className="greeting-container">
      <h1 className="greeting-text">Olá, {name}! Você tem {age} anos.</h1>
    </div>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Greeting;

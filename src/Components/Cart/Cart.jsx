
import PropTypes from "prop-types";
const Cart = ({selectedActors,totalCost,remaining}) => {

    return (
    <div className="text-white space-y-1 text-xl">
      <h3>Total Actors : {selectedActors.length}</h3>
      <h5>Remaining Taka : {remaining}</h5>
      <h5>TotalCost : {totalCost}</h5>
      {selectedActors.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </div>
    );
};

Cart.propTypes = {
    selectedActors: PropTypes.array.isRequired,
    totalCost: PropTypes.number,
    remaining: PropTypes.number
  };

export default Cart;
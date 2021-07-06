import React from 'react';
import "./Card.css";
 
const Card = ({ URL }) => {
return (
<div className="Card"><iframe width="320" height="200"
src={URL}>
</iframe>
</div>
)};
 
export default Card;
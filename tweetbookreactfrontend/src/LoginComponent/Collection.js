import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
 
export function Collection() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];
  return (
      <div className="Collection" style={{backgroundColor:"#ebebe0", padding:"37px", borderTop:"12px double rgb(0, 89, 254)"}}>
        <h3 style={{color:"rgb(0, 89, 254)", textAlign:"center", marginBottom:"20px", fontFamily:"Times New Roman"}}><b>Popular Videos</b></h3>
        <Carousel breakPoints={breakPoints}>
          <Card URL="https://www.youtube.com/embed/15nR7nhFRZE"/>
          <Card URL="https://www.youtube.com/embed/15nR7nhFRZE"/>
          <Card URL="https://www.youtube.com/embed/15nR7nhFRZE"/>
          <Card URL="https://www.youtube.com/embed/15nR7nhFRZE"/>
          <Card URL="https://www.youtube.com/embed/15nR7nhFRZE"/>
          <Card URL="https://www.youtube.com/embed/15nR7nhFRZE"/>
          <Card URL="https://www.youtube.com/embed/15nR7nhFRZE"/>
          <Card URL="https://www.youtube.com/embed/15nR7nhFRZE"/>
        </Carousel>
      </div>
  );
}
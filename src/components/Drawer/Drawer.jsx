import * as React from "react";


export default function Drawer() {
  

 

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer("right", true)}>{anchor}</Button>
          
      ))}
    </div>
  );
}

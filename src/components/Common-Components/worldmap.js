import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { colorScale, countries, missingCountries } from "../Countries";

function WorldMap() {
  const regionStyle = {
    initial: {
      fill: "dotted",
    },
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "60%",
        height: "500px",
        backgroundColor: "white",
      }}
    >
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "700px",
          height: "600px",
        }}
        backgroundColor="#fff"
        markers={missingCountries}
        markerStyle={{
          initial: {
            fill: "red",
          },
        }}
        series={{
          regions: [
            {
              scale: colorScale,
              values: countries,
              min: 0,
              max: 100,
              attribute: "fill",
            },
          ],
        }}
        regionStyle={regionStyle} // Set the regionStyle to apply dotted style
        onRegionTipShow={(event, label, code) => {
          label.html(`
            <div style="background-color: #fff; border-radius: 6px; min-height: 50px; width: 125px; color: white; padding-left: 10px">
              <p><b>${label.html()}</b></p>
              <p>${countries[code]}</p>
            </div>`);
        }}
        onMarkerTipShow={(aevent, label, code) => {
          label.html(`
            <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px">
              <p style="color: black !important;"><b>${label.html()}</b></p>
            </div>`);
        }}
      />
    </div>
  );
}

export default WorldMap;

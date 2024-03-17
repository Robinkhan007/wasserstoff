import React from "react";
import { Typography, Card, Box } from "@mui/material";
import DirectionsSharpIcon from "@mui/icons-material/DirectionsSharp";
import PiChart from "../Common-Components/piChart";
// import WorldMap from "../Common-Components/worldmap";
// import SalesBarChart from "../Common-Components/chart2";
import styled from "styled-components";
import { BarChart } from "@mui/x-charts/BarChart";
import BubbleChart from "../Common-Components/bubbleChart";
import Header from "../Header/header";

// import CirclePacking from "../Common-Components/chart2";

const MainContainer = styled.div`
  margin: 64px 10px;
  display: flex;
  flex-direction: column;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const DataContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
  width: 80px;
  height: 80px;
  background-color: #8676ff;
  margin-bottom: ${(props) => props.bottommargin || "15px"};
`;

const Main = () => {
  const data = [{ amount: "2431340" }];

  return (
    <div>
      <Header />
      <Typography variant="h6">WSTFFRONT -END HACKATHON</Typography>
      <MainContainer>
        <Box sx={{ height: "100px", width: "10%", textAlign: "center" }}>
          <Typography>Design Faster</Typography>
          <Card sx={{ height: "200px" }}>
            <div>
              <svg width="100" height="100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#ccc"
                  strokeWidth="5"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#007bff" // Progress color
                  strokeWidth="5"
                  strokeDasharray="251.327" // 2 * Math.PI * radius
                  // strokeDashoffset={calculateOffset(progress1)}
                />
              </svg>
              <Typography> Total Earning</Typography>
              {/* <br /> */}
              <Typography>$12875</Typography>
            </div>
          </Card>
          <Card sx={{ marginTop: "30px", height: "100px" }}>
            <Typography>Total Earning</Typography>
            <Typography>$12875</Typography>
          </Card>
        </Box>
      </MainContainer>
    </div>
  );
};

export default Main;

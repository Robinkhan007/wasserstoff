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
        <Box sx={{ display: "flex", height: "300px" }}>
          <LeftContainer>
            <Typography
              variant="subtitle1"
              component="b"
              style={{ fontSize: "1.2em" }}
            >
              All users &gt;Detail
            </Typography>
            <Typography variant="h4" sx={{ marginBottom: "40px" }}>
              {data[0].amount}
            </Typography>
            <DataContainer>
              <StyledCard sx={{ backgroundColor: "#8676ff" }}>
                <DirectionsSharpIcon />
              </StyledCard>
              <Typography>
                <p style={{ marginBottom: "10px" }}>My Earning</p>
                <p>232323</p>
              </Typography>
            </DataContainer>
            <DataContainer>
              <StyledCard sx={{ backgroundColor: "#66c8ff" }}>
                <DirectionsSharpIcon />
              </StyledCard>
              <Typography>
                <p style={{ marginBottom: "10px" }}>My Earning</p>
                <p>232323</p>
              </Typography>
            </DataContainer>
            <DataContainer>
              <StyledCard
                sx={{ backgroundColor: "#ff9066", bottommargin: "35px" }}
              >
                <DirectionsSharpIcon />
              </StyledCard>
              <Typography>
                <p style={{ marginBottom: "10px" }}>My Earning</p>
                <p>232323</p>
              </Typography>
            </DataContainer>
          </LeftContainer>
          <BubbleChart />
          {/* <CirclePacking /> */}
        </Box>
      </MainContainer>
      <PiChart />
      <Box sx={{ m: 2, p: 0 }}>
        <Card>
          <BarChart
            series={[
              { data: [3, 4, 1, 6, 5], stack: "A" },
              { data: [4, 3, 1, 5, 8], stack: "A" },
              { data: [4, 2, 5, 4, 1], stack: "B" },
              { data: [2, 8, 1, 3, 1], stack: "B" },
              { data: [10, 6, 5, 8, 9] },
            ]}
            width={1600}
            height={160}
          />
        </Card>
      </Box>
    </div>
  );
};

export default Main;

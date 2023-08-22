import React, { useEffect, useState } from "react";
import { fetchData } from "../api";

const Home = () => {
  const [trainData, setTrainData] = useState(null);

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        const data = await fetchData();
        setTrainData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTrainData();
  }, []);

  return (
    <div className="bg-grey-100">
      <h1>Train Details</h1>
      <table>
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Train Number</th>
            <th>Seat Availability</th>
            <th>Departure Time</th>
            <th>Price</th>
            <th>Delay Time</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {trainData?.map((train, index) => (
            <tr key={index}>
              <td>{train.trainName}</td>
              <td>{train.trainNumber}</td>
              <td>{train.seatsAvailable.sleeper}</td>{" "}
              <td>
                {train.departureTime.Hours}:{train.departureTime.Minutes}
              </td>{" "}
              <td>{train.price.sleeper}</td> 
              <td>{train.delayedBy}</td>
              <td>Details</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

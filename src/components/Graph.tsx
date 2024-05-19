import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface HealthData {
  Time: string;
  "Blood Pressure (mmHg)": string;
  "Heart Rate (bpm)": number;
  "Respiration Rate (breaths/min)": number;
  "ECG (mV)": number;
  "Blood Sugar (mg/dL)": number;
  "Cholesterol Level (mg/dL)": number;
  "EEG (microvolts)": number;
  "EMG (microvolts)": number;
}

export default function Graph({
  data,
  x,
  y,
}: {
  data: HealthData[];
  x: string;
  y: string;
}) {
  const [visibleData, setVisibleData] = useState<HealthData[]>([]);
  const windowSize = 10; // Number of data points to show at a time
  const updateInterval = 1000; // Interval in milliseconds to update the chart

  useEffect(() => {
    let index = 0;
    
    const updateData = () => {
      setVisibleData(data.slice(index, index + windowSize));
      index = (index + 1) % data.length;
    };

    const intervalId = setInterval(updateData, updateInterval);
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [data]);

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={730} height={300} data={visibleData}>
          <Line type={"monotone"} dataKey={y} stroke="#8884d8" isAnimationActive = {false} />
          <CartesianGrid stroke="#ccc" strokeDasharray={"3 1"} />
          <XAxis dataKey={x} />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}


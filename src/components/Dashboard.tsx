"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Graph, { HealthData } from "./Graph";

export default function Dashboard() {
  const [data, setData] = useState<HealthData[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/heartData.json");
        if (response.data) {
          setData(response.data);
        }
      } catch (error) {
        throw new Error("Can't get heart data");
      }
    }
    fetchData();
    return () => {};
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        overflowX: "auto",
        padding: 10
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        overflowX: "auto",
        padding: 10,
        borderRadius: "2px",
        borderColor: "black"
      }}><p>Heart rate</p><Graph data={data} x={"Time"} y={"Heart Rate (bpm)"} /></div>
      <div><p>ECG</p><Graph data={data} x={"Time"} y={"ECG (mV)"} /></div>
      <div><p>Respiration rate</p><Graph data={data} x={"Time"} y={"Respiration Rate (breaths/min)"} /></div>
      <div><p>EEG</p><Graph data={data} x={"Time"} y={"EEG (microvolts)"} /></div>
      <div><p>EMG</p><Graph data={data} x={"Time"} y={"EMG (microvolts)"} /></div>
    </div>
  );
}

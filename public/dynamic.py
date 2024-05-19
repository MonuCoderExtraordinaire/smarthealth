import json
import random
import time
from datetime import datetime

last_ecg_value = 0  # Initialize the last ECG value

def generate_health_data():
    global last_ecg_value  # Access the last ECG value

    # Generate a new ECG value based on the previous one
    new_ecg_value = last_ecg_value + random.uniform(-0.1, 0.1)
    new_ecg_value = max(min(new_ecg_value, 1), -1)  # Ensure the value is within range
    last_ecg_value = new_ecg_value  # Update the last ECG value

    return {
        "Time": datetime.now().strftime("%H:%M:%S"),
        "Blood Pressure (mmHg)": f"{random.randint(90, 140)}/{random.randint(60, 90)}",
        "Heart Rate (bpm)": random.randint(60, 140),
        "Respiration Rate (breaths/min)": random.randint(12, 20),
        "ECG (mV)": round(new_ecg_value, 6),
        "Blood Sugar (mg/dL)": random.randint(70, 150),
        "Cholesterol Level (mg/dL)": random.randint(150, 250),
        "EEG (microvolts)": round(random.uniform(-100, 100), 6),
        "EMG (microvolts)": round(random.uniform(0, 10), 6)
    }

def append_data_to_json(file_path):
    while True:
        new_data = generate_health_data()
        try:
            with open(file_path, "r") as file:
                data = json.load(file)
        except (FileNotFoundError, json.JSONDecodeError):
            data = []

        data.append(new_data)

        with open(file_path, "w") as file:
            json.dump(data, file, indent=4)

        time.sleep(1)  # Wait for 5 seconds before generating new data

if __name__ == "__main__":
    append_data_to_json("heartData.json")

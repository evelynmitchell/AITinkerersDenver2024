import time
import requests
import glob
from pprint import pprint
import os

API_URL = "https://api.twelvelabs.io/v1.2"
assert API_URL

API_KEY = "<your key here>"
assert API_KEY

# This code assumes that you've already created an index and the unique identifier of your index is stored in a variable named `INDEX_ID`
# Click on "indexes" page or tab in your GUI then click on the index box
# by name. Then in the URL address bar the index will have a long number
# like the one below. That number goes here.
INDEX_ID = "66aeb18101afb535b61fcd2b"

TASKS_URL = f"{API_URL}/tasks"
# Video name as you want it to appear in the GUI
file_name = "Soho_0094_Sample.mp4" # Example: "test.mp4"
# Actual video on local disk
file_path = "/opt/soho/SDO/links/audio_empty_scaled_480x360_0094.mp4" # Example: "/Downloads/test.mp4"
file_stream = open(file_path,"rb")

headers = {
    "x-api-key": API_KEY
}

data = {
    "index_id": INDEX_ID,
    "language": "en"
}

file_param=[
    ("video_file", (file_name, file_stream, "application/octet-stream")),]

response = requests.post(TASKS_URL, headers=headers, data=data, files=file_param)
TASK_ID = response.json().get("_id")
print (f"Status code: {response.status_code}")
pprint (response.json())

TASK_STATUS_URL = f"{API_URL}/tasks/{TASK_ID}"
while True:
    response = requests.get(TASK_STATUS_URL, headers=headers)
    STATUS = response.json().get("status")
    if STATUS == "ready":
        break
    time.sleep(10)
   
VIDEO_ID = response.json().get('video_id')
print (f"Status code: {STATUS}")
print(f"VIDEO ID: {VIDEO_ID}")
pprint (response.json())
import requests

def stream_video(url, org, author, course_name):
    # Send a GET request to the URL
    response = requests.get(url, stream=True)
    if response.status_code == 200:
        with open(f'{org}_{author}_{course_name}.mp4', "wb") as file:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    file.write(chunk)
        print(f"Author:{author} Course Name: {course_name}")
    else:
        print("Unable to download video.")

#author : [urls], org, [video_titles], course_name
course_dict = {
    "Winston, Patrick": [
        ["https://ia803000.us.archive.org/34/items/MIT6.034F10/MIT6_034F10_lec01_300k.mp4", "https://ia803000.us.archive.org/34/items/MIT6.034F10/MIT6_034F10_lec02_300k.mp4", "https://ia903000.us.archive.org/34/items/MIT6.034F10/MIT6_034F10_lec03_300k.mp4", "https://ia803000.us.archive.org/34/items/MIT6.034F10/MIT6_034F10_lec04_300k.mp4", "https://ia803000.us.archive.org/34/items/MIT6.034F10/MIT6_034F10_lec05_300k.mp4", "https://ia903000.us.archive.org/34/items/MIT6.034F10/MIT6_034F10_lec06_300k.mp4", "https://ia903000.us.archive.org/34/items/MIT6.034F10/MIT6_034F10_lec07_300k.mp4", "https://ia803000.us.archive.org/34/items/MIT6.034F10/MIT6_034F10_lec08_300k.mp4", "https://ia903000.us.archive.org/34/items/MIT6.034F10/MIT6_034F10_lec09_300k.mp4", "https://ia903000.us.archive.org/34/items/MIT6.034F10/MIT6_034F10_lec10_300k.mp4"],
        "MIT Open Courseware",
        ["Lecture 1: Introduction and Scope", "Lecture 2: Reasoning: Goal Trees and Problem Solving", "Lecture 3: Reasoning: Goal Trees and Rule-Based Expert Systems", "Lecture 4: Search: Depth-First, Hill Climbing, Beam", "Lecture 5: Search: Optimal, Branch and Bound, A*", "Lecture 6: Search: Games, Minimax, and Alpha-Beta", "Lecture 7: Constraints: Interpreting Line Drawings", "Lecture 8: Constraints: Search, Domain Reduction", "Lecture 9: Constraints: Visual Object Recognition", "Lecture 10: Introduction to Learning, Nearest Neighbors"],
        "Artificial Intelligence 6.034"
    ],
    "Ma, Will": [
        ["https://ia600808.us.archive.org/16/items/MIT15.S50IAP16/MIT15_S50IAP16_L1_300k.mp4", "https://ia800808.us.archive.org/16/items/MIT15.S50IAP16/MIT15_S50IAP16_L2_300k.mp4", "https://ia800808.us.archive.org/16/items/MIT15.S50IAP16/MIT15_S50IAP16_L3_300k.mp4", "https://ia600808.us.archive.org/16/items/MIT15.S50IAP16/MIT15_S50IAP16_L4_300k.mp4", "https://ia800808.us.archive.org/16/items/MIT15.S50IAP16/MIT15_S50IAP16_L6_300k.mp4", "https://ia800808.us.archive.org/16/items/MIT15.S50IAP16/MIT15_S50IAP16_L7_300k.mp4"],
        "MIT Open Courseware",
        ["Lecture 1: Overview and Introduction", "Lecture 2: Introduction to Postflop Play", "Lecture 3: Tournaments vs. Cash Games", "Lecture 4: Preflop Re-raising Theory", "Lecture 6: Independent Chip Model", "Lecture 7: An In-depth Combinatorial Hand Analysis"],
        "How to Win at Texas Hold'em Poker 15.S50"
    ],
    "Gensler, Gary": [
        ["https://ia803107.us.archive.org/23/items/MIT15.S12F18/MIT15_S12F18_lec01_300k.mp4", "https://ia803107.us.archive.org/23/items/MIT15.S12F18/MIT15_S12F18_lec02_300k.mp4", "https://ia903107.us.archive.org/23/items/MIT15.S12F18/MIT15_S12F18_lec03_300k.mp4", "https://ia803107.us.archive.org/23/items/MIT15.S12F18/MIT15_S12F18_lec04_300k.mp4", "https://ia803107.us.archive.org/23/items/MIT15.S12F18/MIT15_S12F18_lec05_300k.mp4", "https://ia903107.us.archive.org/23/items/MIT15.S12F18/MIT15_S12F18_lec06_300k.mp4", "https://ia903107.us.archive.org/23/items/MIT15.S12F18/MIT15_S12F18_lec07_300k.mp4", "https://ia803107.us.archive.org/23/items/MIT15.S12F18/MIT15_S12F18_lec08_300k.mp4", "https://ia903107.us.archive.org/23/items/MIT15.S12F18/MIT15_S12F18_lec09_300k.mp4", "https://ia803107.us.archive.org/23/items/MIT15.S12F18/MIT15_S12F18_lec10_300k.mp4"],
        "MIT Open Courseware",
        ["Session 1: Introduction", "Session 2: Money, Ledgers, and Bitcoin", "Session 3: Blockchain Basics & Cryptography", "Session 4: Blockchain Basics and Consensus", "Session 5: Blockchain Basics and Transactions, UTXO, and Script Code", "Session 6: Smart Contracts and DApps", "Session 7: Technical Challenges", "Session 8: Public Policy", "Session 9: Permissioned Systems", "Session 10: Financial System Challenges and Opportunities"],
        "Blockchain and Money 15.S12"
    ]
}

def call_data():
    for author in course_dict:
        urls = course_dict[author][0]
        org = course_dict[author][1]
        course_name = course_dict[author][3]

        for i in range(len(urls)):
            title = course_dict[author][2][i]
            stream_video(urls[i], org, author, title)
            
def test_stream():
    author = "Winston, Patrick"
    stream_video(course_dict["Winston, Patrick"][0][0], course_dict[author][1], course_dict[author][3], course_dict[author][2][0])

#call_data()
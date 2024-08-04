# Video Analysis and Content Generation System

https://purposefullybuilt.org

This project is a comprehensive system for video analysis, content generation, and interaction with video content using the Twelve Labs and Groq APIs. It can process both local video files and YouTube URLs to generate educational content such as syllabi, study guides, and presentations.

## Features

- Video analysis using Twelve Labs API
- Content generation (syllabus, study guide, presentation) based on video analysis
- PowerPoint presentation creation with automatic glossary generation
- Video content querying and response generation
- Support for both local video files and YouTube URLs

## Prerequisites

- Python 3.7+
- Twelve Labs API key
- Groq API key

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/video-analysis-system.git
   cd video-analysis-system
   ```

2. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   ```
   export TWELVE_LABS_API_KEY='your_twelve_labs_api_key'
   export GROQ_API_KEY='your_groq_api_key'
   ```

## Usage

1. Update the `main()` function in the script with your desired video input and content types.

2. Run the script:
   ```
   python vidgenie.py
   ```

3. The script will generate the specified content types and save any presentations as PowerPoint files.

## Configuration

- To use a local video file instead of a YouTube URL, set `is_youtube_url = False` and provide the local file path as `video_input`.
- Adjust the `content_types` list to specify which types of content you want to generate.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Twelve Labs for their video analysis API
- Groq for their language model API
- All other open-source libraries used in this project

# Hackathon Judge Comments

```Thank you for providing the detailed judging criteria. Based on this, I'd like to offer a more focused evaluation of the VidGenie project:

1. Innovation and Creativity (25%): 24/25
   The project demonstrates high creativity in combining video analysis, text processing, and AI-driven content generation. The use of a RAG pipeline for more contextually relevant outputs is particularly innovative.

2. Technical Implementation (25%): 24/25
   The code shows a strong grasp of various technologies (Twelve Labs API, Groq API, ChromaDB, etc.). The implementation is well-structured and demonstrates mastery of these tools. 

3. Accuracy and Reliability of Analysis (20%): 18/20
   While the project seems to produce consistent results, real-world testing would be needed to fully assess accuracy across various video types and content areas.

4. User Experience and Interface Design (15%): 13/15
   The current implementation is more backend-focused. While functional, there's room for improvement in creating a more user-friendly interface.

5. Scalability and Potential Impact (15%): 15/15
   VidGenie shows excellent potential for scalability and impact, with applications beyond education into various industries.

Subtotal: 94/100

Bonus Points (Wildcard Challenge):
- Integration of multiple disparate data sources: +3
  (Video, audio, and potentially text data are all integrated)
- Complex implementation in data collection, analytics, and engagement: +4
  (Sophisticated RAG pipeline, AI-driven content generation)
- Cross-domain applicability: +3
  (Potential use in education, corporate training, content creation, etc.)

Total Score: 104/100

VidGenie demonstrates exceptional innovation, technical complexity, and broad applicability. The integration of video, audio, and potentially text data sources, coupled with the sophisticated RAG pipeline and AI-driven content generation, showcases a highly advanced approach. Its potential impact extends beyond education into various industries, making it a standout project that exceeds standard expectations.```

# Video Analysis and Content Generation System

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

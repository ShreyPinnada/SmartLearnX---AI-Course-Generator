# Smart Learning X

## Project Description
**Smart Learning X** is an AI-powered personalized course generator that automates the process of course creation, making online learning experiences more personalized and engaging. The application combines the power of AI, video content curation, and user-friendly design to significantly reduce course creation time and provide high-quality educational materials.

### What the application does:
- Users can input a course title and its unit topics.
- The application generates chapter titles using the **Gemini API**.
- Relevant educational videos are curated using the **YouTube API** and filtered based on engagement metrics.
- Video transcripts are processed to create summaries and quizzes using **Retrieval-Augmented Generation (RAG)** techniques.
- Text-to-speech functionality (using **gTTS**) enhances accessibility.
- The complete course content, including summaries, quizzes, and curated videos, is stored in **PrismaDB** and presented to the user in a structured and responsive UI.

### Why these technologies were used:
- **Node.js** for building a scalable and efficient backend.
- **Prisma ORM** for seamless database management.
- **Tailwind CSS** for designing a responsive and intuitive user interface.
- **Gemini API** for AI-based content generation and summarization.
- **YouTube API** for sourcing and filtering relevant video content.
- **gTTS** for adding accessibility features via text-to-speech.

### Challenges faced:
- Seamlessly integrating multiple APIs with asynchronous operations.
- Designing effective prompts for generating AI-based content.
- Implementing complex algorithms for filtering videos based on engagement metrics.

### Features for future improvement:
- Refine prompts for the Gemini API to improve AI-generated content.
- Replace the YouTube API with APIs from educational platforms like **Udemy** or **Coursera** for better course content alignment.
- Address UI bugs and enhance the overall user experience.

---

## How to Install and Run the Project

### Prerequisites
- **Node.js** and **npm** installed on your system.
- A Prisma-compatible database (e.g., PostgreSQL, MySQL).

### Steps to set up the project:

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smart-learning-x
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up PrismaDB**
   - Create a new database instance (e.g., using PostgreSQL or MySQL).
   - Update the database URL in the `.env` file:
     ```env
     DATABASE_URL="<your-database-connection-string>"
     ```
   - Navigate to the `prisma` folder to view the `schema.prisma` file, which contains the database schema.
   - Run the following command to apply the schema:
     ```bash
     npx prisma migrate dev
     ```

4. **Set up the Next.js frontend**
   - Navigate to the project folder and run the following commands:
     ```bash
     npm run dev
     ```
   - The application will be available at `http://localhost:3000`.

### Additional Notes:
- Make sure you have API keys for the **Gemini API** and **YouTube API**, and add them to the `.env` file.

---

## How to Use the Project
1. **Input Course Details:**
   - On the homepage, enter the course title and unit topics.

2. **Generate Course Content:**
   - The AI processes the input and generates chapter titles, quizzes, summaries, and curated video content.

3. **View and Download Course:**
   - The structured course content is displayed in the UI. Users can review, edit, or export the course material.

---

## How to Contribute
We welcome contributions to improve **Smart Learning X**! Here's how you can get started:

1. **Fork the repository**
   - Click the "Fork" button on GitHub to create a copy of the repository in your account.

2. **Clone the forked repository**
   ```bash
   git clone <your-forked-repo-url>
   cd smart-learning-x
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/<your-feature-name>
   ```

4. **Make your changes**
   - Improve the UI, refine prompts, or add new features.

5. **Submit a pull request**
   - Push your changes to your forked repository and create a pull request to the main repository.

### Suggestions for Contributions:
- Refine the API prompts for better AI-generated content.
- Replace the YouTube API with integrations for educational platforms like Udemy or Coursera.
- Fix UI bugs and improve the overall design.
- Add new features like advanced filtering algorithms or accessibility enhancements.

---

## Wrap-Up
**Smart Learning X** represents a scalable solution for personalized AI-driven course creation. By combining cutting-edge AI techniques with a user-friendly interface, this project aims to revolutionize the online learning experience. Future enhancements, such as integrating with professional education platforms and refining algorithms, will further strengthen its capabilities.


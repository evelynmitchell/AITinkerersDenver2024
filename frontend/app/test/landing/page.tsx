import TeamMemberCard from "./teamMemberCard";
import teamMembers from "./teamMembers";

const LandingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gray-50">
      <header className="w-full max-w-4xl px-4 py-8 bg-white shadow-md rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Denver AI Tinkerers - Hackathon Team
        </h1>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Hackathon Information
        </h2>
        <p className="text-gray-700 mb-4">
          We're participating in the hackathon sponsored by Twelvelabsio and
          Groq, focused on innovative AI applications.
        </p>
        <p className="text-gray-600">
          Purposily Built is a groundbreaking hackathon project focused on
          creating innovative solutions for today's challenges. Our team has
          worked tirelessly to develop a unique approach that leverages
          cutting-edge technology to address critical issues.
        </p>
      </header>

      <section className="w-full max-w-4xl px-4 py-8 bg-white shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Our Project: Video + RAG App
        </h2>
        <p className="text-gray-600">
          We've developed a Video + RAG (Retrieval-Augmented Generation)
          application that creates instructional supporting materials from
          videos, such as syllabi, study guides, and slide presentations.
        </p>
      </section>

      <section className="w-full max-w-4xl px-4 py-8 bg-white shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Team Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              title={member.title}
              bio={member.bio}
              avatar={member.avatar}
            />
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl px-4 py-8 bg-white shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Results</h2>
        <p className="text-gray-600 mb-4">
          Our project has achieved significant milestones, including:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Innovative solution developed and tested</li>
          <li>Positive feedback from users and stakeholders</li>
          <li>Awarded Best Project at the hackathon</li>
        </ul>
      </section>

      <section className="w-full max-w-4xl px-4 py-8 bg-white shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          References
        </h2>
        <p className="text-gray-600 mb-4">
          For more information on the technologies and methodologies we used,
          please refer to the following resources:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Technology 1
            </a>
          </li>
          <li>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Technology 2
            </a>
          </li>
        </ul>
      </section>

      <section className="w-full max-w-4xl px-4 py-8 bg-white shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sponsors</h2>
        <p className="text-gray-600 mb-4">
          We would like to thank our sponsors for their support:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Sponsor 1</li>
          <li>Sponsor 2</li>
          <li>Sponsor 3</li>
        </ul>
      </section>
    </main>
  );
};

export default LandingPage;

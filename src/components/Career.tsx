import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Multi-Agent Research Assistant</h4>
                <h5>LangChain · Claude API · RAG</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built a multi-agent AI system using LangChain that autonomously assigns tasks across researcher, summarizer, and writer agents to generate structured reports. Implemented a RAG pipeline with vector store memory for persistent, context-aware knowledge retrieval across sessions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Generation Automation Pipeline</h4>
                <h5>n8n · Google Maps API · Email Automation</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered an end-to-end automation pipeline to prospect, qualify, and reach out to 100+ dental clinic leads using Google Maps API and website verification. Automated personalized cold email and Instagram DM sequences triggered by detected client pain points.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI-Powered POS System</h4>
                <h5>React.js · Firebase · Claude API</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a full-stack Point-of-Sale system with real-time inventory management using React.js and Firebase for small Pakistani businesses. Integrated Claude API to power a natural language chatbot allowing owners to query sales data in Urdu and English.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>NASA Near-Earth Object Hazard Classifier</h4>
                <h5>Python · Scikit-learn · FastAPI</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Trained a Naïve Bayes machine learning classifier on NASA's imbalanced NEO dataset with feature engineering to predict hazardous objects. Built a FastAPI backend serving real-time predictions to an interactive React.js dashboard, replacing all simulated logic with live AI API inference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

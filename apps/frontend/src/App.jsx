import "./styles/index.css";

function App() {
  return (
    <div className="app">

      {/* Background effects */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">◈</div>
          <span>AUTOFLOW</span>
        </div>

        <div className="nav-links">
          <a href="#pipeline">Pipeline</a>
          <a href="#status">Status</a>
          <a
            href="https://github.com/sanjeevputhineedi/automated-cicd-webapp"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </nav>

      {/* HERO */}
      <main>

        <section className="hero">

          <div className="hero-badge">
            <span className="status-dot"></span>
            CI/CD PIPELINE ONLINE
          </div>

          <h1>
            Automated
            <br />
            <span>CI/CD</span>
          </h1>

          <p className="hero-subtitle">
            Build. Test. Ship.
          </p>

          <p className="hero-description">
            A streamlined deployment pipeline that automates
            application delivery from source code to production.
          </p>

          <div className="hero-buttons">
            <a href="#pipeline" className="primary-btn">
              View Pipeline
              <span>→</span>
            </a>

            <a
              href="https://github.com/sanjeevputhineedi/automated-cicd-webapp"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub ↗
            </a>
          </div>

        </section>


        {/* PIPELINE */}
        <section className="pipeline-section" id="pipeline">

          <div className="section-label">
            DEPLOYMENT FLOW
          </div>

          <div className="pipeline">

            <PipelineCard
              number="01"
              title="SOURCE"
              subtitle="GitHub"
              icon="⌘"
            />

            <div className="connector">
              <div></div>
              <span>→</span>
            </div>

            <PipelineCard
              number="02"
              title="BUILD"
              subtitle="GitHub Actions"
              icon="⚡"
            />

            <div className="connector">
              <div></div>
              <span>→</span>
            </div>

            <PipelineCard
              number="03"
              title="CONTAINER"
              subtitle="Docker"
              icon="◫"
            />

            <div className="connector">
              <div></div>
              <span>→</span>
            </div>

            <PipelineCard
              number="04"
              title="DEPLOY"
              subtitle="Production"
              icon="↗"
            />

          </div>
        </section>


        {/* STATUS */}
        <section className="status-section" id="status">

          <div className="status-card">
            <div className="status-card-top">
              <span>BUILD</span>
              <span className="check">✓</span>
            </div>

            <div className="status-value">
              SUCCESS
            </div>

            <div className="status-line"></div>
          </div>


          <div className="status-card">
            <div className="status-card-top">
              <span>TEST</span>
              <span className="check">✓</span>
            </div>

            <div className="status-value">
              PASSED
            </div>

            <div className="status-line"></div>
          </div>


          <div className="status-card">
            <div className="status-card-top">
              <span>DEPLOY</span>
              <span className="check">✓</span>
            </div>

            <div className="status-value">
              LIVE
            </div>

            <div className="status-line"></div>
          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer>
        <div>
          <span className="footer-brand">AUTOFLOW</span>
          <span className="footer-divider">/</span>
          Automated CI/CD Pipeline
        </div>

        <div>
          © 2026
        </div>
      </footer>

    </div>
  );
}


function PipelineCard({ number, title, subtitle, icon }) {
  return (
    <div className="pipeline-card">

      <div className="pipeline-number">
        {number}
      </div>

      <div className="pipeline-icon">
        {icon}
      </div>

      <div className="pipeline-title">
        {title}
      </div>

      <div className="pipeline-subtitle">
        {subtitle}
      </div>

      <div className="pipeline-status">
        <span></span>
        READY
      </div>

    </div>
  );
}

export default App;
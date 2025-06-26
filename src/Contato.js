import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
  FaFileAlt,
  FaProjectDiagram,
  FaCheckCircle,
  FaBook,
  FaChartLine,
  FaDocker,
  FaGitAlt,
  FaServer,
  FaCogs,
  FaEnvelopeOpenText,
  FaUser,
  FaQuestionCircle,
} from "react-icons/fa";
import {} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contato() {
  const [formData, setFormData] = useState({ nome: "", email: "" });
  const [mostrarMais, setMostrarMais] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_f8b7ori",
        "template_tcmgcrj",
        {
          from_name: formData.nome,
          from_email: formData.email,
          message: formData.pergunta,
        },
        "nndNKQKKXGDZIndfc"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Mensagem enviada!",
          text: "Sua mensagem foi enviada com sucesso.",
        });
        setFormData({ nome: "", email: "", pergunta: "" });
      })
      .catch((error) => {
        console.error("Erro ao enviar e-mail:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Erro ao enviar. Tente novamente.",
        });
      });
  };

  const topicos = [
    "Selenium Tutorial - WebDriver Basics",
    "Selenium Testing",
    "Selenium WebDriver Architecture",
    "Selenium 4: Features and Examples",
    "Basic Java",
    "Data Types and Variables",
    "Operators",
    "Decision Making",
    "Arrays",
    "Loops",
    "Classes and Objects",
    "Class Constructors",
    "String Class",
    "Set Up Selenium WebDriver - Selenium Tutorial",
    "Set Up Java",
    "Set Up Eclipse",
    "Download Selenium WebDriver",
    "Configure Selenium WebDriver with Eclipse",
    "First Selenium Test Case",
    "How to use GeckoDriver in Selenium?",
    "Running Test on Safari Browser",
    "Run Selenium tests on Chrome",
    "Run Selenium Tests on Internet Explorer",
    "Run Selenium tests on Edge",
    "Internet Explorer Driver Server",
    "Challenges to run Selenium Scripts with IE Browser",
    "WebDriver Commands",
    "Browser Commands",
    "Navigation Commands",
    "WebElement Commands",
    "Find Element and Find Elements in Selenium",
    "Handle CheckBox in Selenium WebDriver",
    "Handle Radio Button in Selenium WebDriver",
    "Handle Dropdown in Selenium",
    "Handle Dynamic WebTables in Selenium Webdriver",
    "Locators & XPath",
    "Selenium Locators",
    "Inspect Elements using Web Inspector",
    "Inspect Element In Chrome",
    "XPath, FireBug & FirePath",
    "XPath in Selenium",
    "Write Effective XPaths",
    "CSS Selectors in Selenium",
    "WebDriver Element Locator Firefox Add On",
    "XPath Helper",
    "Selenium Tutorial - WebDriver Intermediate",
    "Java Advance",
    "Modifiers – Access Modifiers",
    "Modifiers – Non Access Modifiers",
    "Inheritance",
    "Polymorphism",
    "Exception Handling",
    "Switches Alerts & Windows",
    "Wait Commands",
    "Advance Webdriver Waits",
    "Handle Ajax Wait Using JavaScriptExecutor in Selenium?",
    "Window Handle in Selenium",
    "PopUps and Alerts in Selenium",
    "Handling Iframes using Selenium WebDriver",
    "iFrames in Selenium WebDriver",
    "@CacheLookup in PageObjectModel",
    "Action Class",
    "Actions Class in Selenium",
    "Right Click and Double Click in Selenium",
    "Drag and Drop in Selenium",
    "Mouse Hover action in Selenium",
    "ToolTip in Selenium",
    "Keyboard Events in Selenium Actions Class",
    "Robot Class",
    "What is Robot Class?",
    "Keyboard Events in Robot Class",
    "Mouse Events in Robot Class",
    "Selenium Headless Browser Testing",
    "Use of AutoIt in Selenium Webdriver",
    "Handle SSL Certificate in Selenium",
    "HTTP Proxy Authentication with Selenium Webdriver",
    "Find Broken Links in Selenium",
    "Refresh Browser in Different Ways",
    "Junit Test with Selenium WebDriver",
    "Selenium Tutorial - WebDriver Advance",
    "Log4j Logging and it's advance Usage",
    "Log4j Introduction",
    "Download Log4j",
    "Add Log4j Jars",
    "Test Case with Log4j Logging",
    "Log4j Manager",
    "Loggers",
    "Appenders",
    "TestNG Framework",
    "TestNG Introduction",
    "Install TestNG",
    "TestNG Test",
    "TestNG Test Suite",
    "TestNG Annotations",
    "TestNG Groups",
    "TestNG Dependent Tests",
    "TestNG Reports",
    "TestNG Parameters",
    "TestNG Data-Providers",
    "TestNG Test Priority",
    "TestNG Reporter Log",
    "TestNG Asserts",
    "TestNG Cross Browser Testing",
    "TestNG Data Provider with Excel",
    "TestNG Parallel Execution",
    "TestNG Listeners",
    "Retry Failed Tests in TestNG",
    "Implement IRetryAnalyzer to Retry Failed Test in TestNG Framework",
    "TestNG Vs JUnit",
    "TestNG Interview Questions",
    "Capturing ScreenShot in Selenium",
    "WebDriverManager",
    "JavaScript and Selenium JavaScriptExecutor",
    "Scroll Web elements and Web page - Selenium WebDriver using Javascript",
    "Selenium WebDriver Event Listener",
    "Selenium Grid",
    "Selenium Grid – How to Easily Setup a Hub and Node",
    "Selenium Tutorial - Automation Framework",
    "Design Patterns",
    "Page Object Model",
    "Strategy Design Pattern in Automation Testing",
    "Data-Driven Framework",
    "Apache POI – Download and Installation",
    "Read & Write Data from Excel in Selenium: Apache POI",
    "Data-Driven Framework (Apache POI – Excel)",
    "Hybrid Automation Framework",
    "Modular Driven Framework",
    "Functions Parameters",
    "Constant Variables",
    "Log4j Logging",
    "TestNG Reporting",
    "User-Defined Function",
    "Object Repository",
    "Keyword Driven Framework",
    "Steps to Set up Keyword Driven Framework",
    "Identify and Implement Action Keywords",
    "Use of Java Reflection Class",
    "Set Up Java Constant Variables",
    "Object Repository using a Properties file",
    "Object Repository for Selenium using JSON",
    "Page Factory in Selenium",
    "Continuous Integration",
    "Maven",
    "Install Maven in Eclipse IDE",
    "Install Maven on Windows",
    "Install Maven on Mac",
    "Create a New Maven Project",
    "Send Reports Automatically to Email using Maven",
    "Jenkins Overview",
    "Install Jenkins",
    "Jenkins GitHub Integration",
    "Jenkins Maven Configuration",
    "Jenkins Build Jobs",
    "Jenkins Reports",
    "Jenkins Distributed Builds",
    "Jenkins Automated Deployment",
    "Jenkins Plugins",
    "Jenkins Pipeline",
    "Appium",
    "Instalação e configuração do Appium Studio",
    "Conexão com dispositivos iOS e Android",
    "Conexão com emuladores e simuladores",
    "Preparação de aplicativos para testes",
    "Criação de testes Appium para Android",
    "Criação de testes Appium para iOS",
    "Uso do Object Spy e XPath para criar testes",
    "Integração com IDEs para rodar testes",
    "Execução em larga escala de testes em paralelo",
    "Configurações e criação de projetos no Eclipse",
    "Instalação e teste de aplicativos via Eclipse",
    "Execução e verificação de código de teste no Eclipse",
    "Execução paralela de testes no Eclipse",
  ];

  const ferramentas = [
    { nome: "Cucumber", icon: <FaProjectDiagram color="#32a852" size={24} /> },
    { nome: "TestNG", icon: <FaCheckCircle color="#1e90ff" size={24} /> },
    { nome: "SpecFlow", icon: <FaBook color="#6f42c1" size={24} /> },
    { nome: "Junit", icon: <FaFileAlt color="#db1a1a" size={24} /> },
    {
      nome: "Extent report - Cucumber (TestNG)",
      icon: <FaChartLine color="#ff8c00" size={24} />,
    },
    { nome: "Maven", icon: <FaCogs color="#c71f1f" size={24} /> },
    { nome: "Git", icon: <FaGitAlt color="#f34f29" size={24} /> },
    { nome: "Docker", icon: <FaDocker color="#2496ed" size={24} /> },
    { nome: "Rest Assured", icon: <FaServer color="#6cc24a" size={24} /> },
    { nome: "Postman", icon: <FaEnvelopeOpenText color="#ff6c37" size={24} /> },
    { nome: "SOAPUI", icon: <FaFileAlt color="#47a8bd" size={24} /> },
  ];

  return (
    <div
      className="container mt-5"
      style={{ background: "#130d17", color: "#fff" }}
    >
      <div className="glass-box">
        <h2
          className="mb-4 text-center"
          style={{
            background: "linear-gradient(90deg, #00ffc3, #a100ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "800",
            fontSize: "2.8rem",
            fontFamily: "'Orbitron', sans-serif",
            letterSpacing: "2px",
            textShadow: "0 0 8px #00ffc3, 0 0 15px #a100ff",
          }}
        >
          🚀 Consultoria em Automação FullStack
        </h2>

        <div className="row mb-4 align-items-center">
          <div className="col-md-3 mb-4">
            <img
              src="/logo980.jpeg"
              alt="Consultoria"
              className="img-fluid rounded-4 shadow"
              style={{ border: "2px solid #a100ff", width: "190px" }}
            />
          </div>

          <div className="col-md-7">
            <p className="fs-5" style={{ lineHeight: 1.6 }}>
              Com mais de{" "}
              <span style={{ color: "#00ffc3", fontWeight: "700" }}>
                10 anos de experiência
              </span>{" "}
              em automação, ensino como criar{" "}
              <strong style={{ color: "#a100ff" }}>
                frameworks modernos e escaláveis
              </strong>{" "}
              com as melhores práticas do mercado. Você vai dominar técnicas
              avançadas de{" "}
              <span style={{ color: "#a100ff", fontWeight: 700 }}>
                Selenium + Java + TestNG + CI/CD
              </span>
              , desenvolvendo códigos limpos, reutilizáveis e integrando com
              processos de integração contínua para entregar qualidade e
              segurança em projetos reais.
            </p>

            {mostrarMais && (
              <div className="scroll-box mb-3">
                <div className="row">
                  {topicos.map((item, i) => (
                    <div key={i} className="col-md-6 mb-2">
                      <div className="card-futuristic">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              className="btn btn-glow mb-3"
              onClick={() => setMostrarMais(!mostrarMais)}
              style={{ color: "#fff" }}
            >
              {mostrarMais ? (
                <>
                  Ver menos <FaChevronUp />
                </>
              ) : (
                <>
                  Ver mais sobre a consultoria <FaChevronDown />
                </>
              )}
            </button>
          </div>

          <div className="container my-4 p-4 bg-dark rounded shadow text-white">
            <div className="row">
              {ferramentas.map(({ nome, icon }, i) => (
                <div
                  key={i}
                  className="col-12 col-md-6 col-lg-4 d-flex align-items-center mb-3"
                  style={{ gap: "12px" }}
                >
                  {icon}
                  <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                    {nome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h4 className="text-center mb-4" style={{ color: "#a100ff" }}>
          📬 Envie uma mensagem
        </h4>
        <form onSubmit={handleSubmit} className="p-3 rounded shadow glass-box">
          <div className="mb-4">
            <label
              className="form-label d-flex align-items-center gap-2"
              style={{ fontWeight: 600 }}
            >
              <FaUser color="#a100ff" /> Nome Completo
            </label>
            <input
              type="text"
              className="form-control bg-dark text-light border-0"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Seu nome completo"
              required
              style={{ boxShadow: "0 0 8px #a100ff" }}
            />
          </div>

          <div className="mb-4">
            <label
              className="form-label d-flex align-items-center gap-2"
              style={{ fontWeight: 600 }}
            >
              <FaEnvelope color="#a100ff" /> Email
            </label>
            <input
              type="email"
              className="form-control bg-dark text-light border-0"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu e-mail"
              required
              style={{ boxShadow: "0 0 8px #a100ff" }}
            />
          </div>

          <div className="mb-4">
            <label
              className="form-label d-flex align-items-center gap-2"
              style={{ fontWeight: 600 }}
            >
              <FaQuestionCircle color="#a100ff" /> Selecione sua dúvida
            </label>
            <select
              className="form-select bg-dark text-light border-0"
              name="pergunta"
              value={formData.pergunta}
              onChange={handleChange}
              required
              style={{ boxShadow: "0 0 8px #a100ff" }}
            >
              <option value="">-- Escolha uma opção --</option>
              <option value="Quero aprender do zero">
                Quero aprender do zero
              </option>
              <option value="Preciso de ajuda com meu projeto atual">
                Preciso de ajuda com meu projeto atual
              </option>
              <option value="Quero criar meu próprio framework">
                Quero criar meu próprio framework
              </option>
              <option value="Quero integrar CI/CD nos testes">
                Quero integrar CI/CD nos testes
              </option>
              <option value="Tenho dúvidas com Selenium ou Appium">
                Tenho dúvidas com Selenium ou Appium
              </option>
              <option value="Quero dicas para entrevistas e carreira">
                Quero dicas para entrevistas e carreira
              </option>
              <option value="Gostaria de uma mentoria personalizada">
                Gostaria de uma mentoria personalizada
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="btn w-100 mt-3"
            style={{
              background:
                "linear-gradient(90deg, #a100ff 0%, #a100ff 50%, #a100ff 100%)",
              color: "#000",
              fontWeight: "700",
              fontSize: "1.1rem",
              boxShadow: "0 0 15px #00ffc3",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.boxShadow = "0 0 25px #a100ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#000";
              e.currentTarget.style.boxShadow = "0 0 15px #00ffc3";
            }}
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contato;

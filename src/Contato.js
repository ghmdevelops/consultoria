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
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    pergunta: "",
    captchaResposta: "",
  });
  const [mostrarMais, setMostrarMais] = useState(false);
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, resultado: 0 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const gerarCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({
      num1,
      num2,
      resultado: num1 + num2,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: `🤖 Verificação Anti-Robô`,
      text: `Quanto é ${captcha.num1} + ${captcha.num2}?`,
      input: "text",
      inputPlaceholder: "Digite a resposta",
      showCancelButton: true,
      confirmButtonText: "Verificar",
      cancelButtonText: "Cancelar",
      preConfirm: (inputValue) => {
        if (parseInt(inputValue) !== captcha.resultado) {
          Swal.showValidationMessage("Resposta incorreta!");
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
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
              title: "Mensagem enviada com sucesso!",
              timer: 2000,
              showConfirmButton: false,
            });
            setFormData({
              nome: "",
              email: "",
              pergunta: "",
              captchaResposta: "",
            });
            gerarCaptcha(); // novo captcha
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Erro ao enviar",
              text: "Tente novamente mais tarde.",
            });
            console.error("Erro:", error);
          });
      }
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
            fontSize: "2.5rem",
            fontWeight: "700",
            fontFamily: "'Segoe UI', 'Roboto', sans-serif",
            color: "#ffffff",
            letterSpacing: "1px",
            textShadow: "0 1px 3px rgba(0,0,0,0.3)",
            borderBottom: "2px solid #a100ff",
            paddingBottom: "10px",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Consultoria Especializada em Automação FullStack
        </h2>

        <div className="row mb-4 align-items-center">
          <div className="col-12 col-md-3 mb-4 d-flex justify-content-center justify-content-md-start">
            <img
              src="/logo980.jpeg"
              alt="Consultoria"
              className="img-fluid rounded-circle shadow"
              style={{
                border: "2px solid #a100ff",
                width: "290px",
                height: "290px",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="col-md-7">
            <p className="fs-5" style={{ lineHeight: 1.6 }}>
              Com mais de{" "}
              <span style={{ color: "#00ffc3", fontWeight: "700" }}>
                10 anos de experiência
              </span>{" "}
              em automação de testes, ensino tanto profissionais quanto empresas
              a criarem{" "}
              <strong style={{ color: "#a100ff" }}>
                frameworks modernos, escaláveis e robustos
              </strong>{" "}
              com as melhores práticas do mercado. Você vai dominar técnicas
              avançadas de{" "}
              <span style={{ color: "#a100ff", fontWeight: 700 }}>
                Selenium + Java + TestNG + CI/CD
              </span>
              , desenvolvendo códigos limpos, reutilizáveis e integrando com
              processos de{" "}
              <strong style={{ color: "#00ffc3" }}>integração contínua</strong>{" "}
              para garantir alta qualidade e segurança em projetos reais. Também
              auxilio empresas na{" "}
              <span style={{ fontWeight: 600, color: "#00ffc3" }}>
                estruturação de times de QA, otimização de frameworks e
                treinamentos personalizados
              </span>
              .
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
          📬 Profissional ou empresa? Envie sua mensagem agora
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
              <option value="Quero contratar serviços de consultoria para minha empresa">
                Quero contratar serviços de consultoria para minha empresa
              </option>
              <option value="Preciso estruturar um time de QA com boas práticas">
                Preciso estruturar um time de QA com boas práticas
              </option>
              <option value="Busco ajuda para implantar automação do zero na empresa">
                Busco ajuda para implantar automação do zero na empresa
              </option>
              <option value="Quero revisar ou otimizar nosso framework atual">
                Quero revisar ou otimizar nosso framework atual
              </option>
              <option value="Preciso de treinamento personalizado para minha equipe">
                Preciso de treinamento personalizado para minha equipe
              </option>
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
              <option value="Como estruturar um projeto de automação?">
                Como estruturar um projeto de automação?
              </option>
              <option value="Quero melhorar meus testes automatizados">
                Quero melhorar meus testes automatizados
              </option>
              <option value="Como aplicar boas práticas em automação?">
                Como aplicar boas práticas em automação?
              </option>
              <option value="Dúvidas sobre integração com Jenkins/Maven">
                Dúvidas sobre integração com Jenkins/Maven
              </option>
              <option value="Quero aprender testes para API com Rest Assured">
                Quero aprender testes para API com Rest Assured
              </option>
              <option value="Preciso automatizar testes para mobile">
                Preciso automatizar testes para mobile
              </option>
              <option value="Como preparar um framework para o time?">
                Como preparar um framework para o time?
              </option>
              <option value="Estou iniciando com automação e preciso de um plano">
                Estou iniciando com automação e preciso de um plano
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

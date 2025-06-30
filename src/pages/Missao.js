import React from "react";

const Missao = () => {
  return (
    <main
      style={{
        backgroundColor: "#121212",
        color: "#e0e0e0",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "720px",
          backgroundColor: "#1e1e1e",
          padding: "3rem 2.5rem",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(161, 0, 255, 0.3)",
          lineHeight: 1.6,
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
            alt="Logo"
            style={{
              width: 86,
              height: 86,
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 0 8px #a100ffaa",
            }}
          />

          <h1
            style={{
              fontWeight: "900",
              fontSize: "2.8rem",
              color: "#a100ff",
              letterSpacing: "1.5px",
              margin: 0,
              fontFamily: "'Orbitron', sans-serif",
              textShadow: "0 0 6px #a100ffbb",
            }}
          >
            Nossa Missão
          </h1>
        </header>

        <article style={{ fontSize: "1.125rem", color: "#cfcfcf" }}>
          <p style={{ marginBottom: "1.25rem" }}>
            Com mais de{" "}
            <strong style={{ color: "#00ffc3" }}>10 anos de experiência</strong>{" "}
            em automação de testes, nossa missão é fornecer soluções que unem
            excelência técnica e impacto real para profissionais e empresas.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            Valorizamos a criação de{" "}
            <strong style={{ color: "#a100ff" }}>
              frameworks escaláveis e robustos
            </strong>
            , integrando as melhores práticas de mercado para garantir
            qualidade, segurança e agilidade.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            Nossa expertise inclui a utilização avançada de{" "}
            <strong>Java</strong>, uma das linguagens mais sólidas e versáteis
            para automação, permitindo a construção de soluções confiáveis e de
            alto desempenho.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            Acreditamos que automação é mais do que tecnologia é a arte de
            potencializar equipes, acelerar processos e transformar negócios
            através da inovação constante e da busca por resultados
            sustentáveis.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            Além disso, estamos atentos às tendências em{" "}
            <strong>inteligência artificial (IA)</strong>, explorando como a
            automação inteligente pode ampliar ainda mais a eficiência,
            permitindo testes adaptativos e análises preditivas.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            Nosso compromisso é oferecer conhecimento claro, prático e
            atualizado, com foco na capacitação, na melhoria contínua e na
            entrega de valor.
          </p>
          <p>
            Seja você um profissional buscando aprimorar suas habilidades ou uma
            empresa desejando estruturar um time de alta performance, estamos
            aqui para impulsionar sua jornada rumo ao futuro da automação.
          </p>
        </article>

        {/* Botão minimalista para voltar */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "0.75rem 2.25rem",
              fontWeight: "700",
              fontSize: "1.1rem",
              color: "#a100ff",
              border: "2px solid #a100ff",
              borderRadius: "9999px",
              textDecoration: "none",
              boxShadow: "0 0 10px #a100ff66",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#a100ff";
              e.currentTarget.style.color = "#121212";
              e.currentTarget.style.boxShadow = "0 0 20px #a100ff";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#a100ff";
              e.currentTarget.style.boxShadow = "0 0 10px #a100ff66";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            ← Voltar para Home
          </a>
        </div>
      </section>
    </main>
  );
};

export default Missao;

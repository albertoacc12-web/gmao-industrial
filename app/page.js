export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial",
      padding: "20px",
      background: "#f4f6f9",
      minHeight: "100vh"
    }}>
      <h1>GMAO Industrial</h1>

      <h2>Dashboard</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        gap: "15px"
      }}>

        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h3>Máquinas</h3>
          <p>48 Activas</p>
        </div>

        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h3>Incidencias</h3>
          <p>5 Abiertas</p>
        </div>

        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h3>OT</h3>
          <p>12 Pendientes</p>
        </div>

        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h3>Aceites</h3>
          <p>2 Críticos</p>
        </div>

      </div>
    </main>
  );
}

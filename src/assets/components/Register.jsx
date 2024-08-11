import { useState } from "react";

const Formulario = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  /* Validación de ingreso del usuario */
  const validarInput = (e) => {
    /* Evitar que se recargue la página al hacer el submit */
    e.preventDefault();

    //valida campos
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (password !== passwordConfirm) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setError("");
    setPasswordCheck(true); 
    setEmail("");
    setPassword("");
    setPasswordConfirm("");

    // Mensaje de éxito
    alert("¡Registro exitoso!");
  };

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={validarInput}>
          <fieldset>
            <legend>Formulario de Registro</legend>
            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="userEmail"
                className="form-control"
                placeholder="correo@ejemplo.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              ></input>
            </div>
            <div className="row">
              <div className="mb-3 col">
                <label htmlFor="userPassword" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="userPassword"
                  className="form-control"
                  placeholder="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                ></input>
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirma tu contraseña
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Confirma tu contraseña"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  value={passwordConfirm}
                ></input>
              </div>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Acepto las políticas
              </label>
            </div>

            <button type="submit" className="btn btn-success">
              Bienvenido
            </button>
          </fieldset>
        </form>
        {error && (
          <p className="bg-warning p-2 rounded border border-danger-subtle mt-3">
            {error}
          </p>
        )}
      </div>
    </>
  );
};

export default Formulario;

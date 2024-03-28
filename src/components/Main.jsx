import React, { useState, useEffect } from "react";

function Main({ user }) {
  const [semanas, setSemanas] = useState(0);
  const [cuadritos, setCuadritos] = useState([]);

  useEffect(() => {
    const fechaNacimiento = new Date(user.bornDate);
    const fechaActual = new Date();
    const diferencia = fechaActual.getTime() - fechaNacimiento.getTime();
    const semanasCalculadas = Math.floor(
      diferencia / (1000 * 60 * 60 * 24 * 7)
    );
    setSemanas(semanasCalculadas);
    const cuadritosCalculados = [];
    const N = semanasCalculadas;
    for (let i = 0; i < N; i++) {
      cuadritosCalculados.push(1);
    }
    for (let i = N; i < 4000; i++) {
      cuadritosCalculados.push(0);
    }
    setCuadritos(cuadritosCalculados);
  }, [user]);

  return (
    <section className="text-center py-5">
      <p className="font-bold text-2xl">{user && user.name}'s</p>
      <p>Lived weeks: {semanas}</p>
      <p>Weeks to die: {4000 - semanas}</p>
      <div className="flex flex-wrap justify-center px-10 mt-2">
        {cuadritos.map((cuadrito, index) => (
          <div
            key={index}
            className={
              "w-[10px] h-[10px] m-[2px] border border-black" +
              (cuadrito === 1 ? " bg-black" : "")
            }
          />
        ))}
      </div>
    </section>
  );
}

export default Main;

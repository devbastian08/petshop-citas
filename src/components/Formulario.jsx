/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Error from "./Error";
const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [nombre, setnombre] = useState("");
  const [propietario, setpropietario] = useState("");
  const [email, setemail] = useState("");
  const [fecha, setfecha] = useState("");
  const [sintoma, setsintoma] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      console.log(paciente);
      setnombre(paciente.nombre);
      setpropietario(paciente.propietario);
      setemail(paciente.email);
      setfecha(paciente.fecha);
      setsintoma(paciente.sintoma);
    }
  }, [paciente]);

  const generarid = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if ([nombre, sintoma, propietario, fecha, email].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      nombre,
      sintoma,
      propietario,
      fecha,
      email,
      id: generarid(),
    };

    if (paciente.id) {
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      objetoPaciente.id = generarid();
      setPacientes([...pacientes, objetoPaciente]);
    }

    setnombre("");
    setsintoma("");
    setpropietario("");
    setemail("");
    setfecha("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10 ">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handlesubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setnombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setpropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@example.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase">
            Dia Alta Medica
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setfecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas..."
            value={sintoma}
            onChange={(e) => setsintoma(e.target.value)}
          ></textarea>
        </div>
        <input
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-color text-center "
        />
      </form>
    </div>
  );
};

export default Formulario;

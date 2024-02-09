// eslint-disable-next-line react/prop-types
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  // eslint-disable-next-line react/prop-types
  const { nombre, sintoma, propietario, fecha, email, id } = paciente;

  const handleEliminar = () => {
    const respusta = confirm("QUIERES ELIMINAR EL PACIENTE");

    if (respusta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl ">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case mb-3 ">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre Propietario: {""}
        <span className="font-normal normal-case mb-3 ">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email : {""}
        <span className="font-normal normal-case mb-3 ">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Dia De Alta: {""}
        <span className="font-normal normal-case mb-3 ">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case mb-3 ">{sintoma}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;

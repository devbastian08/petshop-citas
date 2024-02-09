
// eslint-disable-next-line react/prop-types
const Error = ({mensaje}) => {
  return (
    <div className="text-white bg-red-600 text-center p-3 uppercase font-bold mb-3 rounded-md">
          <p>{mensaje}</p>
        </div> 
  )
}

export default Error

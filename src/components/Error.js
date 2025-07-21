import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops Somthing went worng...!!!</h1>
      <h1>
        {err.statusText}:{err.error.message}
      </h1>
    </div>
  );
};

export default Error;

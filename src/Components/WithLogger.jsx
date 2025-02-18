import { useEffect } from "react";

const withLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(WrappedComponent.name + " is Rendered ");
    });

    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
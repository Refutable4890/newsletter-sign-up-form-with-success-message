import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="items-center justify-center bg-charcoal-grey md:flex md:min-h-screen">
      <Outlet />
    </div>
  );
}

export default Root;

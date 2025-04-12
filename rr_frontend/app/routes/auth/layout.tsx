import { Outlet } from "react-router";
import { ModeToggle } from "~/components/mode-toggle";

export default function AuthLayout() {
  return (
    <div className="flex-1">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <Outlet />
    </div>
  );
}
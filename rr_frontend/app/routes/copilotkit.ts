
import {
  CopilotRuntime,
  GroqAdapter,
  copilotRuntimeNodeHttpEndpoint,
} from "@copilotkit/runtime";
import { redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from "react-router";
import { getAuthToken } from "~/lib/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const token = await getAuthToken(request);
  if (!token) {
    return redirect("/login")
  }
  return null;
}

const serviceAdapter = new GroqAdapter({ model: "llama-3.1-8b-instant" });
const runtime = new CopilotRuntime({
  remoteEndpoints: [
    {
      url: process.env.REMOTE_ACTION_URL || "http://localhost:8000/copilotkit",
    },
  ],
});

export async function action({ request }: ActionFunctionArgs) {
  const token = await getAuthToken(request);
  if (!token) {
    return redirect("/login")
  }
  const { handleRequest } = copilotRuntimeNodeHttpEndpoint({
    runtime,
    serviceAdapter,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(request, {});
}
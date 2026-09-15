import type { NextConfig } from "next";

const repo = "react-test";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repo}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

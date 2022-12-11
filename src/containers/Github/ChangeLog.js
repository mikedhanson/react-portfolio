// Octokit.js
// https://github.com/octokit/core.js#readme

//fs = require("fs");
import React, { useContext } from "react";
import { request } from "https";
import { Fade } from "react-reveal";
process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct.",
};

var data = JSON.stringify({
  query: `
    {
    user(login:"${GITHUB_USERNAME}") { 
        name
        bio
        avatarUrl
        location
        pinnedItems(first: 6, types: [REPOSITORY]) {
        totalCount
        edges {
            node {
                ... on Repository {
                name
                description
                forkCount
                stargazers {
                    totalCount
                }
                url
                id
                diskUsage
                primaryLanguage {
                    name
                    color
                }
                }
            }
            }
        }
        }
    }
`,
});

const default_options = {
  hostname: "api.github.com",
  path: "/graphql",
  port: 443,
  method: "POST",
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    "User-Agent": "Node",
  },
};

const req = request(default_options, (res) => {
  let data = "";

  console.log(`statusCode: ${res.statusCode}`);
  if (res.statusCode !== 200) {
    throw new Error(ERR.requestFailed);
  }

  res.on("data", (d) => {
    data += d;
  });
});

req.on("error", (error) => {
  throw error;
});

console.log(req);

export default function Logs() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <h1>Coming soon</h1>
    </Fade>
  );
}

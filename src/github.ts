import { GitHub } from '@actions/github';
import * as core from '@actions/core';

const getIssues = async () => {
  const token = core.getInput('token');

  const octokit = new GitHub(token);

  const { repository } = (await octokit.graphql(
    `
      {
        repository(owner: "octokit", name: "graphql.js") {
          issues(last: 3) {
            edges {
              node {
                title
              }
            }
          }
        }
      }
    `,
    {
      headers: {
        authorization: `token secret123`
      }
    }
  )) as any;

  console.log(repository);
};

export default getIssues;

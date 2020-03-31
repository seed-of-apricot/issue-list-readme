import tablemark from 'tablemark';
import * as core from '@actions/core';

const createTableContents = async (issues: any) => {
  try {
    const array = issues.map((item: any) => ({
      title: `<a href="${item.url}">${item.title}</a>`,
      status: `<div style="margin-top: -0.375rem">${
        item.state === 'open' ? '✳' : ':no_entry:'
      }</div>`,
      assignee: item.assignees.map(
        (assignee: any) =>
          `<a href="${assignee.html_url}"><img src="${assignee.avatar_url}" width="24" style="margin-bottom: -0.25rem"></a>`
      )
    }));
    const markDownText: string = tablemark(array, {
      columns: [{ align: 'left' }, { align: 'center' }, { align: 'center' }]
    });

    return markDownText;
  } catch (error) {
    core.setFailed(error.message);
    throw error.message;
  }
};
export default createTableContents;

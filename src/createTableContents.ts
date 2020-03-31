import tablemark from 'tablemark';
import * as core from '@actions/core';

const createTableContents = async (issues: any) => {
  try {
    const array = issues.map((item: any) => ({
      title: `<a href="${item.url}">${item.title}</a>`,
      status: item.state === 'open' ? ':eight_spoked_asterisk:' : ':no_entry:',
      assignee: item.assignees.map(
        (assignee: { avatar_url: any }) =>
          `<img src="${assignee.avatar_url}" width="24">`
      )
    }));
    const markDownText: string = tablemark(array, {
      wrap: { width: 40 },
      columns: [{ align: 'left' }, { align: 'center' }, { align: 'center' }]
    });

    return markDownText;
  } catch (error) {
    core.setFailed(error.message);
    throw error.message;
  }
};
export default createTableContents;

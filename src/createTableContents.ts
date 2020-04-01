import tablemark from 'tablemark';
import * as core from '@actions/core';
import extractBody from './extractBody';

const createTableContents = async (issues: any) => {
  try {
    const array = issues.map(async (item: any) => ({
      title: `<a href="${item.html_url}">${item.title}</a>`,
      status: item.state === 'open' ? ':eight_spoked_asterisk:' : ':no_entry:',
      assignee: item.assignees.map(
        (assignee: any) =>
          `<a href="${assignee.html_url}"><img src="${assignee.avatar_url}" width="20"></a>`
      ),
      body: await extractBody(item.body)
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

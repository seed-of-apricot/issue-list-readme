import table from 'markdown-table';

const createTableContents = async (issues: any) => {
  const markDownText: string = table(
    issues.data.map(
      (item: { title: any; state: string; assignees: any[] }) => ({
        title: item.title,
        status: item.state === 'open' ? ':heavy_check_mark:' : ':no_entry:',
        assignee: item.assignees.map(
          (assignee: { avatar_url: any }) => assignee.avatar_url
        )
      })
    )
  );

  return markDownText;
};
export default createTableContents;

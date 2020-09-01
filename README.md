![rewriteReadme](https://github.com/seed-of-apricot/issue-list-readme/workflows/rewriteReadme/badge.svg)

# Auto Issue List in README

Display issues on the landing page :eyes:

## Demo

The issue list below...

<!-- issueTableDemo -->

| Title                                                                                 |         Status          |                                                            Assignee                                                             | Body                                  |
| :------------------------------------------------------------------------------------ | :---------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------ |
| <a href="https://github.com/seed-of-apricot/issue-list-readme/issues/4">more test</a> | :eight_spoked_asterisk: |                                                                                                                                 | yay!                                  |
| <a href="https://github.com/seed-of-apricot/issue-list-readme/issues/2">test</a>      | :eight_spoked_asterisk: | <a href="https://github.com/seed-of-apricot"><img src="https://avatars1.githubusercontent.com/u/26666870?v=4" width="20" /></a> | test<br />hoge<br />testtest<br />... |

<!-- issueTableDemo -->

is compiled through this action.

```yml
# setup
steps:
  - name: checkout
    uses: actions/checkout@v2
  - name: rewriteReadme
    uses: seed-of-apricot/issue-list-readme@v1.1.0
    with:
      GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}'
      pattern: '<!-- issueTable -->' # suffixing "Demo" for this readme
      labels: 'good first issue'
      labels: 'open'
# you need to add, commit and push here
# otherwise the changes will not be pushed back into master
```

## Usage

1. Place two identifiers in your README.md, which the action detects as the location to inject the issue list to.

```md
README.md

//
// your contents
//

// place two identifiers

<!-- issueTable -->

<!-- issueTable -->

//
// your another contents
//
```

2. Add some issues. You can optionally use the same identifier to extract a part the body to display in the list.

```md
Some issue

// place two identifiers (optional)

<!-- issueTable -->

<!-- issueTable -->

//
// your comment
//
```

3. Then, write the following section into your action.

```yml
uses: seed-of-apricot/issue-list-readme@v1.1.0
with:
  GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}'
```

The action will fetch the issues in the repository and re-write the README.md :thumbsup:  
The body will show up to three first lines of the body (or the extracted part of it).

It is recommended to run this action on issue open/close or by a cron job (e.g., `cron: "0 0 * * *"`).

## Options

Available variables are:

| variable     | required | default                 | note                                                                               |
| ------------ | -------- | ----------------------- | ---------------------------------------------------------------------------------- |
| GITHUB_TOKEN | true     | -                       | you can use \${{ secrets.GITHUB_TOKEN }}                                           |
| pattern      | false    | "\<!-- issueTable --\>" | the identifier to inject the issue table and <br /> extract the body of each issue |
| labels       | false    | -                       | comma-separated labels to filter issues                                            |
| state       | false    | "all"                       | state of the issues to filter them (`"all" \| "open" \| "closed"`)                                            |

## Limitations

You must have **README.md** (not README) to make this work. (todo)

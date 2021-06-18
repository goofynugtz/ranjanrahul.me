---
title: Coding Post
description: This is a test of Syntax Highlighting
date: 17-06-2021
tags: [coding, syntaxing]
---

```javascript
const CodeBlock = ({ language, value }) => {
    return <SyntaxHighlighter language={language} showLineNumbers  useInlineStyles={false} customStyle={{
        backgroundColor: 'none',
        border: 'none',
        margin: 0,
        borderRadius: '5px',
    }}>{value}</SyntaxHighlighter>
}
```
Lets see how this looks in python

```python
print("Hello World")
```
And in C++
```c
printf("Hello");
```
and just another random block

```hello world```

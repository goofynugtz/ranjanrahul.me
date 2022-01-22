---
title: TypeScript with Node.js
description: Getting started with TypeScript for backend
date: June 04, 2021
tags: [backend, ts, node]
---
### Getting started with TypeScript with Node.

I use ```yarn``` as my package manager so the following code says the same.  
If you're using ```npm```, just replace ```yarn add``` with ```npm install```.  

1. Initialize package.json by  
   ```yarn init -y```  
2. Add TypeScript as a Developer Dependency
   ```yarn add -D typescript```  
3. Now, initialize tsconfig.json file.
   ```npx tsc --init```  
Here, tsc refers to TypeScript compiler
For testing.
3. Create src/index.ts and put in a console.log();
4. ```yarn add -D ts-node-dev```   
5. add script in package.json:
   ```"start": "ts-node-dev --respawn src/index.ts"```  
Alternatively
4. ```yarn add -g nodemon```
5. add script in package.json:
  ```"start": "nodemon --exec src/index.ts"```
6. To add typescript definition:
   ```yarn add -D @types/packageName```
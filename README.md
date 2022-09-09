Webpack Public Path Reproduction

See the custom apps/test-app/webpack.config.js file for an example of building a custom path.

This is the path I want to be used in the webpack output.

The values are not being honored when I run the build output with `npx nx build test-app`.

I have also looked into the docs and found that apparently the `deployUrl` property in the project.json file can be used to set this value and provide a base URL for my assets.  This does appear to work. 

However, I need a way to set this dynamically, and I'm not sure how this could be done with the project.json file.

Any advice on how to resolve this?
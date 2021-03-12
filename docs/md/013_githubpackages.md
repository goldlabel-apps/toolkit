## npm & GitHub Packages

https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages

You can configure npm to publish packages to GitHub Packages and to use packages stored on GitHub Packages as dependencies in an npm project.

#### Publishing a package using a local .npmrc file

You can use an 	`.npmrc` file to configure the scope mapping for your project. In the .npmrc file, use the GitHub Packages URL and account owner so GitHub Packages knows where to route package requests. Using an `.npmrc` file prevents other developers from accidentally publishing the package to npmjs.org instead of GitHub Packages.
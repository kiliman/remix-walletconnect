# Remix WalletConnect

This example shows how to import the `@walletconnect/client` package.

Since this only runs on the client, we import the package in `wallet.client`. This
package also depends on the node `Buffer` class. We use a polyfill named `buffer`.
However the Remix compiler will not let you import a package that overrides node built-ins.

We use `patch-package` to comment out the compiler check.

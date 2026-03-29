// This index file should contain all the exported functions that are
// called on the client side with Remote Procedure Calls (RPC).
// The vite bundling process makes sure that the exported functions are correctly
// stated in the final server.gs bundle file
// !IMPORTANT: Only exported functions can be called from the client side.

// Functions to setup the initial UI
export * from './ui/rpc';

export { getSpreadsheetLocale } from './utils/spreadsheet';
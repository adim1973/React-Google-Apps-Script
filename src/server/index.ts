// declare var exports: any

const ui = require('./ui');
const sheets = require('./sheets');

// import {
//   onOpen,
//   openDialog,
//   openDialogBootstrap,
//   openDialogMUI,
//   openDialogTailwindCSS,
//   openAboutSidebar,
// } from './ui';

// import { getSheetsData, addSheet, deleteSheet, setActiveSheet } from './sheets';

// Public functions must be exported as named exports
exports.onOpen = ui.onOpen;
exports.openAboutSidebar = ui.openAboutSidebar;
exports.openDialog = ui.openDialog;
exports.openDialogBootstrap = ui.openDialogBootstrap;
exports.openDialogMUI = ui.openDialogMUI;
exports.openDialogTailwindCSS = ui.openDialogTailwindCSS;
exports.getSheetsData = sheets.getSheetsData;
exports.addSheet = sheets.addSheet;
exports.deleteSheet = sheets.deleteSheet;
exports.setActiveSheet = sheets.setActiveSheet;

const TestAccount = require('./TestAccount');
exports.getEmail = TestAccount.getEmail;

// export {
//   onOpen,
//   openDialog,
//   openDialogBootstrap,
//   openDialogMUI,
//   openDialogTailwindCSS,
//   openAboutSidebar,
//   getSheetsData,
//   addSheet,
//   deleteSheet,
//   setActiveSheet,
// };

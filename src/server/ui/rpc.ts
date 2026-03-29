import { DIALOG_SIZES } from '@/common/constants';

export function onOpen(): void {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Svelte GAS')
    .addItem('About', openAboutDialog.name)
    // .addItem('Settings', openSettingsDialog.name)
    .addToUi();
}

export function openAboutDialog(): void {
  const [width, height] = DIALOG_SIZES.about;
  const html = HtmlService.createTemplateFromFile('about-dialog')
    .evaluate()
    .setWidth(width)
    .setHeight(height);
  SpreadsheetApp.getUi().showModalDialog(html, 'About');
}

// Add more dialogs here if needed, for example:
// export function openSettingsDialog(): void {
//   const [width, height] = DIALOG_SIZES.settings;
//   const html = HtmlService.createTemplateFromFile('settings-dialog')
//     .evaluate()
//     .setWidth(width)
//     .setHeight(height);
//   SpreadsheetApp.getUi().showModalDialog(html, 'Settings');
// }

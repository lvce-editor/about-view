import * as I18nString from '../I18NString/I18NString.js'

/**
 * @enum {string}
 */
const UiStrings = {
  Ok: 'Ok',
  Copy: 'Copy',
  Version: 'Version',
  Commit: 'Commit',
  Date: 'Date',
  Browser: 'Browser',
  Info: 'Info',
  Close: 'Close',
  CloseDialog: 'Close Dialog',
}

export const ok = (): string => {
  return I18nString.i18nString(UiStrings.Ok)
}

export const copy = (): string => {
  return I18nString.i18nString(UiStrings.Copy)
}

export const version = (): string => {
  return I18nString.i18nString(UiStrings.Version)
}

export const commit = (): string => {
  return I18nString.i18nString(UiStrings.Commit)
}

export const date = (): string => {
  return I18nString.i18nString(UiStrings.Date)
}

export const browser = (): string => {
  return I18nString.i18nString(UiStrings.Browser)
}

export const info = (): string => {
  return I18nString.i18nString(UiStrings.Info)
}

export const close = (): string => {
  return I18nString.i18nString(UiStrings.Close)
}

export const closeDialog = (): string => {
  return I18nString.i18nString(UiStrings.CloseDialog)
}

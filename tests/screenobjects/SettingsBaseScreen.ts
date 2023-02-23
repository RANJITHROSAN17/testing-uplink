import UplinkMainScreen from "./UplinkMainScreen";

const currentOS = driver.capabilities.automationName;
let SELECTORS = {};

const SELECTORS_COMMON = {
  SETTINGS_LAYOUT: "~settings-layout",
};

const SELECTORS_WINDOWS = {
  AUDIO_BUTTON: "//Group/Group/Button[4]",
  DEVELOPER_BUTTON: '[name="developer-button"]',
  EXTENSIONS_BUTTTON: '[name="extensions-button"]',
  FILES_BUTTON: '[name="files-button"]',
  GENERAL_BUTTON: '[name="general-button"]',
  NOTIFICATIONS_BUTTON: '[name="notifications-button"]',
  PRIVACY_BUTTON: '[name="privacy-button"]',
  PROFILE_BUTTON: '[name="profile-button"]',
  SETTINGS_SEARCH_INPUT: '[name="settings-search-input"]',
};

const SELECTORS_MACOS = {
  AUDIO_BUTTON: "~sounds & audio-button",
  DEVELOPER_BUTTON: "~developer-button",
  EXTENSIONS_BUTTTON: "~extensions-button",
  FILES_BUTTON: "~files-button",
  GENERAL_BUTTON: "~general-button",
  NOTIFICATIONS_BUTTON: "~notifications-button",
  PRIVACY_BUTTON: "~privacy-button",
  PROFILE_BUTTON: "~profile-button",
  SETTINGS_SEARCH_INPUT: "~settings-search-input",
};

currentOS === "windows"
  ? (SELECTORS = { ...SELECTORS_WINDOWS, ...SELECTORS_COMMON })
  : (SELECTORS = { ...SELECTORS_MACOS, ...SELECTORS_COMMON });

export default class SettingsBaseScreen extends UplinkMainScreen {
  constructor() {
    super(SELECTORS.SETTINGS_LAYOUT);
  }

  get audioButton() {
    return $(SELECTORS.AUDIO_BUTTON);
  }

  get developerButton() {
    return $(SELECTORS.DEVELOPER_BUTTON);
  }

  get extensionsButton() {
    return $(SELECTORS.EXTENSIONS_BUTTTON);
  }

  get filesSettingsButton() {
    return $$(SELECTORS.FILES_BUTTON)[1];
  }

  get generalButton() {
    return $(SELECTORS.GENERAL_BUTTON);
  }

  get notificationsButton() {
    return $(SELECTORS.NOTIFICATIONS_BUTTON);
  }

  get privacyButton() {
    return $(SELECTORS.PRIVACY_BUTTON);
  }

  get profileButton() {
    return $(SELECTORS.PROFILE_BUTTON);
  }

  get settingsLayout() {
    return $(SELECTORS.SETTINGS_LAYOUT);
  }

  get settingsSearchInput() {
    return $(SELECTORS.SETTINGS_SEARCH_INPUT);
  }

  async goToAudioSettings() {
    await this.audioButton.click();
  }

  async goToDeveloperSettings() {
    await this.developerButton.click();
  }

  async goToExtensionsSettings() {
    await this.extensionsButton.click();
  }

  async goToFilesSettings() {
    await this.filesSettingsButton.click();
  }

  async goToGeneralSettings() {
    await this.generalButton.click();
  }

  async goToNotificationsSettings() {
    await this.notificationsButton.click();
  }

  async goToPrivacySettings() {
    await this.privacyButton.click();
  }

  async goToProfileSettings() {
    await this.profileButton.click();
  }

  async getToggleState(element: WebdriverIO.Element) {
    const currentDriver = await driver.capabilities.automationName;
    if (currentDriver === "mac2") {
      return await element.getAttribute("value");
    } else if (currentDriver === "windows") {
      return await element.getAttribute("Toggle.ToggleState");
    }
  }
}

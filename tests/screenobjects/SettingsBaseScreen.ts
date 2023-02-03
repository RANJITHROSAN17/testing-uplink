import UplinkMainScreen from "./UplinkMainScreen";

const SELECTORS = {
  AUDIO_BUTTON: "~audio-button",
  DEVELOPER_BUTTON: "~developer-button",
  EXTENSIONS_BUTTTON: "~extensions-button",
  FILES_BUTTON: "~files-button",
  GENERAL_BUTTON: "~general-button",
  NOTIFICATIONS_BUTTON: "~notifications-button",
  PRIVACY_BUTTON: "~privacy-button",
  PROFILE_BUTTON: "~profile-button",
  SETTINGS_LAYOUT: "~settings-layout",
  SETTINGS_SEARCH_INPUT: "~settings-search-input",
};

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
    await (await this.audioButton).click();
  }

  async goToDeveloperSettings() {
    await (await this.developerButton).click();
  }

  async goToExtensionsSettings() {
    await (await this.extensionsButton).click();
  }

  async goToFilesSettings() {
    await (await this.filesSettingsButton).click();
  }

  async goToGeneralSettings() {
    await (await this.generalButton).click();
  }

  async goToNotificationsSettings() {
    await (await this.notificationsButton).click();
  }

  async goToPrivacySettings() {
    await (await this.privacyButton).click();
  }

  async goToProfileSettings() {
    await (await this.profileButton).click();
  }
}

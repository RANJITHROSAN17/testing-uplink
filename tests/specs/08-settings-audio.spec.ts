import FriendsScreen from "../screenobjects/FriendsScreen";
import SettingsGeneralScreen from "../screenobjects/SettingsGeneralScreen";
import SettingsAudioScreen from "../screenobjects/SettingsAudioScreen";
import { loginWithRandomUser, showMainMenu } from "../helpers/commands";

describe("Settings - Audio - Tests", async () => {
  it("Settings Audio - Assert screen texts", async () => {
    // Login with a random user, show main menu, go to Settings Screen and finally select the Settings Screen to validate
    await loginWithRandomUser();
    await showMainMenu();
    await FriendsScreen.goToSettings();
    await SettingsGeneralScreen.waitForIsShown(true);
    await SettingsGeneralScreen.goToAudioSettings();
    await SettingsAudioScreen.waitForIsShown(true);

    // Validate texts for Interface Sounds Settings Section
    await expect(
      await SettingsAudioScreen.interfaceSoundsHeader
    ).toHaveTextContaining("INTERFACE SOUNDS");
    await expect(
      await SettingsAudioScreen.interfaceSoundsDescription
    ).toHaveTextContaining(
      "When enabled, some additional sounds will play when you interact with the app."
    );

    // Validate texts for Media Sounds Settings Section
    await expect(
      await SettingsAudioScreen.mediaSoundsHeader
    ).toHaveTextContaining("MEDIA SOUNDS");
    await expect(
      await SettingsAudioScreen.mediaSoundsDescription
    ).toHaveTextContaining(
      "When enabled, media related events such as toggling microphone or headphones and other real time events, will play sounds."
    );

    // Validate texts for Message Sounds Settings Section
    await expect(
      await SettingsAudioScreen.messageSoundsHeader
    ).toHaveTextContaining("MESSAGE SOUNDS");
    await expect(
      await SettingsAudioScreen.messageSoundsDescription
    ).toHaveTextContaining(
      "When enabled you will hear a notification when a new message is received."
    );

    // Validate texts for Call Timer Settings Section
    await expect(
      await SettingsAudioScreen.callTimerHeader
    ).toHaveTextContaining("CALL TIMER");
    await expect(
      await SettingsAudioScreen.callTimerDescription
    ).toHaveTextContaining(
      "When enabled a timer will display when you're in a call showing it's duration."
    );
  });

  it("Settings Audio - Click on slider switches to enable the options", async () => {
    // Since Media Sounds and Message Sounds are enabled by default, first we need to click on these checkboxes before starting the test
    await SettingsAudioScreen.clickOnMediaSounds();
    await SettingsAudioScreen.clickOnMessageSounds();

    // Click on the four switch sliders from the Settings Sounds & Audio Screen
    await SettingsAudioScreen.clickOnInterfaceSounds();

    // Click twice on Media Sounds Switch Slider since it is enabled by default
    await SettingsAudioScreen.clickOnMediaSounds();
    await SettingsAudioScreen.clickOnMediaSounds();

    // Click twice on Message Sounds Switch Slider since it is enabled by default
    await SettingsAudioScreen.clickOnMessageSounds();
    await SettingsAudioScreen.clickOnMessageSounds();
    await SettingsAudioScreen.clickOnCallTimer();

    // Validate that toggle switches have now value = '1' (active)
    await expect(
      SettingsAudioScreen.interfaceSoundsControllerValue
    ).toHaveAttrContaining("Toggle.ToggleState", "1");
    await expect(
      SettingsAudioScreen.mediaSoundsControllerValue
    ).toHaveAttrContaining("Toggle.ToggleState", "1");
    await expect(
      SettingsAudioScreen.messageSoundsControllerValue
    ).toHaveAttrContaining("Toggle.ToggleState", "1");
    await expect(
      SettingsAudioScreen.callTimerControllerValue
    ).toHaveAttrContaining("Toggle.ToggleState", "1");
  });

  it("Settings Audio - Click on slider switches to disable the options", async () => {
    // Click again on the four switch sliders from the Settings Sounds & Audio Screen
    await SettingsAudioScreen.clickOnInterfaceSounds();
    await SettingsAudioScreen.clickOnMediaSounds();
    await SettingsAudioScreen.clickOnMessageSounds();
    await SettingsAudioScreen.clickOnCallTimer();

    // Validate that toggle switches have now value = '0' (disabled)
    await expect(
      SettingsAudioScreen.interfaceSoundsControllerValue
    ).toHaveAttrContaining("Toggle.ToggleState", "0");
    await expect(
      SettingsAudioScreen.mediaSoundsControllerValue
    ).toHaveAttrContaining("Toggle.ToggleState", "0");
    await expect(
      SettingsAudioScreen.messageSoundsControllerValue
    ).toHaveAttrContaining("Toggle.ToggleState", "0");
    await expect(
      SettingsAudioScreen.callTimerControllerValue
    ).toHaveAttrContaining("Toggle.ToggleState", "0");
  });
});

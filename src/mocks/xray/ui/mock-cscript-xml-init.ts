import { jest } from "@jest/globals";
import type { CUIButton, CUIListBox, CUIListBoxItem, CUIWindow, CScriptXmlInit, CUISleepStatic } from "xray16";

import { MockCServerList } from "./mock-cserver-list";
import { MockCUI3tButton } from "./mock-cui-3t-button";
import { MockCUICheckButton } from "./mock-cui-check-button";
import { MockCUIComboBox } from "./mock-cui-combo-box";
import { MockCUIEditBox } from "./mock-cui-edit-box";
import { MockCUIFrameLineWnd } from "./mock-cui-frame-line-window";
import { MockCUIFrameWindow } from "./mock-cui-frame-window";
import { MockCUIListBox } from "./mock-cui-list-box";
import { MockCUIListWnd } from "./mock-cui-list-wnd";
import { MockCUIMapInfo } from "./mock-cui-map-info";
import { MockCUIMapList } from "./mock-cui-map-list";
import { MockCUIMMShniaga } from "./mock-cui-mm-shniaga";
import { MockCUIProgressBar } from "./mock-cui-progress-bar";
import { MockCUIScrollView } from "./mock-cui-scroll-view";
import { MockCUISpinFlt } from "./mock-cui-spin-flt";
import { MockCUISpinNum } from "./mock-cui-spin-num";
import { MockCUISpinText } from "./mock-cui-spin-text";
import { MockCUIStatic } from "./mock-cui-static";
import { MockCUITabControl } from "./mock-cui-tab-control";
import { MockCUITextWnd } from "./mock-cui-text-wnd";
import { MockCUITrackBar } from "./mock-cui-track-bar";
import { MockCUIVersionList } from "./mock-cui-version-list";
import { MockCUIWindow } from "./mock-cui-window";
import { MockUIHint } from "./mock-ui-hint";

/**
 * Mock xml file with forms sources.
 */
export class MockCScriptXmlInit implements CScriptXmlInit {
  public static mock(): CScriptXmlInit {
    return new this() as unknown as CScriptXmlInit;
  }

  public static create(): MockCScriptXmlInit {
    return new this();
  }

  public ParseFile = jest.fn();
  public ParseShTexInfo = jest.fn();

  public InitWindow = jest.fn(() => MockCUIWindow.mock());
  public InitButton = jest.fn(() => MockCUIStatic.mock() as unknown as CUIButton);
  public InitTab = jest.fn(() => MockCUITabControl.mock());
  public Init3tButton = jest.fn(() => MockCUI3tButton.mock());
  public InitAnimStatic = jest.fn(() => MockCUIStatic.mock());
  public InitCheck = jest.fn(() => MockCUICheckButton.mock());
  public InitStatic = jest.fn(() => MockCUIStatic.mock());
  public InitComboBox = jest.fn(() => MockCUIComboBox.mock());
  public InitListBox = jest.fn(<T extends CUIListBoxItem = CUIListBoxItem>(): CUIListBox<T> => {
    return MockCUIListBox.mock() as CUIListBox<T>;
  }) as <T extends CUIListBoxItem = CUIListBoxItem>(
    selector: string,
    parent: CUIWindow | null | undefined
  ) => CUIListBox<T>;
  public InitEditBox = jest.fn(() => MockCUIEditBox.mock());
  public InitLabel = jest.fn(() => MockCUIStatic.mock());
  public InitList = jest.fn(() => MockCUIListWnd.mock());
  public InitScrollView = jest.fn(() => MockCUIScrollView.mock());
  public InitSpinNum = jest.fn(() => MockCUISpinNum.mock());
  public InitSpinText = jest.fn(() => MockCUISpinText.mock());
  public InitMapList = jest.fn(() => MockCUIMapList.mock());
  public InitMapInfo = jest.fn(() => MockCUIMapInfo.mock());
  public InitTrackBar = jest.fn(() => MockCUITrackBar.mock());
  public InitFrame = jest.fn(() => MockCUIFrameWindow.mock());
  public InitFrameLine = jest.fn(() => MockCUIFrameLineWnd.mock());
  public InitKeyBinding = jest.fn(() => MockCUIWindow.mock());
  public InitProgressBar = jest.fn(() => MockCUIProgressBar.mock());
  public InitTextWnd = jest.fn(() => MockCUITextWnd.mock());
  public InitMPPlayerName = jest.fn(() => MockCUIEditBox.mock());
  public InitCDkey = jest.fn(() => MockCUIEditBox.mock());
  public InitMMShniaga = jest.fn(() => MockCUIMMShniaga.mock());
  public InitSpinFlt = jest.fn(() => MockCUISpinFlt.mock());
  public InitServerList = jest.fn(() => MockCServerList.mock());
  public InitSleepStatic = jest.fn(() => MockCUIStatic.mock() as unknown as CUISleepStatic);
  public InitVerList = jest.fn(() => MockCUIVersionList.mock());
  public InitHint = jest.fn(() => MockUIHint.mock());
  public InitAutoStaticGroup = jest.fn();
}

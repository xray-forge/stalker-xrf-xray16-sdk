import { jest } from "@jest/globals";
import { type CUIFrameWindow } from "xray16";

import { MockCUIWindow } from "./mock-cui-window";

/**
 * Mock generic frame window.
 */
export class MockCUIFrameWindow extends MockCUIWindow implements CUIFrameWindow {
  public static override mock(): CUIFrameWindow {
    return new this() as unknown as CUIFrameWindow;
  }

  public static override create(): MockCUIFrameWindow {
    return new this();
  }

  public color: number = 0;

  public SetColor = jest.fn((color: number) => {
    this.color = color;
  });
}

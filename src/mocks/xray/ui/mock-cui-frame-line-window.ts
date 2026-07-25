import { jest } from "@jest/globals";
import { type CUIFrameLineWnd } from "xray16";

import { MockCUIWindow } from "./mock-cui-window";

/**
 * Mock generic frame line window.
 */
export class MockCUIFrameLineWnd extends MockCUIWindow implements CUIFrameLineWnd {
  public static override mock(): CUIFrameLineWnd {
    return new this() as unknown as CUIFrameLineWnd;
  }

  public static override create(): MockCUIFrameLineWnd {
    return new this();
  }

  public color: number = 0;

  public SetColor = jest.fn((color: number) => {
    this.color = color;
  });
}

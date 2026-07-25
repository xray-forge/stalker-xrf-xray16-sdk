import { jest } from "@jest/globals";
import { type UIHint } from "xray16";

import { MockCUIWindow } from "./mock-cui-window";

/**
 * Mock generic UI hint window.
 */
export class MockUIHint extends MockCUIWindow implements UIHint {
  public static override mock(): UIHint {
    return new this() as unknown as UIHint;
  }

  public static override create(): MockUIHint {
    return new this();
  }

  public hintText: string = "";

  public SetHintText = jest.fn((hint: string) => {
    this.hintText = hint;
  });
  public GetHintText = jest.fn(() => this.hintText);
}

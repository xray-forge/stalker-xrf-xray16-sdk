import { jest } from "@jest/globals";
import { type CUIProgressBar } from "xray16";

import { MockCUIWindow } from "./mock-cui-window";

/**
 * Mock generic progress bar.
 *
 * Progress position and range are stored as mutable fields, so a test can read back what the code under test
 * assigned instead of asserting on call arguments only.
 */
export class MockCUIProgressBar extends MockCUIWindow implements CUIProgressBar {
  public static override mock(): CUIProgressBar {
    return new this() as unknown as CUIProgressBar;
  }

  public static override create(): MockCUIProgressBar {
    return new this();
  }

  public progressPos: number = 0;
  public rangeMin: number = 0;
  public rangeMax: number = 100;

  public SetProgressPos = jest.fn((position: number) => {
    this.progressPos = position;
  });
  public GetProgressPos = jest.fn(() => this.progressPos);
  public GetRange_min = jest.fn(() => this.rangeMin);
  public GetRange_max = jest.fn(() => this.rangeMax);
}

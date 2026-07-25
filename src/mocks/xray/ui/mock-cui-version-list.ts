import { jest } from "@jest/globals";
import { type CUIVersionList } from "xray16";

/**
 * Mock multiplayer version list.
 *
 * @remarks
 * Standalone rather than a `MockCUIWindow` subclass, matching the declaration. The C++ source is documented as
 * `CUIVersionList : CUIWindow`, so the declaration may be missing an `extends` clause — if it gains one, this
 * mock should extend `MockCUIWindow` too.
 */
export class MockCUIVersionList implements CUIVersionList {
  public static mock(): CUIVersionList {
    return new this() as unknown as CUIVersionList;
  }

  public static create(): MockCUIVersionList {
    return new this();
  }

  public itemsCount: number = 0;
  public currentVersionName: string = "";
  public currentVersionDescription: string = "";

  public GetItemsCount = jest.fn(() => this.itemsCount);
  public GetCurrentVersionName = jest.fn(() => this.currentVersionName);
  public GetCurrentVersionDescr = jest.fn(() => this.currentVersionDescription);
  public SwitchToSelectedVersion = jest.fn();
}

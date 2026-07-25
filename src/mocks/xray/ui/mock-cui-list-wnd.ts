import { jest } from "@jest/globals";
import { type CUIListItem, type CUIListWnd } from "xray16";

import { MockCUIWindow } from "./mock-cui-window";

/**
 * Mock generic list window.
 *
 * @remarks
 * Item storage is real so that add/remove/selection behaviour can be asserted through the list state rather than
 * through call arguments only. Note that unlike `CUIListBox`, selection getters return indexes, not items.
 */
export class MockCUIListWnd extends MockCUIWindow implements CUIListWnd {
  public static override mock(): CUIListWnd {
    return new this() as unknown as CUIListWnd;
  }

  public static override create(): MockCUIListWnd {
    return new this();
  }

  public items: Array<CUIListItem> = [];
  public selectedIndex: number = -1;
  public focusedIndex: number = -1;
  public itemHeight: number = 0;
  public textColor: number = 0;
  public isVertFlip: boolean = false;
  public isActive: boolean = false;
  public isScrollBarEnabled: boolean = false;

  public AddItem = jest.fn((item: CUIListItem) => {
    this.items.push(item);

    return true;
  });
  public RemoveItem = jest.fn((index: number) => {
    this.items.splice(index, 1);
  });
  public RemoveAll = jest.fn(() => {
    this.items = [];
    this.selectedIndex = -1;
    this.focusedIndex = -1;
  });
  public GetItem = jest.fn((index: number) => this.items[index]);
  public GetItemPos = jest.fn((item: CUIListItem) => this.items.indexOf(item));
  public GetSize = jest.fn(() => this.items.length);
  public GetSelectedItem = jest.fn(() => this.selectedIndex);
  public SetFocusedItem = jest.fn((index: number) => {
    this.focusedIndex = index;
  });
  public GetFocusedItem = jest.fn(() => this.focusedIndex);
  public ResetFocusCapture = jest.fn(() => {
    this.focusedIndex = -1;
  });
  public ShowSelectedItem = jest.fn();
  public SetItemHeight = jest.fn((height: number) => {
    this.itemHeight = height;
  });
  public SetTextColor = jest.fn((color: number) => {
    this.textColor = color;
  });
  public SetVertFlip = jest.fn((flip: boolean) => {
    this.isVertFlip = flip;
  });
  public GetVertFlip = jest.fn(() => this.isVertFlip);
  public ActivateList = jest.fn((flag: boolean) => {
    this.isActive = flag;
  });
  public IsListActive = jest.fn(() => this.isActive);
  public EnableScrollBar = jest.fn((enable: boolean) => {
    this.isScrollBarEnabled = enable;
  });
  public IsScrollBarEnabled = jest.fn(() => this.isScrollBarEnabled);
  public ScrollToPos = jest.fn();
  public ScrollToBegin = jest.fn();
  public ScrollToEnd = jest.fn();
}

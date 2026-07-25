import { jest } from "@jest/globals";
import type { IXR_game } from "xray16";

import { MockCTime } from "./mock-ctime";

/**
 * Mock of the X-Ray engine `game` namespace for jest/node.
 *
 * The `satisfies` guard keeps this stand-in complete: adding a member to `IXR_game` breaks the build until the
 * mock is extended.
 */
export const mockGameInterface = {
  active_tutorial_name: jest.fn(() => ""),
  CTime: jest.fn(() => MockCTime.now()),
  get_game_time: jest.fn(() => MockCTime.now()),
  has_active_tutorial: jest.fn(() => false),
  jump_to_level: jest.fn() as unknown as IXR_game["jump_to_level"],
  log_stack_trace: jest.fn(() => {}),
  reload_language: jest.fn(() => {}),
  start_tutorial: jest.fn(() => {}),
  stop_tutorial: jest.fn(() => {}),
  time: jest.fn(() => MockCTime.now().toTimestamp()),
  translate_string: jest.fn((key: string) => "translated_" + key),
} satisfies IXR_game;

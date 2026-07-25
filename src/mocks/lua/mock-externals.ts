import { type AnyObject } from "../../lib/types";
import { extern, getExtern } from "../../lib/utils/binding";

/**
 * Controls the Lua global scope used by {@link extern} and {@link getExtern} in runtime tests.
 */
export class MockExternals {
  /**
   * Replace the mocked Lua global scope with an empty table.
   *
   * @returns The new global scope for additional direct setup when necessary.
   */
  public static reset(): AnyObject {
    const globals: AnyObject = {};

    (globalThis as Record<string, unknown>)._G = globals;

    return globals;
  }

  /**
   * Register an externed value in the current mocked Lua global scope.
   *
   * @param key - Dot-separated global path to register.
   * @param value - Value exposed through {@link getExtern}.
   */
  public static register(key: string, value: unknown): void {
    extern(key, value);
  }

  /**
   * Read an externed value from the current mocked Lua global scope.
   *
   * @template T - Expected type of the registered value.
   * @param key - Global key to read.
   * @returns The registered value.
   */
  public static get<T>(key: string): T {
    return getExtern<T>(key);
  }
}

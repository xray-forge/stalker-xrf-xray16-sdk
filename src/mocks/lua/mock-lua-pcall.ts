/**
 * Mock lua `pcall` global.
 *
 * @param callable - Function to call protected.
 * @param args - Arguments forwarded to the callable.
 * @returns Whether the call completed, paired with its result or the error message.
 */
export function mockPcall(callable: (...args: Array<never>) => unknown, ...args: Array<never>): [boolean, unknown] {
  try {
    return [true, callable(...args)];
  } catch (error) {
    return [false, error instanceof Error ? error.message : error];
  }
}

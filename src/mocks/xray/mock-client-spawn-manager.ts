import { jest } from "@jest/globals";
import type { client_spawn_manager } from "xray16";

/**
 * Mock of the X-Ray engine `client_spawn_manager` class for jest/node.
 */
export class MockClientSpawnManager implements client_spawn_manager {
  public static create(): MockClientSpawnManager {
    return new MockClientSpawnManager();
  }

  public static mock(): client_spawn_manager {
    return new MockClientSpawnManager() as unknown as client_spawn_manager;
  }

  public readonly __name: string = "client_spawn_manager";

  public remove = jest.fn() as unknown as jest.MockedFunction<client_spawn_manager["remove"]>;

  public add = jest.fn() as unknown as jest.MockedFunction<client_spawn_manager["add"]>;
}

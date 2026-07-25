import { jest } from "@jest/globals";
import type { physics_world } from "xray16";

/**
 * Mock of the X-Ray engine `physics_world` class for jest/node.
 */
export class MockPhysicsWorld implements physics_world {
  public static create(gravity: number = 9.81): MockPhysicsWorld {
    const world: MockPhysicsWorld = new MockPhysicsWorld();

    world.gravityValue = gravity;

    return world;
  }

  public static mock(gravity: number = 9.81): physics_world {
    return MockPhysicsWorld.create(gravity) as unknown as physics_world;
  }

  public readonly __name: string = "physics_world";

  public gravityValue: number = 9.81;

  public set_gravity = jest.fn() as unknown as jest.MockedFunction<physics_world["set_gravity"]>;

  public gravity = jest.fn(() => this.gravityValue) as unknown as jest.MockedFunction<physics_world["gravity"]>;

  public add_call = jest.fn() as unknown as jest.MockedFunction<physics_world["add_call"]>;
}

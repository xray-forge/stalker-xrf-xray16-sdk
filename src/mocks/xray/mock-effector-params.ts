import { jest } from "@jest/globals";
import type { duality, effector_params } from "xray16";

import { MockColor } from "./mock-color";
import { MockNoise } from "./mock-noise";

/**
 * Mock of the X-Ray engine `effector_params` class for jest/node.
 *
 * Defaults match the neutral post-process state described in the engine typings: no blur, gray, duality or noise
 * intensity.
 */
export class MockEffectorParams implements effector_params {
  public static create(): MockEffectorParams {
    return new MockEffectorParams();
  }

  public static mock(): effector_params {
    return new MockEffectorParams() as unknown as effector_params;
  }

  public readonly __name: string = "effector_params";

  public color_add: effector_params["color_add"] = MockColor.create(0, 0, 0);
  public color_base: effector_params["color_base"] = MockColor.create(0.5, 0.5, 0.5);
  public color_gray: effector_params["color_gray"] = MockColor.create(0.5, 0.5, 0.5);

  // The engine `duality` class has no mock of its own, and nothing reads this field yet.
  public dual: effector_params["dual"] = { h: 0, v: 0 } as duality;

  public blur: number = 0;
  public gray: number = 0;
  public noise: effector_params["noise"] = MockNoise.create(0, 0, 0);

  public assign = jest.fn() as unknown as jest.MockedFunction<effector_params["assign"]>;
}

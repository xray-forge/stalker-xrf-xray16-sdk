import { jest } from "@jest/globals";
import type { CEnvDescriptor, CEnvironment } from "xray16";

/**
 * Mock of the X-Ray engine `CEnvDescriptor` class for jest/node.
 */
export class MockCEnvDescriptor implements CEnvDescriptor {
  public static create(fogDensity: number = 0, farPlane: number = 300): MockCEnvDescriptor {
    const descriptor: MockCEnvDescriptor = new MockCEnvDescriptor();

    descriptor.fog_density = fogDensity;
    descriptor.far_plane = farPlane;

    return descriptor;
  }

  public static mock(fogDensity: number = 0, farPlane: number = 300): CEnvDescriptor {
    return MockCEnvDescriptor.create(fogDensity, farPlane) as unknown as CEnvDescriptor;
  }

  public readonly __name: string = "CEnvDescriptor";

  public fog_density: number = 0;
  public far_plane: number = 300;
}

/**
 * Mock of the X-Ray engine `CEnvironment` class for jest/node.
 */
export class MockCEnvironment implements CEnvironment {
  public static create(): MockCEnvironment {
    return new MockCEnvironment();
  }

  public static mock(): CEnvironment {
    return new MockCEnvironment() as unknown as CEnvironment;
  }

  public readonly __name: string = "CEnvironment";

  public descriptor: MockCEnvDescriptor = MockCEnvDescriptor.create();

  public current = jest.fn(() => this.descriptor) as unknown as jest.MockedFunction<CEnvironment["current"]>;
}

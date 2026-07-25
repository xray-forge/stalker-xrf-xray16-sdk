import { jest } from "@jest/globals";
import type { game_object, IXR_level } from "xray16";

import { MockClientSpawnManager } from "./mock-client-spawn-manager";
import { ACTOR_ID } from "./mock-constants";
import { MockCTime } from "./mock-ctime";
import { MockCEnvironment } from "./mock-environment";
import { MockFbox } from "./mock-fbox";
import { MockGameObject } from "./mock-game-object";
import { MockPatrol } from "./mock-patrol";
import { MockPhysicsWorld } from "./mock-physics-world";
import { MockVector } from "./mock-vector";
import { MockCUIDialogWnd } from "./ui/mock-cui-dialog-wnd";

/**
 * Mock of the X-Ray engine `level` namespace for jest/node.
 */
export const mockLevelInterface = {
  add_call: jest.fn() as unknown as IXR_level["add_call"],
  add_cam_effector2: jest.fn(() => 0),
  add_cam_effector: jest.fn(() => 0),
  add_complex_effector: jest.fn(),
  add_dialog_to_render: jest.fn(),
  add_pp_effector: jest.fn(),
  change_game_time: jest.fn(),
  check_object: jest.fn(),
  client_spawn_manager: jest.fn(() => MockClientSpawnManager.mock()),
  debug_actor: jest.fn(() => null),
  debug_object: jest.fn(() => null),
  disable_input: jest.fn(),
  enable_input: jest.fn(),
  environment: jest.fn(() => MockCEnvironment.mock()),
  game_id: jest.fn<IXR_level["game_id"]>(() => 1),
  get_active_cam: jest.fn(() => 0),
  get_actor_body_state: jest.fn(() => 0),
  get_actor_body_state_wishful: jest.fn(() => 0),
  get_bounding_volume: jest.fn(() => MockFbox.mock()),
  get_fov: jest.fn(() => 75),
  get_game_difficulty: jest.fn<IXR_level["get_game_difficulty"]>(() => 3),
  get_ph_time_factor: jest.fn(() => 1),
  get_snd_volume: jest.fn(() => 1),
  get_start_time: jest.fn(() => MockCTime.now()),
  get_target_dist: jest.fn(() => 0),
  get_target_element: jest.fn(() => 0),
  get_target_obj: jest.fn(() => null),
  get_time_days: jest.fn(() => 1),
  get_time_factor: jest.fn(() => 10),
  get_time_hours: jest.fn(() => 12),
  get_time_minutes: jest.fn(() => 30),
  get_weather: jest.fn(() => "default"),
  get_wfx_time: jest.fn(() => 0),
  hide_indicators: jest.fn(),
  hide_indicators_safe: jest.fn(),
  hide_minimap: jest.fn(),
  high_cover_in_direction: jest.fn(() => 0),
  is_wfx_playing: jest.fn(() => false),
  iterate_online_objects: jest.fn((cb: (object: game_object) => void) => {
    return [...MockGameObject.REGISTRY.entries()].forEach(([k, v]) => {
      if (v.id() !== ACTOR_ID) {
        cb(v);
      }
    });
  }),
  iterate_sounds: jest.fn() as unknown as IXR_level["iterate_sounds"],
  low_cover_in_direction: jest.fn(() => 0),
  main_input_receiver: jest.fn(() => MockCUIDialogWnd.mock()),
  map_add_object_spot: jest.fn(),
  map_add_object_spot_ser: jest.fn(),
  map_change_spot_hint: jest.fn(),
  map_has_object_spot: jest.fn(() => 0),
  map_remove_object_spot: jest.fn(),
  minimap_shown: jest.fn(() => false),
  name: jest.fn(() => "zaton") as unknown as IXR_level["name"],
  object_by_id: jest.fn<IXR_level["object_by_id"]>((id: number) => {
    const verifiedId: number = Number.parseInt(String(id));

    if (Number.isNaN(verifiedId)) {
      throw new Error("Received NaN for object_by_id getter.");
    }

    return MockGameObject.REGISTRY.get(verifiedId) ?? null;
  }),
  patrol_path_exists: jest.fn((name: string) => MockPatrol.has(name)),
  physics_world: jest.fn(() => MockPhysicsWorld.mock()),
  prefetch_sound: jest.fn(),
  present: jest.fn(() => true),
  rain_factor: jest.fn(() => 0),
  ray_pick: jest.fn(() => false),
  remove_call: jest.fn() as unknown as IXR_level["remove_call"],
  remove_calls_for_object: jest.fn(),
  remove_cam_effector: jest.fn(),
  remove_complex_effector: jest.fn(),
  remove_dialog_to_render: jest.fn(),
  remove_pp_effector: jest.fn(),
  send: jest.fn(),
  set_active_cam: jest.fn(),
  set_fov: jest.fn(),
  set_game_difficulty: jest.fn(),
  set_ph_time_factor: jest.fn((factor: number) => factor),
  set_pp_effector_factor: jest.fn(),
  set_snd_volume: jest.fn((volume: number) => {}),
  set_time_factor: jest.fn((_factor: number): void => {}),
  set_weather: jest.fn(),
  set_weather_fx: jest.fn(() => true),
  show_indicators: jest.fn(),
  show_minimap: jest.fn(),
  show_weapon: jest.fn(),
  spawn_item: jest.fn(),
  spawn_phantom: jest.fn(),
  start_stop_menu: jest.fn(),
  start_weather_fx_from_time: jest.fn(() => true),
  stop_weather_fx: jest.fn(),
  valid_vertex: jest.fn(() => true),
  vertex_id: jest.fn(() => -1),
  vertex_in_direction: jest.fn(() => -1),
  vertex_position: jest.fn(() => MockVector.create(15, 14, 16)),
} satisfies IXR_level;

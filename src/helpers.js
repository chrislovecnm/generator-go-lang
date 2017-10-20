import { spawnSync } from 'child_process';

export function spawnDep(args) {
  const { status } = spawnSync("dep", args);
  return status === 1;
}

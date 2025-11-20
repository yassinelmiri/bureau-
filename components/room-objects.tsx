'use client';

import { useWorkspace } from '@/context/workspace-context';
import RoomModel from './room-model';

export default function RoomObjects() {
  const { rooms } = useWorkspace();

  return (
    <>
      {rooms.map((room) => (
        <RoomModel key={room.id} room={room} />
      ))}
    </>
  );
}

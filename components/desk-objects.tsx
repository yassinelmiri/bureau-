'use client';

import { useWorkspace } from '@/context/workspace-context';
import DeskModel from './desk-model';

export default function DeskObjects() {
  const { desks } = useWorkspace();

  return (
    <>
      {desks.map((desk) => (
        <DeskModel key={desk.id} desk={desk} />
      ))}
    </>
  );
}

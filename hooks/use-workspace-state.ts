'use client';

import { useWorkspace } from '@/context/workspace-context';
import { useLanguage } from '@/context/language-context';

export function useWorkspaceState() {
  const workspace = useWorkspace();
  const language = useLanguage();

  const getDeskInfo = (deskId: string) => {
    const employee = workspace.employees.find(e => e.deskId === deskId);
    return {
      deskId,
      employee,
      isEmpty: !employee,
    };
  };

  const getRoomInfo = (roomId: string) => {
    const room = workspace.rooms.find(r => r.id === roomId);
    return {
      roomId,
      room,
      type: room?.type,
      status: room?.status,
    };
  };

  const getWorkspaceStats = () => {
    return {
      totalDesks: workspace.desks.length,
      occupiedDesks: workspace.employees.filter(e => e.status === 'occupied').length,
      availableDesks: workspace.employees.filter(e => e.status === 'available').length,
      outOfServiceDesks: workspace.employees.filter(e => e.status === 'out').length,
      totalEmployees: workspace.employees.length,
      totalKitchenItems: workspace.kitchenItems.length,
    };
  };

  return {
    ...workspace,
    getDeskInfo,
    getRoomInfo,
    getWorkspaceStats,
  };
}

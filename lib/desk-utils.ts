export function getDeskLabel(deskId: string): string {
  const parts = deskId.split('-');
  const number = parseInt(parts[parts.length - 1]);
  return `Desk ${number}`;
}

export function calculateDeskLayout(totalDesks: number) {
  const cols = Math.ceil(Math.sqrt(totalDesks));
  return {
    cols,
    rows: Math.ceil(totalDesks / cols),
    spacing: 3,
  };
}

export function getDeskGridPosition(index: number, layout: ReturnType<typeof calculateDeskLayout>) {
  return {
    x: (index % layout.cols) * layout.spacing,
    y: Math.floor(index / layout.cols) * layout.spacing,
  };
}

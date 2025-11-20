'use client';

import { useWorkspace } from '@/context/workspace-context';
import { useLanguage } from '@/context/language-context';
import { useAuth } from '@/context/auth-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

interface RoomPanelProps {
  roomId: string;
}

export default function RoomPanel({ roomId }: RoomPanelProps) {
  const { rooms, kitchenItems, setSelectedRoomId, updateRoomStatus, updateKitchenItem, addKitchenItem, removeKitchenItem } = useWorkspace();
  const { t } = useLanguage();
  const { isAdmin } = useAuth();
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [editingQuantity, setEditingQuantity] = useState('');
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');
  const [showAddItem, setShowAddItem] = useState(false);
  const [restroomStatus, setRestroomStatus] = useState('');

  const room = rooms.find(r => r.id === roomId);

  if (!room) return null;

  const getRoomTitle = (type: string) => {
    switch (type) {
      case 'kitchen': return t('kitchen.title');
      case 'meeting': return t('meeting.title');
      case 'restroom': return t('restroom.title');
      default: return room.type;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
      case 'ready': return 'bg-blue-100 text-blue-900';
      case 'occupied': return 'bg-red-100 text-red-900';
      case 'cleaning': return 'bg-yellow-100 text-yellow-900';
      default: return 'bg-blue-100 text-blue-900';
    }
  };

  const handleEditItem = (itemId: string, currentQuantity: number) => {
    setEditingItemId(itemId);
    setEditingQuantity(currentQuantity.toString());
  };

  const handleSaveItem = (itemId: string) => {
    const quantity = parseInt(editingQuantity);
    if (!isNaN(quantity) && quantity >= 0) {
      updateKitchenItem(itemId, quantity);
      setEditingItemId(null);
    }
  };

  const handleAddItem = () => {
    if (newItemName.trim() && newItemQuantity) {
      const quantity = parseInt(newItemQuantity);
      if (!isNaN(quantity) && quantity >= 0) {
        addKitchenItem({
          id: `kit-${Date.now()}`,
          name: newItemName,
          quantity,
        });
        setNewItemName('');
        setNewItemQuantity('');
        setShowAddItem(false);
      }
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle>{getRoomTitle(room.type)}</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedRoomId(null)}
          >
            ✕
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {room.type === 'kitchen' && (
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">{t('kitchen.items')}</h3>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {kitchenItems.map(item => (
                <div key={item.id} className="flex items-center justify-between p-2 bg-muted rounded">
                  {editingItemId === item.id ? (
                    <>
                      <span className="text-sm flex-1">{item.name}</span>
                      <Input
                        type="number"
                        value={editingQuantity}
                        onChange={(e) => setEditingQuantity(e.target.value)}
                        className="w-16 h-8 text-sm"
                        min="0"
                      />
                      {isAdmin && (
                        <div className="flex gap-1 ml-2">
                          <Button
                            size="sm"
                            variant="default"
                            className="h-8 w-8 p-0"
                            onClick={() => handleSaveItem(item.id)}
                          >
                            ✓
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 w-8 p-0"
                            onClick={() => setEditingItemId(null)}
                          >
                            ✕
                          </Button>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <span className="text-sm">{item.name}</span>
                      <div className="flex items-center gap-2 ml-2">
                        <span className="text-sm font-medium">{item.quantity}</span>
                        {isAdmin && (
                          <div className="flex gap-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0"
                              onClick={() => handleEditItem(item.id, item.quantity)}
                            >
                              ✎
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0 text-destructive"
                              onClick={() => removeKitchenItem(item.id)}
                            >
                              −
                            </Button>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {isAdmin && !showAddItem && (
              <Button
                size="sm"
                variant="outline"
                className="w-full mt-3"
                onClick={() => setShowAddItem(true)}
              >
                {t('button.add')} Item
              </Button>
            )}

            {isAdmin && showAddItem && (
              <div className="mt-3 p-3 border border-border rounded space-y-2">
                <Input
                  placeholder="Item name"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Quantity"
                  value={newItemQuantity}
                  onChange={(e) => setNewItemQuantity(e.target.value)}
                  min="0"
                />
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={handleAddItem}
                  >
                    Add
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setShowAddItem(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {room.type === 'restroom' && (
          <div>
            <label className="text-sm font-medium text-foreground">{t('restroom.title')} {t('desk.status')}</label>
            {isAdmin ? (
              <Select value={room.status} onValueChange={(value) => updateRoomStatus(room.id, value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">{t('restroom.available')}</SelectItem>
                  <SelectItem value="occupied">{t('restroom.occupied')}</SelectItem>
                  <SelectItem value="cleaning">{t('restroom.cleaning')}</SelectItem>
                </SelectContent>
              </Select>
            ) : (
              <div className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(room.status)}`}>
                {room.status}
              </div>
            )}
          </div>
        )}

        {room.type === 'meeting' && (
          <div>
            <label className="text-sm font-medium text-foreground">{t('meeting.title')} {t('desk.status')}</label>
            {isAdmin ? (
              <Select value={room.status} onValueChange={(value) => updateRoomStatus(room.id, value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">{t('desk.available')}</SelectItem>
                  <SelectItem value="occupied">{t('desk.occupied')}</SelectItem>
                </SelectContent>
              </Select>
            ) : (
              <div className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(room.status)}`}>
                {room.status}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

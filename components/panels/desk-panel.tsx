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
import { useState, useRef } from 'react';

interface DeskPanelProps {
  deskId: string;
}

export default function DeskPanel({ deskId }: DeskPanelProps) {
  const { employees, setSelectedDeskId, updateEmployee, removeEmployee } = useWorkspace();
  const { t } = useLanguage();
  const { isAdmin } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedStatus, setEditedStatus] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const employee = employees.find(e => e.deskId === deskId);

  const handlePhotoUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const photoData = e.target?.result as string;
      if (employee) {
        updateEmployee(employee.id, { photo: photoData });
      }
    };
    reader.readAsDataURL(file);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-primary/20 text-primary border-primary';
      case 'occupied': return 'bg-red-100 text-red-900 border-red-500';
      case 'out': return 'bg-muted text-muted-foreground border-border';
      default: return 'bg-primary/20 text-primary border-primary';
    }
  };

  const statusLabel = (status: string) => {
    switch (status) {
      case 'available': return t('desk.available');
      case 'occupied': return t('desk.occupied');
      case 'out': return t('desk.out');
      default: return status;
    }
  };

  const handleEdit = () => {
    if (employee) {
      setEditedName(employee.name);
      setEditedEmail(employee.email);
      setEditedStatus(employee.status);
      setIsEditing(true);
    }
  };

  const handleSave = () => {
    if (employee) {
      updateEmployee(employee.id, {
        name: editedName,
        email: editedEmail,
        status: editedStatus as 'available' | 'occupied' | 'out',
      });
      setIsEditing(false);
    }
  };

  if (!employee) {
    return (
      <Card className="border-2 border-border shadow-lg">
        <CardHeader className="bg-muted/50">
          <CardTitle>{t('desk.employee')}</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-muted-foreground">{t('message.noEmployee')}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedDeskId(null)}
            className="mt-4 w-full"
          >
            {t('button.close')}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-primary shadow-lg">
      <CardHeader className="pb-3 bg-gradient-to-r from-primary/10 to-accent/10 border-b-2 border-primary">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-primary">{employee.name}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">📍 {deskId}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedDeskId(null)}
            className="hover:bg-destructive/20"
          >
            ✕
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-4">
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-xl overflow-hidden border-3 border-primary shadow-md">
            {employee.photo ? (
              <img 
                src={employee.photo || "/placeholder.svg"} 
                alt={employee.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-5xl">
                {employee.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        </div>

        {!isEditing ? (
          <>
            <div>
              <label className="text-sm font-semibold text-foreground">{t('desk.email')}</label>
              <p className="text-sm text-muted-foreground mt-1">✉️ {employee.email}</p>
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground">{t('desk.status')}</label>
              <div className={`inline-block mt-2 px-4 py-2 rounded-full text-sm font-semibold border-2 ${getStatusColor(employee.status)}`}>
                ● {statusLabel(employee.status)}
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
              <Input
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
              <Input
                type="email"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">{t('desk.status')}</label>
              <Select value={editedStatus} onValueChange={setEditedStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">{t('desk.available')}</SelectItem>
                  <SelectItem value="occupied">{t('desk.occupied')}</SelectItem>
                  <SelectItem value="out">{t('desk.out')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )}

        {isAdmin && (
          <div className="pt-4 border-t-2 border-primary space-y-2">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handlePhotoUpload(file);
              }}
            />
            <Button
              size="sm"
              className="w-full bg-accent hover:bg-accent/90"
              onClick={() => fileInputRef.current?.click()}
            >
              {employee.photo ? '📸 Change Photo' : '📸 Upload Photo'}
            </Button>

            {employee.photo && (
              <Button
                size="sm"
                variant="ghost"
                className="w-full text-destructive hover:bg-destructive/20"
                onClick={() => updateEmployee(employee.id, { photo: undefined })}
              >
                Remove Photo
              </Button>
            )}

            {!isEditing ? (
              <>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full"
                  onClick={handleEdit}
                >
                  {t('button.edit')}
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  className="w-full"
                  onClick={() => {
                    removeEmployee(employee.id);
                    setSelectedDeskId(null);
                  }}
                >
                  {t('button.delete')}
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={handleSave}
                >
                  Save Changes
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

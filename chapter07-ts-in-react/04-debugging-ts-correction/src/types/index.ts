export type ActionSuccess<T> = {
  success: boolean;
} & T;

export type ActionError = {
  error: string | null;
};

export type AuthPayload = {
  user?: unknown;
  token?: string;
};
export type EventPayload = {
  message: string;
};

export type ActionResult<T> = ActionSuccess<T> | ActionError;

export type AuthActionResult = ActionResult<AuthPayload>;

export type CreateActionResult = ActionResult<EventPayload>;

export const isErrorResult = (data: unknown): data is ActionError =>
  !!data && typeof data === 'object' && 'error' in data && typeof data.error === 'string';

export const isSuccessResult = <T>(data: unknown): data is ActionSuccess<T> =>
  !!data && typeof data === 'object' && 'success' in data;

type DBEntry = {
  id: number;
  createdAt: string;
  updatedAt: string;
};

export type Event = DBEntry & {
  title: string;
  description: string;
  date: string;
  location: string;
  latitude: number;
  longitude: number;
  organizerId: number;
};

export type User = DBEntry & {
  name: string | null;
  email: string;
  isActive: boolean;
};

export type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
};

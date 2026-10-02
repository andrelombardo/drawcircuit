import { vi } from 'vitest';
vi.stubGlobal('localStorage', { getItem: () => null, setItem: () => {} });

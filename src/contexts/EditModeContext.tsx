import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";

const STORAGE_KEY = "portfolio_edits_v1";

type EditsMap = Record<string, string>;

interface EditModeContextValue {
  editMode: boolean;
  toggleEditMode: () => void;
  edits: EditsMap;
  getValue: (id: string, fallback: string) => string;
  setValue: (id: string, value: string) => void;
  resetAll: () => void;
}

const EditModeContext = createContext<EditModeContextValue | undefined>(undefined);

const loadEdits = (): EditsMap => {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as EditsMap) : {};
  } catch {
    return {};
  }
};

export const EditModeProvider = ({ children }: { children: ReactNode }) => {
  const [editMode, setEditMode] = useState(false);
  const [edits, setEdits] = useState<EditsMap>(() => loadEdits());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(edits));
    } catch {
      /* ignore */
    }
  }, [edits]);

  const toggleEditMode = useCallback(() => setEditMode((v) => !v), []);

  const getValue = useCallback(
    (id: string, fallback: string) => (edits[id] !== undefined ? edits[id] : fallback),
    [edits],
  );

  const setValue = useCallback((id: string, value: string) => {
    setEdits((prev) => ({ ...prev, [id]: value }));
  }, []);

  const resetAll = useCallback(() => {
    setEdits({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({ editMode, toggleEditMode, edits, getValue, setValue, resetAll }),
    [editMode, toggleEditMode, edits, getValue, setValue, resetAll],
  );

  return <EditModeContext.Provider value={value}>{children}</EditModeContext.Provider>;
};

export const useEditMode = () => {
  const ctx = useContext(EditModeContext);
  if (!ctx) throw new Error("useEditMode must be used inside EditModeProvider");
  return ctx;
};

import { ElementType, useEffect, useRef } from "react";
import { useEditMode } from "@/contexts/EditModeContext";
import { cn } from "@/lib/utils";

interface EditableTextProps {
  id: string;
  defaultValue: string;
  as?: ElementType;
  multiline?: boolean;
  className?: string;
}

/**
 * Renders text that becomes inline-editable when global edit mode is on.
 * Edits are persisted to localStorage via EditModeContext.
 */
const EditableText = ({
  id,
  defaultValue,
  as: Tag = "span",
  multiline = false,
  className,
}: EditableTextProps) => {
  const { editMode, getValue, setValue } = useEditMode();
  const ref = useRef<HTMLElement | null>(null);
  const value = getValue(id, defaultValue);

  // Sync external changes (e.g., reset) into the DOM only when not focused.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (document.activeElement === el) return;
    if (el.textContent !== value) el.textContent = value;
  }, [value]);

  const handleBlur = () => {
    const el = ref.current;
    if (!el) return;
    const next = (el.textContent || "").replace(/\u00A0/g, " ");
    if (next !== value) setValue(id, next);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (!multiline && e.key === "Enter") {
      e.preventDefault();
      (e.target as HTMLElement).blur();
    }
    if (e.key === "Escape") {
      e.preventDefault();
      (e.target as HTMLElement).blur();
    }
  };

  return (
    <Tag
      ref={ref as never}
      className={cn(
        className,
        editMode &&
          "outline-dashed outline-2 outline-offset-2 outline-primary/60 rounded-sm cursor-text hover:outline-primary focus:outline-solid focus:outline-accent",
      )}
      contentEditable={editMode}
      suppressContentEditableWarning
      onBlur={editMode ? handleBlur : undefined}
      onKeyDown={editMode ? handleKeyDown : undefined}
      spellCheck={editMode}
    >
      {value}
    </Tag>
  );
};

export default EditableText;

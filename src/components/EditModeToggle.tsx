import { Pencil, Check, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEditMode } from "@/contexts/EditModeContext";
import { toast } from "@/hooks/use-toast";

const EditModeToggle = () => {
  const { editMode, toggleEditMode, resetAll, edits } = useEditMode();

  const handleToggle = () => {
    toggleEditMode();
    toast({
      title: editMode ? "Edits saved" : "Edit mode enabled",
      description: editMode
        ? "Your changes are stored in this browser."
        : "Click any highlighted text to edit it. Press Enter or click outside to save.",
    });
  };

  const handleReset = () => {
    if (Object.keys(edits).length === 0) return;
    resetAll();
    toast({ title: "Reset complete", description: "All text restored to defaults." });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 no-print">
      {editMode && Object.keys(edits).length > 0 && (
        <Button
          size="sm"
          variant="outline"
          onClick={handleReset}
          className="gap-2 backdrop-blur-md bg-card/80 border-border/60"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      )}
      <Button
        size="lg"
        onClick={handleToggle}
        className={
          editMode
            ? "gap-2 bg-primary text-primary-foreground btn-glow"
            : "gap-2 bg-card/80 backdrop-blur-md text-foreground border border-border/60 hover:border-primary/60 hover:text-primary"
        }
        aria-label={editMode ? "Save edits" : "Enable edit mode"}
      >
        {editMode ? <Check className="h-5 w-5" /> : <Pencil className="h-5 w-5" />}
        {editMode ? "Done editing" : "Edit text"}
      </Button>
    </div>
  );
};

export default EditModeToggle;

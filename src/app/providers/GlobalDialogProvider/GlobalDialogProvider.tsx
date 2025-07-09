import { GlobalDialogContext } from "@app/providers/GlobalDialogProvider/GlobalDialogContext";
import type { DialogConfig } from "@app/providers/GlobalDialogProvider/GlobalDialogProvder.types";
import { Button, DialogActions, DialogBody, DialogSurface, DialogTitle } from "@fluentui/react-components";
import { useCallback, useEffect, useState } from "react";

export const GlobalDialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [dialogConfig, setDialogConfig] = useState<DialogConfig | null>(null);
  const [open, setOpen] = useState(false);

  const showDialog = useCallback((config: DialogConfig) => {
    setDialogConfig(config);
    setOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setOpen(false);
    dialogConfig?.onCancel?.();
  }, [dialogConfig]);

  const handleConfirm = () => {
    dialogConfig?.onConfirm?.();
    setOpen(false);
  };

  useEffect(() => {
    if (dialogConfig?.autoClose && dialogConfig.duration) {
      const timer = setTimeout(() => setOpen(false), dialogConfig.duration);
      return () => clearTimeout(timer);
    }
  }, [dialogConfig, open]);

  return (
    <GlobalDialogContext.Provider value={{ showDialog, closeDialog }}>
      {children}

      {open && dialogConfig && (
        <>
          <DialogSurface style={dialogConfig.style}>
            <DialogBody>
              <DialogTitle>{dialogConfig.title}</DialogTitle>
              <div className="col-span-2 w-full py-2">{dialogConfig.content}</div>
              <DialogActions>
                {dialogConfig.cancelText && (
                  <Button onClick={closeDialog} appearance="secondary">
                    {dialogConfig.cancelText}
                  </Button>
                )}
                {dialogConfig.confirmText && (
                  <Button onClick={handleConfirm} appearance="primary">
                    {dialogConfig.confirmText}
                  </Button>
                )}
              </DialogActions>
            </DialogBody>
          </DialogSurface>
        </>
      )}
    </GlobalDialogContext.Provider>
  );
};

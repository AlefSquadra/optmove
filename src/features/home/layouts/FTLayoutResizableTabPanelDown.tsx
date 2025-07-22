import { useFTLayout } from "@features/home/providers/HomeFTLayoutProvider/useFtLayout";
import { Button, DrawerBody, DrawerHeader, DrawerHeaderTitle, OverlayDrawer } from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

interface FTLayoutResizableTabPanelDownProps {
  children?: React.ReactNode;
  className?: string;
  initialHeight?: number;
  minHeight?: number;
  maxHeight?: number;
}

const FTLayoutResizableTabPanelDown = ({ children }: FTLayoutResizableTabPanelDownProps) => {
  const { isOpenPanelTabBarDown: isPanelOpen, setIsPanelOpenDown } = useFTLayout();

  if (!isPanelOpen) return null;

  return (
    <OverlayDrawer position="bottom" open={isPanelOpen} modalType="non-modal">
      <DrawerHeader>
        <DrawerHeaderTitle
          action={
            <Button
              appearance="subtle"
              aria-label="Close"
              onClick={() => {
                setIsPanelOpenDown(false);
              }}
              icon={<Dismiss24Regular />}
            />
          }
        />
      </DrawerHeader>
      <DrawerBody>{children}</DrawerBody>
    </OverlayDrawer>
  );
};

export { FTLayoutResizableTabPanelDown };

import {
  DialogActions,
  type DialogActionsProps,
  DialogBody,
  type DialogBodyProps,
  DialogSurface,
  type DialogSurfaceProps,
  DialogTitle,
  type DialogTitleProps,
} from "@fluentui/react-components";

const OptDialogActions = (props: DialogActionsProps) => {
  return <DialogActions {...props} />;
};

const OptDialogBody = (props: DialogBodyProps) => {
  return <DialogBody {...props} />;
};

const OptDialogSurface = (props: DialogSurfaceProps) => {
  return <DialogSurface {...props} />;
};

const OptDialogTitle = (props: DialogTitleProps) => {
  return <DialogTitle {...props} />;
};

export { OptDialogActions, OptDialogBody, OptDialogSurface, OptDialogTitle };

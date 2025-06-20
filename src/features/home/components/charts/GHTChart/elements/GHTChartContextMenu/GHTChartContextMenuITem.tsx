import clsx from "clsx";

const MenuItem = ({ item, data, onAction, onClose }) => {
  const { id, label, icon, shortcut, action, disabled } = item;

  const handleClick = () => {
    if (!disabled) {
      onAction(action || id, data);
      onClose();
    }
  };

  return (
    <div
      className={clsx(
        "px-4 py-2 text-sm",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-gray-100",
      )}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {icon && <span className={clsx("mr-2", disabled ? "text-gray-300" : "text-gray-500")}>{icon}</span>}
          <span className={disabled ? "text-gray-300" : ""}>{label}</span>
        </div>
        {shortcut && <span className={clsx("text-xs", disabled ? "text-gray-300" : "text-gray-500")}>{shortcut}</span>}
      </div>
    </div>
  );
};

export { MenuItem };

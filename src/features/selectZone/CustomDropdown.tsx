import { Checkmark20Regular, ChevronDown20Regular, Dismiss12Regular } from "@fluentui/react-icons";
import React, { useState } from "react";

export interface DropdownOption {
  id: string;
  name: string;
}

export interface CustomDropdownProps {
  value?: DropdownOption | DropdownOption[] | string;
  onOptionSelect?: (option: DropdownOption | DropdownOption[]) => void;
  options: DropdownOption[];
  placeholder?: string;
  multiple?: boolean;
  disabled?: boolean;
  error?: boolean;
  className?: string;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  value,
  onOptionSelect,
  options,
  placeholder = "Selecione uma opção",
  multiple = false,
  disabled = false,
  error = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const getCurrentValue = (): DropdownOption[] => {
    if (!value) return [];
    if (typeof value === "string") {
      const found = options.find((opt) => opt.id === value);
      return found ? [found] : [];
    }
    if (Array.isArray(value)) {
      return value;
    }
    return [value];
  };

  const currentValue = getCurrentValue();

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(`[data-dropdown="${className}"]`)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, className]);

  const handleOptionClick = (option: DropdownOption) => {
    if (multiple) {
      const isSelected = currentValue.some((v) => v.id === option.id);
      let newValue: DropdownOption[];
      if (isSelected) {
        newValue = currentValue.filter((v) => v.id !== option.id);
      } else {
        newValue = [...currentValue, option];
      }
      onOptionSelect?.(newValue);
    } else {
      onOptionSelect?.(option);
      setIsOpen(false);
      setIsFocused(false);
    }
  };

  const removeChip = (optionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (multiple) {
      const newValue = currentValue.filter((v) => v.id !== optionId);
      onOptionSelect?.(newValue);
      setIsFocused(false);
    }
  };

  const getDisplayText = () => {
    if (currentValue.length === 0) return placeholder;
    if (!multiple) return currentValue[0]?.name || placeholder;
    return "";
  };

  const isOptionSelected = (option: DropdownOption) => {
    return currentValue.some((v) => v.id === option.id);
  };

  return (
    <div className={`relative ${className}`} data-dropdown={className}>
      {/* Container principal com border-bottom animado */}
      <div className="relative">
        {/* Dropdown Button */}
        <button
          type="button"
          onClick={() => {
            if (!disabled) {
              setIsOpen(!isOpen);
              setIsFocused(true);
            }
          }}
          onFocus={() => {
            if (!disabled) setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          className={`relative flex min-h-[32px] w-full items-center justify-between gap-2 bg-transparent text-left text-sm font-normal outline-none ${
            disabled ? "cursor-not-allowed bg-gray-50 text-gray-400" : "cursor-pointer text-gray-900"
          }`}
          style={{
            color: "var(--colorNeutralForeground1)",
            padding: "5px 10px 5px 12px",
            borderRadius: "4px",
            border: "var(--strokeWidthThin) solid var(--colorNeutralStroke1)",
            borderBottom: `var(--strokeWidthThin) solid var(--colorNeutralStrokeAccessible)`,
            transition: "border-color 150ms ease",
          }}
        >
          <div className="flex min-h-[20px] flex-1 flex-wrap items-center gap-1">
            {multiple && currentValue.length > 0 ?
              <>
                {currentValue.map((item) => (
                  <span
                    key={item.id}
                    className="inline-flex max-w-[140px] items-center gap-1 rounded-[var(--borderRadiusCircular)] border border-blue-200 bg-[var(--colorBrandBackground)] px-2 py-0.5 text-xs text-[var(--colorNeutralForegroundOnBrand)]"
                  >
                    <span className="truncate">{item.name}</span>
                    <button
                      type="button"
                      onClick={(e) => removeChip(item.id, e)}
                      className="flex h-3 w-3 flex-shrink-0 items-center justify-center rounded transition-colors hover:bg-blue-200"
                    >
                      <Dismiss12Regular />
                    </button>
                  </span>
                ))}
                {currentValue.length === 0 && <span className="text-sm text-gray-500">{placeholder}</span>}
              </>
            : <span
                className={`truncate text-sm ${
                  currentValue.length === 0 ?
                    disabled ? "text-gray-400"
                    : "text-gray-500"
                  : disabled ? "text-gray-400"
                  : "text-gray-900"
                }`}
              >
                {getDisplayText()}
              </span>
            }
          </div>

          <ChevronDown20Regular
            className={`flex-shrink-0 text-gray-600 transition-transform duration-150 ${
              isOpen ? "rotate-180" : ""
            } ${disabled ? "text-gray-400" : ""}`}
          />
        </button>

        {/* Borda animada - cresce do centro para as extremidades */}
        <div
          className="absolute bottom-0 left-1/2 h-0.5 transition-all duration-150 ease-out"
          style={{
            backgroundColor: error ? "#A4262C" : "#0078D4",
            width: isFocused || isOpen ? "100%" : "0%",
            transform: "translateX(-50%)",
          }}
        />

        {/* Halo de foco - sombra azul suave */}
        {(isFocused || isOpen) && (
          <div
            className="absolute right-0 bottom-0 left-0 h-px transition-opacity duration-150"
            style={{
              boxShadow: `0 1px 0 0 ${error ? "rgba(164,38,44,0.3)" : "rgba(0,120,212,0.3)"}`,
              opacity: isFocused || isOpen ? 1 : 0,
            }}
          />
        )}
      </div>

      {/* Dropdown Menu */}
      {isOpen && !disabled && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-sm border border-gray-200 bg-white shadow-lg">
          {options.length === 0 ?
            <div className="px-3 py-2 text-sm text-gray-500">Nenhuma opção disponível</div>
          : options.map((option) => {
              const isSelected = isOptionSelected(option);
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleOptionClick(option)}
                  className={`relative w-full cursor-pointer border-0 px-3 py-2 text-left text-sm transition-colors duration-150 outline-none hover:bg-gray-50 ${
                    isSelected ? "bg-blue-50 text-blue-700" : "text-gray-900"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">{option.name}</span>
                    {isSelected && <Checkmark20Regular />}
                  </div>
                </button>
              );
            })
          }
        </div>
      )}
    </div>
  );
};

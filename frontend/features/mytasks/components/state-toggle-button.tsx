"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";

interface StateToggleButtonProps {
  buttonText?: string;
  onToggle?: (isToggled: boolean) => void;
  className?: string;
  disabled?: boolean;
}

export default function StateToggleButton({
  buttonText = "Toggle",
  onToggle,
  className = "",
  disabled = false,
}: StateToggleButtonProps) {
  const [showToggle, setShowToggle] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    if (disabled) return;

    const newToggleState = !showToggle;
    setShowToggle(newToggleState);

    if (onToggle) {
      onToggle(newToggleState);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`flex items-center space-x-2 relative ${className}`}
    >
      <Button onClick={handleButtonClick} disabled={disabled}>
        {buttonText}
      </Button>

      {showToggle && !disabled && (
        <div className="flex flex-col gap-2 absolute z-10 left-20 mt-2 w-64 p-4 bg-white shadow-lg rounded-lg border">
          <Button>Todo</Button>
          <Button>In Progress</Button>
          <Button>Done</Button>
        </div>
      )}
    </div>
  );
}

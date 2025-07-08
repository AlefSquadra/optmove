import { useEffect, useRef, useState } from "react";

type KeyHandler = (event: KeyboardEvent) => void;

class KeyPressChain {
  ctrlPressed = false;
  shiftPressed = false;
  altPressed = false;
  metaPressed = false;
  keyName: string | null = null;
  onDownHandler: KeyHandler | null = null;
  onUpHandler: KeyHandler | null = null;
  enabled = true;
  lastPressedKey: string | null = null;

  constructor(setPressedKey: (k: string | null) => void) {
    this.setPressedKey = setPressedKey;
  }

  setPressedKey: (k: string | null) => void;

  ctrl() {
    this.ctrlPressed = true;
    return this;
  }
  shift() {
    this.shiftPressed = true;
    return this;
  }
  alt() {
    this.altPressed = true;
    return this;
  }
  meta() {
    this.metaPressed = true;
    return this;
  }
  key(key: string) {
    this.keyName = key;
    return this;
  }
  onDown(fn: KeyHandler) {
    this.onDownHandler = fn;
    return this;
  }
  onUp(fn: KeyHandler) {
    this.onUpHandler = fn;
    return this;
  }
  enable(val = true) {
    this.enabled = val;
    return this;
  }
  current() {
    return this.lastPressedKey;
  }
}

export function useKeyPress() {
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const chainRef = useRef<KeyPressChain>();

  if (!chainRef.current) {
    chainRef.current = new KeyPressChain(setPressedKey);
  }

  useEffect(() => {
    const chain = chainRef.current!;
    function match(e: KeyboardEvent) {
      if (!chain.enabled) return false;
      if (chain.ctrlPressed && !e.ctrlKey) return false;
      if (chain.shiftPressed && !e.shiftKey) return false;
      if (chain.altPressed && !e.altKey) return false;
      if (chain.metaPressed && !e.metaKey) return false;
      if (chain.keyName && e.key !== chain.keyName) return false;
      return true;
    }

    function handleDown(e: KeyboardEvent) {
      setPressedKey(e.key);
      chain.lastPressedKey = e.key;
      if (match(e) && chain.onDownHandler) chain.onDownHandler(e);
    }
    function handleUp(e: KeyboardEvent) {
      setPressedKey(null);
      chain.lastPressedKey = null;
      if (match(e) && chain.onUpHandler) chain.onUpHandler(e);
    }

    window.addEventListener("keydown", handleDown);
    window.addEventListener("keyup", handleUp);

    return () => {
      window.removeEventListener("keydown", handleDown);
      window.removeEventListener("keyup", handleUp);
    };
  }, []);

  // "current" sempre retorna a tecla pressionada
  chainRef.current.current = () => pressedKey;

  return chainRef.current;
}

import { useMemo, useState } from "react";

interface PatternOptions {
  placeholder?: string | undefined;
}

interface RegExpMapProps {
  [key: string]: RegExp;
}

const regexMap: RegExpMapProps = {
  "9": new RegExp(/[0-9]/),
  A: new RegExp(/[a-zA-Z]/),
  S: new RegExp(/[0-9a-zA-Z]/),
};

const unMask = (value: string) => value.replace(/\W/g, "");

const masker = (value: string, pattern: string, options?: PatternOptions) => {
  const patternCharList = pattern.split("");
  const unmaskedValue = unMask(String(value));
  const output: string[] = [];
  let valueIndex = 0;

  if (pattern === "") return value;

  for (let i = 0; i < patternCharList.length; i++) {
    const patternChar = pattern[i];
    const valueChar = unmaskedValue[valueIndex];
    const regex = regexMap[patternChar];

    if (valueChar === patternChar) {
      output[i] = valueChar;
      valueIndex++;
      continue;
    }

    if (!regex) {
      output[i] = patternChar;
      continue;
    }

    if (valueChar && regex.test(valueChar)) {
      output[i] = valueChar;
      valueIndex++;
      continue;
    }

    if (options?.placeholder) {
      output[i] = options.placeholder;
      continue;
    }

    if (output.length < patternCharList.length && /\W/.test(output[output.length - 1])) {
      output.pop();
    }
    break;
  }

  return output.join("");
};

const multiMasker = (value: string, patterns: string[], options?: PatternOptions) =>
  masker(
    value,
    patterns.reduce((memo, pattern) => (value.length <= unMask(memo).length ? memo : pattern), patterns[0]),
    options,
  );

const mask = (value: string, pattern: string | string[], options?: PatternOptions): string =>
  typeof pattern === "string" ? masker(value, pattern || "", options) : multiMasker(value, pattern, options);

export const useMask = (initialValue: string, pattern: string | string[], options?: PatternOptions) => {
  const [value, setValue] = useState(initialValue);

  const maskedValue = useMemo(() => {
    return mask(value, pattern, options);
  }, [value, pattern, options]);

  return { maskedValue, setValue };
};

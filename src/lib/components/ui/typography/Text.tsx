import React from "react";
import { Body } from "./Body";
import { Field } from "./Field";
import { Headline } from "./Headline";
import { Label } from "./Label";

export interface ITextProps {
  className?: string;
  children: React.ReactNode;
}

export const Text = {
  Body,
  Headline,
  Field,
  Label,
};

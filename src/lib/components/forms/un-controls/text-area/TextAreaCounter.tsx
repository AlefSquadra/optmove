import { Text } from "../../../ui/typography";

export interface ITextAreaCounterProps {
  readonly value?: string;
  maxLength?: number;
  message?: string;
  required?: boolean;
  hasError?: boolean;
}

export const TextAreaCounter = ({ value, maxLength, required = true, message, hasError }: ITextAreaCounterProps) => {
  const count = value?.length || 0;

  return (
    <section className="flow-root">
      {hasError && (
        <Text.Field variant="2" className="mt-1 text-sm text-red-600">
          {message}
        </Text.Field>
      )}
      <span className="text-neutral_grey float-right justify-end text-end font-roboto text-[12px] font-normal">
        {`${count}/${maxLength}`}
      </span>
    </section>
  );
};

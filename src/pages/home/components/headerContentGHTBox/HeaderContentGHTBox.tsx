import { Text } from "@optmove/design-system";

interface IHeaderContentGHTBoxProps {}

const HeaderContentGHTBox = (props: IHeaderContentGHTBoxProps) => {
  const {} = props;

  return (
    <>
      <div className="grid w-full grid-cols-12 grid-rows-[32px] bg-yellow-50">
        <Text.Label
          variant="1"
          className="col-span-12 col-start-1 row-start-1 flex items-center justify-center !font-bold text-blue-primary"
        >
          ICZ_ISN Baixada conceição santos
        </Text.Label>
        <div className="col-start-1 row-start-1 flex w-auto items-center justify-center pl-2">
          <Text.Label variant="1" className="flex cursor-pointer items-center gap-1 whitespace-nowrap">
            <input type="checkbox" className="w-[20px]" />
            Programar somente este painel
          </Text.Label>
        </div>
      </div>
    </>
  );
};

export { HeaderContentGHTBox };

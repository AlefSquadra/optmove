import { GroupBoxFieldset } from "../../../../shared/components/GroupBoxFieldset/GroupBoxFieldset";

interface IGraphicCoordinatesFieldsetGroupBoxProps {}

const GraphicCoordinatesFieldsetGroupBox = (props: IGraphicCoordinatesFieldsetGroupBoxProps) => {
  const {} = props;

  return (
    <>
      <GroupBoxFieldset.Root className="col-start-11 col-end-12 h-full min-h-20 items-center justify-start">
        <GroupBoxFieldset.Legend>Coordenadas gráfico</GroupBoxFieldset.Legend>
        SB: Fora do painel
      </GroupBoxFieldset.Root>
    </>
  );
};

export { GraphicCoordinatesFieldsetGroupBox };

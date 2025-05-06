import { Button, Modal } from "@optmove/design-system";

interface ITesteModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const TesteModal = (props: ITesteModalProps) => {
  const { isOpen, setIsOpen } = props;

  return (
    <Modal.Root isOpen={isOpen} onClose={() => setIsOpen(false)} width="50%" height="50%">
      <Modal.Header title="OptMove GHP - Parâmetros do sistema" onClose={() => setIsOpen(false)} />

      <Modal.Body>
        {Array.from({ length: 2 }, (_) => (
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos necessitatibus eius labore, asperiores quasi
            neque consequuntur aliquid dolor soluta, assumenda facilis sit cumque corrupti voluptas non sint maiores,
            molestias explicabo.
          </div>
        ))}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="text" onClick={() => setIsOpen(false)}>
          Cancelar
        </Button>
        <Button className="rounded-lg bg-blue px-12 py-3 font-roboto text-[16px] font-normal text-white shadow transition-all duration-150 ease-linear hover:shadow-lg">
          Salvar
        </Button>
      </Modal.Footer>
    </Modal.Root>
  );
};

export { TesteModal };

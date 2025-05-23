import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from ".";
import { OptButton } from "../../../ui";

const meta = {
  title: "Modals/Modal",
  tags: ["autodocs"],
  component: Modal.Root,
} satisfies Meta<typeof Modal.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    height: "50%",
    width: "50%",
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <div className="flex h-screen items-center justify-center">
        <OptButton onClick={() => setIsOpen(true)}>Abrir Modal</OptButton>

        <Modal.Root {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Header title="Manutenção de parâmetro" onClose={() => setIsOpen(false)} />

          <Modal.Body>
            {Array.from({ length: 10 }, (_, index) => (
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos necessitatibus eius labore, asperiores
                quasi neque consequuntur aliquid dolor soluta, assumenda facilis sit cumque corrupti voluptas non sint
                maiores, molestias explicabo.
              </div>
            ))}
          </Modal.Body>

          <Modal.Footer>
            <OptButton variant="text" onClick={() => setIsOpen(false)}>
              Cancelar
            </OptButton>
            <OptButton className="rounded-lg bg-blue px-12 py-3 font-roboto text-[16px] font-normal text-white shadow transition-all duration-150 ease-linear hover:shadow-lg">
              Salvar
            </OptButton>
          </Modal.Footer>
        </Modal.Root>
      </div>
    );
  },
};

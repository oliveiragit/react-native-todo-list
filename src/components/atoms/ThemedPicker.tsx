import * as React from "react";
import { Pressable } from "react-native";

import * as Atoms from "~/components/atoms";
import * as Molecules from "~/components/molecules";
import * as Templates from "~/components/templates";

type Item = { label: string; value: string; Icon?: React.FC };

type ThemedPickerProps = {
  list: Item[];
  onClose: VoidFunction;
  onValueChange: (itemValue: string) => void;
  selected: string;
};

const ThemedPicker = React.forwardRef<
  Templates.BottomSheetMethods,
  ThemedPickerProps
>(({ list, onValueChange, onClose, selected }, modalRef) => {
  return (
    <Templates.ThemedModal onClose={onClose} ref={modalRef}>
      <Molecules.ModalHeader title="Escolha entre:" />
      <Atoms.ThemedView className="justify-between bg-gray-200 dark:bg-gray-50 gap-0.5">
        {list.map(({ value, label, Icon }) => (
          <Pressable
            key={value}
            onPress={() => {
              onValueChange(value);
            }}
          >
            <Atoms.ThemedView
              className={`flex-row justify-between p-4 align-center ${
                selected === value ? "text-primary dark:text-primary" : ""
              }`}
            >
              <Atoms.ThemedText>{label}</Atoms.ThemedText>
              {Icon && <Icon />}
            </Atoms.ThemedView>
          </Pressable>
        ))}
      </Atoms.ThemedView>
    </Templates.ThemedModal>
  );
});

export { ThemedPicker };

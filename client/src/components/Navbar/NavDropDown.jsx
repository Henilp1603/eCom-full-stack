import {DropdownMenu} from "@radix-ui/themes";
import React from "react";

export default function NavDropDown({navItem}) {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>{navItem}</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Category 1</DropdownMenu.Item>
          <DropdownMenu.Item>Category 2</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
}

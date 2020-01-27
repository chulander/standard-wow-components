import React, { useMemo } from "react";
import styled from "styled-components";
import Button from "@argodigital/ui-toolkit/dist/Button";

export function MagicButton({ className, children }) {
  return (
    <Button theme="secondary">
      <Button.Text>{children}</Button.Text>
    </Button>
  );
}

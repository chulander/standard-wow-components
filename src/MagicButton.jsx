import React, { useMemo } from "react";
import styled from "styled-components";
import Button from "@argodigital/ui-toolkit/dist/Button";

export function MagicButton({ className, children }) {
  return (
    <Button theme="alternate">
      <Button.Text>{children}</Button.Text>
    </Button>
  );
}

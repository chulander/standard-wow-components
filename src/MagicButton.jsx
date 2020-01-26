import React, { useMemo } from "react";
import styled from "styled-components";

export function MagicButton({ className, value }) {
  const Button = useMemo(
    () => styled.button`
      background-color: blue;
      color: red;
    `,
    []
  );
  return <Buton className={className}>{value}</Buton>;
}

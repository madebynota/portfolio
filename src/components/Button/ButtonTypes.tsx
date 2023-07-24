import React from "react";

type ButtonTypes = 'outline' | 'solid';

export type ButtonProps = {
  /**
   * The label for the button
   */
  buttonLabel: string;

  /**
   * Custom class(es) to apply
   */
  className?: string;

  /**
   * The type of button, defaults to 'solid'
   * 
   * Supported types: 'outline' | 'solid'
   */
  type?: ButtonTypes;

  /**
   * Callback function to call when there is a button click
   * 
   * @returns
   */
  onClick: VoidFunction;
} & React.HTMLProps<HTMLDivElement>;

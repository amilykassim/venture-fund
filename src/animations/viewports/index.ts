import { RefObject } from "react";

interface ViewportOptions {
  root?: RefObject<Element>;
  once?: boolean;
  margin?: string;
  amount?: "some" | "all" | number;
}

interface customViewportProps {
  (amount: ViewportOptions["amount"], once: ViewportOptions["once"]): {
    amount: ViewportOptions["amount"];
    once: ViewportOptions["once"];
  };
}

export const allOnceViewport: ViewportOptions = { amount: "all", once: true };
export const someOnceViewport: ViewportOptions = { amount: "some", once: true };
export const halfOnceViewport: ViewportOptions = { amount: 0.7, once: true };
export const allInfinityViewport: ViewportOptions = { amount: "all" };
export const someInfinityViewport: ViewportOptions = { amount: "some" };
export const customViewport: customViewportProps = (amount, once) => ({
  amount,
  once,
});

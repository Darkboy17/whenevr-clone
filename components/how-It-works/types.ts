import type { serviceRows } from "./constants";

/**
 * Types for the How It Works component. These are separated from the main
 * component file to keep it focused on the UI logic.
 */
export type ServiceRow = (typeof serviceRows)[number];

export type StepCardData = {
    title: string;
    description: string;
};
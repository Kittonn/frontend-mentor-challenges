import { writable } from "svelte/store";
import data from "../../data.json";

export const store = writable(data);
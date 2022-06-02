import { writable } from "svelte/store";
import type { dataArrI } from "$lib/Interface/interface";

const data:dataArrI[] = []
export const data_store = writable(data);
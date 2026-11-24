import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "Sorry I'm late — I auto-scheduled the deadline for 'tomorrow' and my calendar and I have agreed to disagree about what day it is.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);

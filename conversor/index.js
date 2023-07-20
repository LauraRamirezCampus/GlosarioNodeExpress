import { dolarAeuro, dolarAlibra } from "./conversor-js";

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await  rl.question('dolares a cambiar: ') ;
const Answers= Number (answer);
console.log(dolarAeuro(Answers));
console.log( dolarAlibra(Answers));
rl.close();
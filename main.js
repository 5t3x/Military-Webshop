import Higlight from "./Highlight.js";
import Kategoria from "./Kategoria.js";
import ScrollToTopButton from './Gomb.js';
import Termekek from "./Termekek.js";
import { Kosar } from "./Kosar.js";

const kategoria = new Kategoria();
const higlight = new Higlight();
const termek = new Termekek();
const kosar =new Kosar();

kategoria.megjelenit();
ScrollToTopButton();


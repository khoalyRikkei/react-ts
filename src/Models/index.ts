import { accountsDB } from "./accountsDB";

const accounts = localStorage.getItem("accounts");

if (!accounts) {
  localStorage.setItem("accounts", JSON.stringify(accountsDB));
}

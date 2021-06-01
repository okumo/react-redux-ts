import { ActionType } from "../action-types";

interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: number
}

interface WithDrawAction {
    type: ActionType.WITHDRAW,
    payload: number
}

interface BankruptAction {
    type: ActionType.BANKRUPT,
    payload: number
}

export type Action = DepositAction | WithDrawAction | BankruptAction
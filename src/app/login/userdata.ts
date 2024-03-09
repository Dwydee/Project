export interface Buyer {
    username: string;
    email: string;
    password: string;
    token: string;
}

export interface BuyerCredentials {
    username: string;
    email?: string;
    password: string;
    token?: string;
}
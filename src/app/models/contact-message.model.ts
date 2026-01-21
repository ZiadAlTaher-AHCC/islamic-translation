export interface ContactMessage {
    name: string;
    email: string;
    address: string;
    message: string;
    isActive?: boolean; // Default to true if not provided 
}

export interface IUser {
    id: number;
    name: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface UserFormProps {
    initialData?: IUser | null;
    onSubmit: (user: IUser) => void;
    onCancel: () => void;
    isOpen: boolean;
    isLoading?: boolean;
}

export interface UserDetailsProps {
    user: IUser;
    isOpen: boolean;
    onClose: () => void;
}

export interface DeleteConfirmationProps {
    user: IUser;
    isOpen: boolean;
    onConfirm: () => Promise<void> | void;
    onCancel: () => void;
    isLoading?: boolean;
}
export interface IToken{
    token: string
}
export type CreateUserRequestPayload = {
    name: string;
    job: string;
  };
  
  export type CreateUserSuccessPayload = {
    name: string;
    job: string;
    id: string;
    createdAt: string;
  };
  
  export type ModifyUserRequestPayload = {
    userId: string;
    name: string;
    job: string;
  };
  
  export type ModifyUserSuccessPayload = {
    name: string;
    job: string;
    updatedAt: string;
  };
  
  export type UserLogin = {
    // dataLogin:{
      email: string;
      password: string
    // }
  }
  export type DeleteUserRequestPayload = {
    userId: string;
  };
  
  export type UsersRequestPayload = {
    pageParam?: number;
    per_page?: number;
  };
  
  export type UsersSuccessPayload = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data?: User[] | null;
    support: Support;
  };
  
  export type UserDetailsRequestPayload = {
    userId: number;
  };
  
  export type UserDetailsSuccessPayload = {
    data: User;
    support: Support;
  };
  
  export type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  
  export type Support = {
    url: string;
    text: string;
  };
  import { NavigationProp, StackActionType } from '@react-navigation/native';

export type NavigateProps = {
  (name: string, params?: unknown): void;
};

export type GenericNavigationProps = {
  navigate: NavigateProps;
  setOptions: (options: Partial<unknown>) => void;
  goBack: () => StackActionType;
};
export type registerData = {
  fullName: {
      firstName: string,
      lastName: string
  }
  phone: string;
  email: string;
  password: string;
  role: string
}   
export type errorMessage = {
  title: string;
  password: string;
}
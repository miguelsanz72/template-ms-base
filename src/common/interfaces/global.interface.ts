export interface IFile {
    id          : string;
    url?        : string;
    name        : string;
    key?        : string;
    extension?  : string;
    mimetype?   : string;
    size?       : number;
    type?       : string;
    charter?    : string;
    color?      : string;
}

export interface IPhotoUrl extends Partial<IFile> {
    name    : string;
    color   : string;
    charter : string;
}

export interface IDataBaseUser {
    username   : string;
    avatar      : IPhotoUrl;
}

export interface IResponseList {
    page        : number;
    per_page    : number;
    total_count : number;
}

export interface IResponseOnlyMessage {
    message: string;
}
  


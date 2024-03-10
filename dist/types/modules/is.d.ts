declare function is_object(o: any): o is Exclude<object, Array<any>>;
declare function is_number(n: any): n is number;

export { is_number, is_object };

export default interface IBlog{
    title:string,
    description:string,
    coverImage:string,
    content:BlogContent[],
    author:string,
    createdAt:Date
}

type BlogContent ={
    type: string,
    data: string
}


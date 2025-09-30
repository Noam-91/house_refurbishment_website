export default interface IBlog{
    title:string,
    content:BlogContent[],
    author:string,
    createdAt:Date
}

type BlogContent ={
    type: string,
    data: string
}


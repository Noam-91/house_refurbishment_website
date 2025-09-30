export default interface IPage<T>{
    items:T[],
    "currentPage": number,
    "totalPages": number,
    "totalBlogs": number
}
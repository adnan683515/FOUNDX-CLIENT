
export const recentPost = async () => {

    const res = await fetch(`${process.env.baseapi}/items`)
    const data = await res.json()

    return data
}